import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { PlaceholderImage, Reveal } from "../components/primitives.jsx";

const LOGISTICS_SECTIONS = [
  {
    title: "Domestic Flights",
    introduction: "Small aircraft connect local airports with airstrips near parks, reserves and conservancies.",
    photos: [
      {
        image: "LOGISTICS FLIGHT AIRCRAFT",
        title: "Flights to Remote Airstrips",
        description: "Dash, Cessna and Caravan aircraft help guests reach safari destinations across the region upon request.",
      },
    ],
  },
  {
    title: "Safari and Game Viewing",
    introduction: "Four by four vehicles take guests along safari routes and across varied terrain for wildlife viewing.",
    photos: [
      {
        image: "LOGISTICS SAFARI VEHICLE WILDLIFE",
        title: "Game Viewing in the Reserve",
        description: "Safari vehicles bring guests close to wildlife while exploring the reserve.",
      },
      {
        image: "LOGISTICS SAFARI VEHICLE UGANDA",
        title: "Safari Vehicle in Uganda",
        description: "A four by four ready to explore Uganda’s landscapes and wildlife areas.",
      },
      {
        image: "LOGISTICS SAFARI VEHICLE 02",
        title: "Safari Vehicle for the Journey",
        description: "A rugged vehicle suited to travel on rural roads and safari routes.",
      },
      {
        image: "LOGISTICS SAFARI VEHICLE LIONS",
        title: "A Close View of the Wildlife",
        description: "An open safari vehicle offers guests a clear view during a game drive.",
      },
      {
        image: "LOGISTICS SAFARI VEHICLE TOWN",
        title: "Four by Four Transfers",
        description: "Safari vehicles are ready to carry guests between towns, lodges and wildlife areas.",
      },
      {
        image: "LOGISTICS SAFARI VEHICLE GUIDE",
        title: "Guided Safari Travel",
        description: "Guests travel with local support as they set out to explore the region.",
      },
    ],
  },
  {
    title: "Hotel Transfers and Excursions",
    introduction: "Vans and saloon vehicles provide comfortable transport for hotel transfers and local excursions.",
    photos: [
      {
        image: "LOGISTICS TRANSFER CABIN 01",
        title: "Passenger Comfort",
        description: "Comfortable seating for hotel transfers and excursions around the destination.",
      },
      {
        image: "LOGISTICS TRANSFER CABIN 02",
        title: "Room to Settle In",
        description: "A spacious vehicle interior for a relaxed ride between stops.",
      },
      {
        image: "LOGISTICS TRANSFER MINIBUS",
        title: "Group Transfers",
        description: "A minibus helps guests travel together between the airport, hotel and excursions.",
      },
    ],
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
      {LOGISTICS_SECTIONS.map((section) => (
        <section className="section section-sand" key={section.title}>
          <div className="container">
            <div className="section-intro">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-note">{section.introduction}</p>
            </div>
            <div className="listing-grid listing-grid-3">
              {section.photos.map((photo, index) => (
                <Reveal key={photo.image} className="exp-card" delay={(index % 3) * 70}>
                  <PlaceholderImage label={photo.image} tone="sand" ratio="4 / 3" className="exp-card-media logistics-photo-frame" />
                  <div className="exp-card-body">
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
