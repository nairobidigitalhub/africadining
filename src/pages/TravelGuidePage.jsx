import React, { useEffect, useMemo, useCallback } from "react";
import { SITE_CONFIG, waHref } from "../config/site.js";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function TravelGuidePage({ navigate }) {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Travel Guide" title="The Africa Dining & Travel Guide" sub="Destination notes, seasonal advice, and the dining rooms worth planning a stop around." tone="forest" />

      <section className="section section-sand">
        <div className="container guide-hero">
          <Reveal className="guide-hero-visual">
            <PlaceholderImage label="TRAVEL GUIDE FEATURE IMAGE" tone="gold" ratio="16 / 9" />
          </Reveal>
          <Reveal delay={80} className="guide-hero-copy">
            <Eyebrow tone="teal">Featured Guide</Eyebrow>
            <h2 className="section-title">East &amp; Southern Africa Guide</h2>
            <p>
              Our field guide to the region includes destination notes, vetted experiences and
              dining rooms, and a season-by-season planning calendar. Available as a digital
              download, with printed copies at partner hotels.
            </p>
            <div className="hero-ctas">
              <Button variant="primary" icon={Download} onClick={() => navigate("contact")}>
                Request the Digital Guide
              </Button>
              <Button variant="secondary" onClick={() => navigate("contact")}>Request a Printed Copy</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="guide-services">
        <PageHero eyebrow="Travel Guide" title="Our Services" sub="Guide services for how you like to explore. Pick the style that fits your trip." tone="forest" />
      </div>
      <section className="section section-sand">
        <div className="container">
          <div className="listing-grid listing-grid-3">
            {SERVICES.filter((service) => !["professional-guides", "specialized-guides"].includes(service.slug)).map((service) => (
              <Reveal key={service.slug} className="exp-card">
                <button className="exp-card-media-btn" onClick={() => navigate("service", service.slug)} aria-label={`View ${service.name}`}>
                  <PlaceholderImage label={service.image} tone="gold" ratio="4 / 5" className="exp-card-media" />
                </button>
                <div className="exp-card-body">
                  <h3><A page="service" param={service.slug} navigate={navigate}>{service.name}</A></h3>
                  <p>{service.blurb}</p>
                  <div className="exp-card-footer">
                    <A page="service" param={service.slug} navigate={navigate} className="card-link">Learn More <ArrowRight size={15} /></A>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-forest">
        <div className="container guide-social">
          <Reveal className="guide-social-inner">
            <div className="qr-placeholder qr-placeholder-dark" role="img" aria-label="QR code placeholder linking to the digital guide">
              <div className="qr-grid">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className={i % 3 === 0 ? "on" : ""} />
                ))}
              </div>
              <span>Scan to open the guide</span>
            </div>
            <div>
              <h3 className="section-title">Follow along between guide editions</h3>
              <div className="footer-social footer-social-light">
                {SITE_CONFIG.social.instagram && <a href={SITE_CONFIG.social.instagram} aria-label={`${SITE_CONFIG.business.name} on Instagram`} target="_blank" rel="noreferrer noopener"><Instagram size={20} /></a>}
                {SITE_CONFIG.social.facebook && <a href={SITE_CONFIG.social.facebook} aria-label={`${SITE_CONFIG.business.name} on Facebook`} target="_blank" rel="noreferrer noopener"><Facebook size={20} /></a>}
                {waHref(SITE_CONFIG.contact.whatsappNumber) && <a href={waHref(SITE_CONFIG.contact.whatsappNumber)} aria-label={`${SITE_CONFIG.business.name} on WhatsApp`} target="_blank" rel="noreferrer noopener"><MessageCircle size={20} /></a>}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   12b. PAGES: OUR SERVICES (list + detail)
---------------------------------------------------------------------------- */
