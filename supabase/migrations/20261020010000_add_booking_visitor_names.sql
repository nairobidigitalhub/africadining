alter table public.booking_requests
  add column if not exists visitor_names text[] not null default '{}'::text[];

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
    and cardinality(visitor_names) <= adults + children - 1
    and length(array_to_string(visitor_names, '')) <= 3720
  );
