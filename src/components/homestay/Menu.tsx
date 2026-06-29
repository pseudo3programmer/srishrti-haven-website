import { useState } from "react";
import menuCard from "@/assets/menu-card.jpeg.asset.json";
import { Lightbox } from "./Lightbox";

const breakfast = [
  ["Tea", "20"],
  ["Coffee", "30"],
  ["Milk Cup", "30"],
  ["Milk Glass", "50"],
  ["Kanda Poha", "50"],
  ["Batata Poha", "60"],
  ["Upma", "60"],
  ["Sheera", "60"],
  ["Single Omelet Pav", "60"],
  ["Double Omelet Pav", "80"],
  ["Single Egg Burji Pav", "60"],
  ["Double Egg Burji Pav", "80"],
  ["Plain Maggi", "50"],
  ["Masala Maggi", "60"],
  ["Cheese Maggi", "80"],
  ["Finger Chips (Min 2 Plate)", "60"],
  ["Bread Butter (Min 2 Plate)", "60"],
  ["Jam Bread (Min 2 Plate)", "50"],
];

const mains = [
  ["Sp. Veg Thali", "2 Bhaji, 1 Dal Vati, 1 Rice, 3 Chapati, Papad & Pickle, Sweet", "250"],
  ["Veg Thali", "1 Bhaji, 1 Dal Vati, 1 Rice, 2 Chapati, Papad & Pickle", "200"],
  ["Baida Curry Thali", "1 Rice, 2 Egg Curry, 3 Chapati, Salad", "220"],
  ["Chicken Thali", "1 Rice, 1 Plate Chicken Curry, 3 Chapati, Salad", "300"],
  ["Mutton Thali", "1 Rice, 1 Plate Mutton Curry, 3 Chapati, Salad", "500"],
  ["Chicken Handi (1 Kg)", "", "900"],
  ["Chicken Handi (1/2 Kg)", "", "450"],
  ["Mutton Handi (1 Kg)", "", "1400"],
  ["Mutton Handi (1/2 Kg)", "", "750"],
  ["Plain Rice (1 Plate)", "", "70"],
  ["Chapati (Single)", "", "15"],
  ["Bhakari (Single)", "", "25"],
  ["Green Salad (1 Plate)", "", "90"],
  ["Boil Egg (Single)", "", "20"],
  ["Papad Roasted (Single)", "", "10"],
  ["Papad Fry (Single)", "", "15"],
  ["Extra Dal Vati", "", "40"],
  ["Extra Bhaji Plate", "", "50"],
  ["Ice Tray", "", "25"],
];

const other = [
  ["Hot Water 1 Bucket (7.30 AM to 10.00 AM)", "30"],
  ["Extra Mattress Set Per Day (Single)", "200"],
  ["Cold Drink & Bisleri Available Here", "—"],
];

function SectionTitle({ title, time }: { title: string; time?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <span className="h-px flex-1 max-w-16" style={{ backgroundColor: "#B8860B66" }} />
      <h3 className="font-serif text-xl sm:text-2xl font-semibold whitespace-nowrap" style={{ color: "#2C2C1E" }}>
        {title}
        {time && (
          <span className="ml-2 text-xs font-sans font-normal tracking-wide" style={{ color: "#6E6A55" }}>
            {time}
          </span>
        )}
      </h3>
      <span className="h-px flex-1 max-w-16" style={{ backgroundColor: "#B8860B66" }} />
    </div>
  );
}

function Row({ name, desc, price }: { name: string; desc?: string; price: string }) {
  return (
    <div className="flex items-baseline gap-2 py-1.5">
      <div className="flex-1 min-w-0">
        <span className="text-sm font-medium" style={{ color: "#2C2C1E" }}>{name}</span>
        {desc && <span className="ml-1.5 text-xs" style={{ color: "#6E6A55" }}>({desc})</span>}
      </div>
      <span className="flex-1 border-b border-dotted self-end mb-1.5" style={{ borderColor: "#B8860B55" }} />
      <span className="text-sm font-semibold tabular-nums" style={{ color: "#6B7C3F" }}>
        {price === "—" ? price : `₹${price}`}
      </span>
    </div>
  );
}

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <section id="menu" className="px-6 py-24 sm:py-28" data-fade>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase" style={{ color: "#B8860B", letterSpacing: "0.28em" }}>
            <span className="decor-rule" />
            Home-Cooked Goodness
            <span className="decor-rule" />
          </div>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Menu Card</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm" style={{ color: "#6E6A55" }}>
            Fresh, simple meals prepared by the family. Tap the card to view the full printed menu.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          <div
            className="rounded-2xl border bg-[#FBF4E4] p-7 shadow-sm"
            style={{ borderColor: "#6B7C3F33" }}
          >
            <SectionTitle title="Breakfast" time="8:30 — 10:30 AM" />
            <div className="divide-y" style={{ borderColor: "#6B7C3F1A" }}>
              {breakfast.map(([n, p]) => (
                <Row key={n} name={n} price={p} />
              ))}
            </div>
          </div>

          <div className="space-y-7">
            <div
              className="rounded-2xl border bg-[#FBF4E4] p-7 shadow-sm"
              style={{ borderColor: "#6B7C3F33" }}
            >
              <SectionTitle title="Lunch & Dinner" time="12:30—2:30 PM • 8:00—9:30 PM" />
              <div>
                {mains.map(([n, d, p]) => (
                  <Row key={n} name={n} desc={d} price={p} />
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl border bg-[#FBF4E4] p-7 shadow-sm"
              style={{ borderColor: "#6B7C3F33" }}
            >
              <SectionTitle title="Other" />
              <div>
                {other.map(([n, p]) => (
                  <Row key={n} name={n} price={p} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#F5E9D3] shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
            style={{ backgroundColor: "#B8860B" }}
          >
            View Printed Menu Card
          </button>
          <p className="mt-4 text-xs" style={{ color: "#6E6A55" }}>
            Please place food orders at least 2 hours in advance.
          </p>
        </div>
      </div>

      {open && <Lightbox images={[menuCard.url]} index={0} onClose={() => setOpen(false)} onPrev={() => {}} onNext={() => {}} />}
    </section>
  );
}
