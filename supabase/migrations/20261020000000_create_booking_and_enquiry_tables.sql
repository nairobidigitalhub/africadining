create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  customer_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  destination text not null,
  travel_date date not null,
  adults integer not null default 1 check (adults >= 1),
  children integer not null default 0 check (children >= 0),
  experience text not null,
  price text,
  notes text,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'confirmed', 'cancelled'))
);

create index if not exists booking_requests_created_at_idx
  on public.booking_requests (created_at desc);

alter table public.booking_requests enable row level security;

revoke all on public.booking_requests from anon, authenticated;
grant insert on public.booking_requests to anon;
drop policy if exists "Public can submit booking requests" on public.booking_requests;
create policy "Public can submit booking requests"
  on public.booking_requests for insert to anon
  with check (
    length(trim(customer_name)) between 1 and 120
    and length(trim(email)) between 3 and 320
    and length(trim(phone)) between 3 and 40
    and length(trim(country)) between 1 and 100
    and length(trim(destination)) between 1 and 200
    and length(trim(experience)) between 1 and 200
    and (notes is null or length(notes) <= 4000)
    and adults between 1 and 16
    and children between 0 and 16
  );

create table if not exists public.contact_enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text not null default 'General enquiry',
  message text not null,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'resolved'))
);

create index if not exists contact_enquiries_created_at_idx
  on public.contact_enquiries (created_at desc);

alter table public.contact_enquiries enable row level security;

revoke all on public.contact_enquiries from anon, authenticated;
grant insert on public.contact_enquiries to anon;
drop policy if exists "Public can submit contact enquiries" on public.contact_enquiries;
create policy "Public can submit contact enquiries"
  on public.contact_enquiries for insert to anon
  with check (
    length(trim(name)) between 1 and 120
    and length(trim(email)) between 3 and 320
    and (phone is null or length(phone) <= 40)
    and length(trim(subject)) between 1 and 200
    and length(trim(message)) between 10 and 5000
  );
