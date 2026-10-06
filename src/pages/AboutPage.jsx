import React, { useEffect, useState } from "react";
import { ArrowRight, Compass, Globe, Sparkles, X } from "lucide-react";
import { Reveal, PlaceholderImage, Eyebrow, Button, SectionIntro, DemoContentNote, PageHero } from "../components/index.js";

const TEAM_ROLES = [
  {
    title: "CEO & FOUNDER",
    message: "Welcome to Africa Dining & Travel Guide. We created this company to help every guest discover Africa with care, from the places they visit to the meals and people they meet. We look forward to helping you plan a journey that feels personal, memorable and well supported.",
  },
  {
    title: "OPERATIONS",
    message: "Our operations team coordinates the details behind each journey, from transfers and accommodation to schedules between destinations. We work with trusted local partners to help your trip run smoothly.",
  },
  {
    title: "CUSTOMER SERVICE",
    message: "We are here to listen, answer questions and support you before and during your journey. Tell us what you need, and we will help make each step clear and comfortable.",
  },
  {
    title: "SAFARI / ADVENTURE GUIDES",
    message: "Our guides bring local knowledge, care and experience to each outing. They help guests explore wildlife, landscapes and culture safely, while making room for meaningful discoveries.",
  },
];

export default function AboutPage({ navigate }) {
  const [activeRole, setActiveRole] = useState(null);

  useEffect(() => {
    if (!activeRole) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveRole(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeRole]);

  return (
    <div className="page-shell">
      <PageHero eyebrow="About Us" title="Built by people who travel this ground themselves" tone="forest" />

      <section className="section section-sand">
        <div className="container detail-intro">
          <Reveal className="detail-intro-copy">
            <Eyebrow tone="teal">Our Story</Eyebrow>
            <DemoContentNote>Sample company story — replace with the client's real founding story</DemoContentNote>
            <p className="detail-intro-text">
              Africa Dining & Travel Guide started as a shared notebook between three friends who kept getting asked
              the same question: "where should I actually go?" What began as informal
              itineraries for visiting friends became a studio dedicated to a simple idea —
              that a trip through Africa should be planned with the same care as the
              destinations themselves deserve.
            </p>
            <p className="detail-intro-text">
              Today, we plan journeys and dining experiences across six destinations, with
              local specialists on the ground in each one. We keep our roster of experiences
              deliberately curated rather than exhaustive — everything on this site is here
              because someone on our team has done it, eaten it, or sailed it themselves.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <PlaceholderImage label="FOUNDING TEAM ON LOCATION" tone="gold" ratio="1 / 1" rounded="rounded-full" className="about-team-photo" />
          </Reveal>
        </div>
      </section>

      <section className="section section-earth">
        <div className="container">
          <div className="value-grid value-grid-3">
            <Reveal className="value-card">
              <span className="value-icon"><Compass size={22} strokeWidth={1.5} /></span>
              <h3>Mission</h3>
              <p>To make Africa's destinations, culture and food accessible through itineraries built on real, firsthand expertise.</p>
            </Reveal>
            <Reveal delay={80} className="value-card">
              <span className="value-icon"><Globe size={22} strokeWidth={1.5} /></span>
              <h3>Vision</h3>
              <p>A continent explored on its own terms — where every visitor leaves with a genuine sense of place, not a checklist.</p>
            </Reveal>
            <Reveal delay={160} className="value-card">
              <span className="value-icon"><Sparkles size={22} strokeWidth={1.5} /></span>
              <h3>What's Different</h3>
              <p>We curate rather than catalogue — a shorter list of experiences, each one vetted by someone on our team.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <SectionIntro eyebrow="The Team" title="A small studio, on the ground" tone="gold" />
          <div className="team-grid team-role-grid">
            {TEAM_ROLES.map((role, index) => (
              <Reveal key={role.title} delay={index * 70} className="team-role-card-wrap">
                <button className="team-role-card" onClick={() => setActiveRole(role)} aria-haspopup="dialog">
                  <span>{role.title}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {activeRole && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveRole(null); }}>
          <div className="modal team-role-modal" role="dialog" aria-modal="true" aria-labelledby="team-role-title">
            <button className="modal-close" onClick={() => setActiveRole(null)} aria-label="Close team message"><X size={20} /></button>
            <Eyebrow tone="teal">A Note from Our Team</Eyebrow>
            <h2 id="team-role-title" className="modal-title">{activeRole.title}</h2>
            <p className="team-role-message">“{activeRole.message}”</p>
            <p className="team-role-signature">— CEO & Founder</p>
          </div>
        </div>
      )}

      <section className="section section-forest cta-banner">
        <div className="container">
          <Reveal className="cta-banner-inner">
            <h2 className="section-title">Let's build your itinerary together</h2>
            <p>Tell us what draws you to Africa, and we'll take it from there.</p>
            <Button variant="primary" icon={ArrowRight} onClick={() => navigate("contact")}>Get in Touch</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   15. PAGE: CONTACT
---------------------------------------------------------------------------- */
