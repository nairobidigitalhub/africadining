import React from "react";
import { Plane, CarFront, Truck } from "lucide-react";
import { PageHero } from "../components/PageHero.jsx";
import { PlaceholderImage, Reveal } from "../components/primitives.jsx";

const TRANSPORT_OPTIONS = [
  {
    title: "Hotel Transfers and Excursions",
    description: "Vans and saloon vehicles provide comfortable transport for hotel transfers and local excursions.",
    image: "LOGISTICS HOTEL TRANSFERS",
    icon: CarFront,
  },
  {
    title: "Safari and Game Viewing",
    description: "Four by four safari vehicles take guests across the terrain for safari drives and wildlife viewing.",
    image: "LOGISTICS SAFARI VEHICLES",
    icon: Truck,
  },
  {
    title: "Domestic and Internal Flights",
    description: "Comfortable, reliable flights on Dash aircraft, Cessna planes and Caravans connect local airports with airstrips in parks, reserves and conservancies.",
    image: "LOGISTICS DOMESTIC FLIGHTS",
    icon: Plane,
  },
];

export default function LogisticsPage() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Getting Around"
        title="Travel Logistics"
        sub="From hotel transfers to remote airstrips, we help guests travel comfortably between each part of their journey."
        tone="forest"
      />
      <section className="section section-sand">
        <div className="container">
          <div className="listing-grid listing-grid-3">
            {TRANSPORT_OPTIONS.map(({ title, description, image, icon: Icon }, index) => (
              <Reveal key={title} className="exp-card" delay={index * 70}>
                <PlaceholderImage label={image} tone="sand" ratio="4 / 3" className="exp-card-media" icon={Icon} />
                <div className="exp-card-body">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
