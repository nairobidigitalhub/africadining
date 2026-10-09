import React from "react";
import {
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG, waHref } from "../config/siteConfig.js";
import { A, ContourDivider } from "./primitives.jsx";

export function Footer({ navigate }) {
  const wa = waHref(SITE_CONFIG.contact.whatsappNumber);
  const ig = SITE_CONFIG.social.instagram;
  const fb = SITE_CONFIG.social.facebook;
  const tt = SITE_CONFIG.social.tiktok;

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="brand-word footer-brand-word">
            {SITE_CONFIG.business.lineOne}<span className="brand-sub">{SITE_CONFIG.business.lineTwo}</span>
          </span>
          <p>
            Curated African journeys, destination expertise and dining experiences,
            planned by people who know the coastline, the plains and the kitchens firsthand.
          </p>
          <div className="footer-social">
            {ig && <a href={ig} aria-label={`${SITE_CONFIG.business.name} on Instagram`} target="_blank" rel="noreferrer noopener"><Instagram size={18} /></a>}
            {fb && <a href={fb} aria-label={`${SITE_CONFIG.business.name} on Facebook`} target="_blank" rel="noreferrer noopener"><Facebook size={18} /></a>}
            {tt && <a href={tt} aria-label={`${SITE_CONFIG.business.name} on TikTok`} target="_blank" rel="noreferrer noopener"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.09 2.7 1.58 4.24 1.65v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.6-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.8-1.36 3.94-1.32 1.88-3.6 3.1-5.91 3.14-1.42.08-2.84-.31-4.04-1.06-1.99-1.24-3.34-3.53-3.38-5.89-.04-1.44.27-2.88 1.01-4.12 1.17-2.03 3.31-3.47 5.65-3.69.27-.02.54-.03.81-.01.02 1.48-.04 2.96-.04 4.44-.99-.32-2.14-.23-3.02.36-.64.42-1.13 1.06-1.35 1.79-.18.58-.13 1.21.08 1.78.39 1.13 1.49 1.96 2.69 2.04.8.06 1.65-.16 2.27-.68.63-.51 1.06-1.29 1.17-2.1.05-.37.01-.74.02-1.11V.02z" /></svg></a>}
            {wa && <a href={wa} aria-label={`Message ${SITE_CONFIG.business.name} on WhatsApp`} target="_blank" rel="noreferrer noopener"><MessageCircle size={18} /></a>}
          </div>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><A page="destinations" navigate={navigate}>Destinations</A></li>
            <li><A page="experiences" navigate={navigate}>Experiences</A></li>
            <li><A page="dining" navigate={navigate}>Dining</A></li>
            <li><A page="guide" navigate={navigate}>Travel Guide</A></li>
            <li><A page="accommodation" navigate={navigate}>Accommodation</A></li>
            <li><A page="gallery" navigate={navigate}>Gallery</A></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><A page="about" navigate={navigate}>About Us</A></li>
            <li><A page="contact" navigate={navigate}>Contact</A></li>
            <li><A page="privacy" navigate={navigate}>Privacy Policy</A></li>
            <li><A page="terms" navigate={navigate}>Terms of Service</A></li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h3>Plan Your Trip</h3>
          <p>Tell us what you’d like to explore and our team can help plan your journey.</p>
          {wa && <a className="btn btn-secondary" href={wa} target="_blank" rel="noreferrer noopener"><span>Chat on WhatsApp</span><MessageCircle size={17} aria-hidden="true" /></a>}
        </div>
      </div>

      <ContourDivider tone="gold" />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.business.name}. All rights reserved.</p>
        <div className="footer-bottom-links">
          <A page="privacy" navigate={navigate}>Privacy</A>
          <A page="terms" navigate={navigate}>Terms</A>
        </div>
      </div>
    </footer>
  );
}
