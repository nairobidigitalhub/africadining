import React, { useEffect, useMemo, useState, useCallback } from "react";
import { SITE_CONFIG, telHref, mailHref, waHref } from "../config/site.js";
import { EMAILJS_CONFIG } from "../config/emailjs.js";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function ContactPage() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", subject: "General enquiry", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.message.trim() || values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSending || !validate()) return;
    setIsSending(true);
    setSubmitError("");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_CONFIG.serviceId,
          template_id: EMAILJS_CONFIG.contactTemplateId,
          user_id: EMAILJS_CONFIG.publicKey,
          template_params: {
            name: values.name.trim(),
            email: values.email.trim(),
            phone: values.phone.trim() || "Not provided",
            country: "Website enquiry",
            destination: "Not specified",
            travel_date: "Not specified",
            adults: 0,
            children: 0,
            experience: values.subject,
            price: "Not applicable",
            notes: values.message.trim(),
            title: values.subject,
            subject: values.subject,
            message: values.message.trim(),
            time: new Date().toLocaleString("en-KE", { dateStyle: "medium", timeStyle: "short" }),
          },
        }),
      });
      if (!response.ok) throw new Error("Contact request could not be sent.");
      setSubmitted(true);
    } catch {
      setSubmitError(`We couldn't send your message. Please try again or email ${SITE_CONFIG.contact.email}.`);
    } finally {
      setIsSending(false);
    }
  };

  const phoneHref = telHref(SITE_CONFIG.contact.phone);
  const emailHref = mailHref(SITE_CONFIG.contact.email);
  const wa = waHref(SITE_CONFIG.contact.whatsappNumber);

  return (
    <div className="page-shell">
      <PageHero eyebrow="Contact" title="Let's start planning" tone="forest" />
      <section className="section section-sand">
        <div className="container contact-grid">
          <Reveal className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <span className="confirm-icon"><Check size={26} /></span>
                <h2 className="section-title">Message sent</h2>
                <p>Thanks, {values.name.split(" ")[0]}. Our team replies to every enquiry within one business day.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="c-name">Full name</label>
                    <input id="c-name" name="name" type="text" value={values.name} onChange={update("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "c-name-err" : undefined} />
                    {errors.name && <span id="c-name-err" className="field-error">{errors.name}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="c-phone">Phone (optional)</label>
                    <input id="c-phone" name="phone" type="tel" value={values.phone} onChange={update("phone")} />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" name="email" type="email" value={values.email} onChange={update("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "c-email-err" : undefined} />
                  {errors.email && <span id="c-email-err" className="field-error">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="c-subject">Subject</label>
                  <select id="c-subject" name="subject" value={values.subject} onChange={update("subject")}>
                    <option>General enquiry</option>
                    <option>Itinerary planning</option>
                    <option>Existing booking</option>
                    <option>Dining reservation</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="c-message">Message</label>
                  <textarea id="c-message" name="message" rows={5} value={values.message} onChange={update("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "c-message-err" : undefined} />
                  {errors.message && <span id="c-message-err" className="field-error">{errors.message}</span>}
                </div>
                {submitError && <p role="alert" className="field-error">{submitError}</p>}
                <Button type="submit" variant="primary" icon={Send} disabled={isSending}>{isSending ? "Sending…" : "Send Message"}</Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={100} className="contact-info">
            {(wa || phoneHref) && (
              <div className="contact-info-block">
                <h3><Phone size={16} /> Phone</h3>
                <p>{wa ? <a href={wa} target="_blank" rel="noreferrer noopener" aria-label={`Chat with ${SITE_CONFIG.business.name} on WhatsApp`}>{SITE_CONFIG.contact.phoneDisplay || SITE_CONFIG.contact.phone}</a> : <a href={phoneHref}>{SITE_CONFIG.contact.phoneDisplay || SITE_CONFIG.contact.phone}</a>}</p>
              </div>
            )}
            {emailHref && (
              <div className="contact-info-block">
                <h3><Mail size={16} /> Email</h3>
                <p><a href={emailHref}>{SITE_CONFIG.contact.email}</a></p>
              </div>
            )}
            {SITE_CONFIG.contact.address && (
              <div className="contact-info-block">
                <h3><MapPin size={16} /> Studio</h3>
                <p>{SITE_CONFIG.contact.address}</p>
              </div>
            )}
            {wa && <Button variant="secondary" href={wa} icon={MessageCircle} className="contact-whatsapp" target="_blank" rel="noreferrer noopener">Chat on WhatsApp</Button>}
            <div className="footer-social">
              {SITE_CONFIG.social.instagram && <a href={SITE_CONFIG.social.instagram} aria-label={`${SITE_CONFIG.business.name} on Instagram`} target="_blank" rel="noreferrer noopener"><Instagram size={18} /></a>}
              {SITE_CONFIG.social.facebook && <a href={SITE_CONFIG.social.facebook} aria-label={`${SITE_CONFIG.business.name} on Facebook`} target="_blank" rel="noreferrer noopener"><Facebook size={18} /></a>}
            </div>
            <PlaceholderImage label="STUDIO LOCATION — MAP PLACEHOLDER" tone="earth" ratio="4 / 3" icon={MapPin} className="contact-map" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   16. SIMPLE PAGES: PRIVACY / TERMS / 404
---------------------------------------------------------------------------- */
