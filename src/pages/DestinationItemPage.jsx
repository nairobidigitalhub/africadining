import React from "react";
import { ArrowLeft, MapPin } from "lucide-react";
import { DESTINATIONS } from "../data/destinations.js";
import { Button, PageHero, PlaceholderImage, Reveal, A } from "../components/index.js";

export default function DestinationItemPage({ id, navigate, onBook }) {
  const [countryId, categoryIndex, itemIndex] = (id || "").split("~");
  const country = DESTINATIONS.find((destination) => destination.id === countryId);
  const category = country?.categories?.[Number(categoryIndex)];
  const item = category?.items?.[Number(itemIndex)];

  if (!country || !category || !item) {
    return (
      <div className="page-shell">
        <PageHero eyebrow="Destinations" title="Destination not found" sub="This destination link may have changed." tone="forest" />
        <section className="section section-sand"><div className="container"><Button variant="secondary" onClick={() => navigate("destinations")} icon={ArrowLeft}>Back to Destinations</Button></div></section>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <PageHero eyebrow={`${country.name} · ${category.title}`} title={item.name} sub={item.blurb} tone="forest" />
      <section className="section section-sand">
        <div className="container detail-split">
          <Reveal className="detail-main">
            <PlaceholderImage label={item.image || `${item.name.toUpperCase()} IMAGE`} tone={country.accent} ratio="4 / 3" />
            <div className="detail-block">
              <h2>Explore {item.name}</h2>
              <p className="detail-intro-text">{item.blurb}</p>
              {item.region && <p className="offer-region"><MapPin size={13} aria-hidden="true" /> {item.region}, {country.name}</p>}
              {item.activities?.length > 0 && (
                <>
                  <h3>Things to do</h3>
                  <ul className="offer-tags">{item.activities.map((activity) => <li className="offer-tag" key={activity}>{activity}</li>)}</ul>
                </>
              )}
            </div>
          </Reveal>
          <Reveal className="booking-sidebar">
            <h2>{item.name}</h2>
            <p>{country.name}, {country.country}</p>
            <Button variant="primary" className="booking-sidebar-cta" onClick={() => onBook({ title: item.name, destinationName: item.name, price: "Custom quote" })}>Book This Destination</Button>
            <A page="destination" param={country.id} navigate={navigate} className="card-link offer-link"><ArrowLeft size={14} /> Back to {country.name}</A>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
