import React, { useEffect, useMemo, useState, useCallback } from "react";
import { SITE_CONFIG, mailHref } from "../config/site.js";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export function TermsPage({ navigate }) {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Legal" title="Terms & Services" tone="forest" />
      <section className="section section-earth">
        <div className="container container-narrow legal-copy">
          <h2 className="section-title">Terms for Safari Planning and Travel Services</h2>
          <p>
            <strong>Africa Dining & Travel Guide</strong> is a safari logistics and planning company offering both
            safari and travel programs selected from available options and safari programs planned around your interests.
          </p>

          <h3>Our Safari &amp; Travel Services</h3>
          <p>We offer:</p>
          <ul>
            <li><strong>Safari and travel programs:</strong> for visitors who wish to choose from available options and are open to suggestions.</li>
            <li><strong>Safari programs planned around your interests:</strong> for visitors with specific interests and family parties.</li>
          </ul>
          <p>Our booking agents are conversant with safari seasons and have helpful information to assist clients in making appropriate choices when planning their trips.</p>
          <p>It is our priority to help travellers make informed choices based on their preferred destinations, travel requirements, and the applicable safari season.</p>

          <h3>Booking Enquiries</h3>
          <p>
            For booking enquiries and further information, please contact <strong>Africa Dining &amp; Travel Guide</strong> through
            the <A page="contact" navigate={navigate}>contact details and booking form</A> provided on our website.
          </p>

          <h3>Traveller Responsibility</h3>
          <p>All travellers are responsible for providing accurate information and requirements as requested by our booking agent.</p>

          <h3 className="terms-arrow-heading">Information Required When Booking Your Trip</h3>
          <p>
            After concluding your booking with Africa Dining &amp; Travel Guide, you may be required to provide relevant
            travel and personal information to enable us to plan and coordinate your safari and travel arrangements effectively.
          </p>
          <p>This may include:</p>
          <ul>
            <li>Arrival and departure flight details.</li>
            <li>Meal requirements or dietary restrictions.</li>
            <li>Important personal information as requested by your booking agent, such as passport copies, Yellow Fever Certificate, and personal insurance information.</li>
          </ul>
          <p><strong>Confidentiality Guaranteed.</strong></p>
          <p>It is important to provide all requested information accurately and in a timely manner to ensure the smooth planning and operation of your trip.</p>

          <h3 className="terms-arrow-heading">Travel Documents &amp; Health Requirements</h3>
          <p>Travellers are responsible for obtaining and carrying the required valid travel and health documents for their journey.</p>
          <p>Where applicable, a <strong>Yellow Fever Certificate</strong> must be obtained and produced when going through immigration at any entry point.</p>
          <p>Travellers should inform their booking personnel of any physical, health, or dietary challenges and requirements well in advance to ensure comfort and convenience while travelling.</p>

          <h3 className="terms-arrow-heading">Travel Insurance &amp; Flying Doctors Services</h3>
          <p>Travel insurance is a priority.</p>
          <p>
            <strong>Flying Doctors Services</strong> for easy evacuation can be arranged upon request at a fee as advised during
            the booking of services. Such services are subject to the terms and conditions applicable to the coverage at
            destinations where the service is available.
          </p>

          <h3 className="terms-arrow-heading">Accommodation Availability</h3>
          <p>For quality services with every booking, accommodation and service availability is checked before a tour is confirmed.</p>
          <p>Where the client's preferred accommodation or service is unavailable, alternative options will be sought with the traveller's consent and consideration.</p>
          <p>Any alternative accommodation or service arrangements will be communicated as part of the booking and travel planning process.</p>
          <p>During low and peak seasons, as applicable in most African destinations, late bookings are handled with concern, consideration, and transparency.</p>
          <p>Nothing is too much trouble when you choose Africa Dining &amp; Travel Guide as your travel partner.</p>

          <h3 className="terms-arrow-heading">Meet &amp; Greet Services</h3>
          <p>Airport welcomes, hotel arrival, hotel departure, and safari departure are a priority to ensure smooth operation.</p>
          <p>These services are handled by trained customer service personnel positioned at entry points in Africa as indicated in the traveller's itinerary.</p>
          <p>This helps facilitate the smooth commencement of the planned itinerary.</p>

          <h3 className="terms-arrow-heading">Safari Briefing</h3>
          <p>A safari briefing is provided before the safari commences, depending on the country being visited and the itinerary arranged.</p>
          <p>While on safari, the guide provides a briefing before dinner about the next activity, including the relevant do's and don'ts.</p>

          <h3 className="terms-arrow-heading">Transportation</h3>
          <p>
            Our service vehicles may vary depending on the traveller's request, available and recommended standards, the
            service to be provided, the destination, and travel requirements, including weather conditions during the
            period of travel.
          </p>
          <p>Our transportation options range from:</p>
          <ul>
            <li>Saloon cars</li>
            <li>Vans</li>
            <li>Coaches</li>
            <li>4x4 Safari Land Cruisers with pop-up roofs</li>
            <li>Domestic flights, either scheduled or private charters, available upon request</li>
          </ul>

          <h3 className="terms-arrow-heading">Branding &amp; Identification</h3>
          <p>Our service vehicles are consistently branded with the <strong>Africa Dining &amp; Travel Guide</strong> logo.</p>
          <p>Our team members in branded gear are ready to assist whenever travellers require information or assistance.</p>
          <p>Our airport representatives, drivers and guides also wear branded company attire to make them easily identifiable to our guests.</p>

          <h3 className="terms-arrow-heading">Booking Confirmation &amp; Monitoring</h3>
          <p>Once safari services have been confirmed by Africa Dining &amp; Travel Guide, our company booking agent will provide the relevant monitoring details to assist with the smooth operation of the trip.</p>
          <p>Guests will receive the necessary information and updates relating to their confirmed arrangements and itinerary through carefully maintained and monitored platforms.</p>
          <p>Travellers will be issued with the <strong>final safari itinerary and accommodation service vouchers</strong> once the safari deposit or full payment has been made.</p>
          <p>Guidelines on deposits will be provided upon receipt of the invoice from our booking agent, together with an invitation visa letter showing all confirmed accommodation.</p>
        </div>
      </section>
    </div>
  );
}

export function LegalPage({ title }) {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Legal" title={title} tone="forest" />
      <section className="section section-earth">
        <div className="container container-narrow legal-copy">
          <p><strong>Last updated: October 6, 2026</strong></p>
          <p>
            At <strong>{SITE_CONFIG.business.name}</strong>, we treat your personal information with care. This policy
            explains what information we receive when you use this website, why we use it, and the choices and rights
            you have. We collect only what we need to respond to travel requests and arrange the services you ask us to plan.
          </p>

          <h3>Information you choose to share</h3>
          <p>
            If you send a booking request, we receive the details in that form: your name, email address, phone or
            WhatsApp number, country and destination, preferred travel date, party size, selected experience, and any
            special requests you choose to include. Special requests may reveal dietary or health information, so please
            share only what is needed to help us plan your trip.
          </p>
          <p>
            The booking form is a request for information, not a payment or confirmed reservation. It does not ask for
            card details, and the website does not take payment. Please do not enter payment card numbers, passwords, or
            passport or visa document numbers in the form. If documents are needed later to arrange a confirmed trip,
            our team will explain why and agree on an appropriate way to provide them.
          </p>
          <p>
            Booking and contact form submissions are stored in our Supabase database and sent to our business inbox
            through EmailJS. The newsletter box is a demonstration and does not subscribe your email address. If you
            contact us by email, phone, or WhatsApp, we
            receive the information you include in that conversation.
          </p>

          <h3>How we use your information</h3>
          <p>We use information you provide to:</p>
          <ul>
            <li>reply to your enquiry and prepare or follow up on a booking request;</li>
            <li>coordinate an itinerary or services you ask us to arrange, including with relevant travel providers when needed;</li>
            <li>support you before, during, or after a trip and meet applicable legal obligations; and</li>
            <li>protect and maintain the website and prevent misuse.</li>
          </ul>
          <p>We do not use booking details to send marketing messages without your permission, and we do not sell your personal information.</p>

          <h3>Who may receive information</h3>
          <p>
            Booking and contact form submissions are stored in Supabase, which hosts our database, and are sent through
            EmailJS to our configured business inbox. For direct enquiries, contact us at {SITE_CONFIG.contact.email}.
            Our website hosting and service providers may also process limited
            technical information needed to operate and protect the site. These providers are expected to use information
            only to provide their services to us.
          </p>
          <p>
            If you ask us to arrange travel, we may share relevant details with a lodge, transport provider, guide, or
            another supplier involved in your itinerary. We limit those details to what is reasonably needed for the
            arrangement and share them as part of responding to your request or carrying out the trip you ask us to plan.
            We may also disclose information where required by law or needed to protect people, rights, or safety.
          </p>
          <p>
            Some online service providers may process information outside Kenya. Where a transfer is required, we will
            use the safeguards required by applicable data protection law.
          </p>

          <h3>How long we keep information</h3>
          <p>
            We keep booking and enquiry information only for as long as it is needed to respond, plan or administer the
            requested travel, resolve related questions, and meet applicable legal or record-keeping requirements. We
            review information and delete or de-identify it when it is no longer needed for those purposes.
          </p>

          <h3>How we protect it</h3>
          <p>
            We use reasonable administrative and technical safeguards to protect information from loss, misuse, or
            unauthorised access. Form submissions are sent to Supabase and EmailJS over HTTPS. No website or online
            transmission can be guaranteed completely secure, so please share only the details needed for your request
            and contact us promptly if you have a concern.
          </p>

          <h3>Your choices and privacy rights</h3>
          <p>
            Subject to applicable law, you may ask us to explain how we use your personal information, request access to
            it, ask us to correct inaccurate details, object to certain processing, or request deletion where we are
            permitted to delete it. If processing relies on your consent, you may withdraw that consent. We may need to
            confirm your identity before responding. To make a request, email us using the address below.
          </p>
          <p>
            This policy is intended to reflect the principles and data subject rights in Kenya's Data Protection Act,
            2019. You can also read the{" "}
            <a href="https://www.odpc.go.ke/rights-of-a-data-subject/" target="_blank" rel="noreferrer noopener">
              Office of the Data Protection Commissioner's summary of data subject rights
            </a>.
          </p>

          <h3>Contact us</h3>
          <p>
            For a privacy question or request, contact <strong>{SITE_CONFIG.business.name}</strong> at{" "}
            <a href={mailHref(SITE_CONFIG.contact.email)}>{SITE_CONFIG.contact.email}</a>. If you are not satisfied
            with our response, you may contact Kenya's Office of the Data Protection Commissioner.
          </p>
        </div>
      </section>
    </div>
  );
}

export function NotFoundPage({ navigate, backPage = "home", label = "page" }) {
  return (
    <div className="page-shell">
      <section className="section section-sand not-found">
        <div className="container">
          <Eyebrow tone="teal">404</Eyebrow>
          <h1 className="section-title">We couldn't find that {label}</h1>
          <p>It may have been renamed or moved. Let's get you back on route.</p>
          <Button variant="primary" onClick={() => navigate(backPage)} icon={ArrowRight}>
            Back to {backPage === "home" ? "Home" : backPage.charAt(0).toUpperCase() + backPage.slice(1)}
          </Button>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   17. GLOBAL STYLES
---------------------------------------------------------------------------- */
