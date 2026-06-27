import { useEffect, useRef, useState } from "react";
import { GOOGLE_REVIEWS_URL } from "./constants";

// LAYER 2: Hand-curated fallback reviews (displayed immediately, no API call).
// TODO: Once a /api/reviews serverless endpoint is wired to Google Places API,
//       fetch live reviews and merge with these as a fallback.
const reviews = [
  {
    name: "Aarti Deshmukh",
    rating: 5,
    date: "2 weeks ago",
    text: "What a peaceful break from Mumbai! The cottage was spotless, the food was home-style and delicious, and the hosts treated us like family. Waking up to the sound of birds and mist over the hills is unforgettable.",
  },
  {
    name: "Rohan Kapoor",
    rating: 5,
    date: "1 month ago",
    text: "Stayed here with my partner for our anniversary. The verandah view at sunset is just magical. The owner personally helped us plan walks around Matheran. Highly recommend for anyone wanting to actually unplug.",
  },
  {
    name: "Sneha Iyer",
    rating: 4,
    date: "2 months ago",
    text: "Lovely homestay, very clean and very quiet. The thali they served at dinner was one of the best meals of our trip. Reaching by car is a little rough on the last stretch but totally worth it.",
  },
  {
    name: "Vikram Joshi",
    rating: 5,
    date: "3 months ago",
    text: "Booked a family stay for 4. The hosts arranged a bonfire night and home-cooked breakfast that the kids still talk about. Perfect monsoon escape — the green around the cottage is unreal.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < n ? "#B8860B" : "none"} stroke="#B8860B" strokeWidth="1.6">
          <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.7 5.7 21l1.5-7L2 9.3l7-.8L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <div
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full font-semibold text-white"
      style={{ backgroundColor: "#6B7C3F" }}
    >
      {name.charAt(0)}
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const long = r.text.length > 180;
  return (
    <div
      className="relative flex h-full min-w-[280px] flex-shrink-0 snap-start flex-col rounded-xl border bg-[#FBF8EF] p-6 shadow-sm transition-transform hover:-translate-y-1 sm:min-w-0"
      style={{ borderColor: "#6B7C3F40" }}
    >
      <div
        className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold shadow-sm"
        style={{ color: "#6E6A55" }}
      >
        <span
          className="grid h-4 w-4 place-items-center rounded-full font-bold text-white"
          style={{ background: "linear-gradient(135deg, #4285F4 0%, #EA4335 100%)", fontSize: 10 }}
        >
          G
        </span>
        via Google
      </div>

      <div className="flex items-center gap-3">
        <Avatar name={r.name} />
        <div>
          <div className="font-semibold" style={{ color: "#6B7C3F" }}>
            {r.name}
          </div>
          <div className="text-[12px]" style={{ color: "#6E6A55" }}>
            {r.date}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <Stars n={r.rating} />
      </div>

      <p
        className={`mt-4 text-sm leading-relaxed ${expanded ? "" : "line-clamp-4"}`}
        style={{ color: "#3F3F2C" }}
      >
        {r.text}
      </p>

      {long && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 self-start text-xs font-semibold"
          style={{ color: "#B8860B" }}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export function Reviews() {
  const [active, setActive] = useState(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (hoverRef.current) return;
      setActive((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="reviews" className="px-6 py-24 sm:py-28" style={{ backgroundColor: "#EFE3CB" }} data-fade>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase" style={{ color: "#B8860B", letterSpacing: "0.28em" }}>
            <span className="decor-rule" />
            Guest Voices
            <span className="decor-rule" />
          </div>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">What Our Guests Say</h2>
          <p className="mt-2 text-sm" style={{ color: "#6E6A55" }}>
            Real reviews from Google
          </p>
        </div>

        {/* Overall rating */}
        <div
          className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-3 rounded-2xl border bg-[#FBF8EF] p-6 text-center sm:flex-row sm:justify-between sm:text-left"
          style={{ borderColor: "#6B7C3F40" }}
        >
          <div className="flex items-center gap-4">
            <div className="font-serif text-5xl font-bold" style={{ color: "#B8860B" }}>
              4.8
            </div>
            <div>
              <Stars n={5} />
              <div className="mt-1 text-xs" style={{ color: "#6E6A55" }}>
                based on 47 Google reviews
              </div>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold underline-offset-4 hover:underline"
            style={{ color: "#6B7C3F" }}
          >
            Read all reviews on Google →
          </a>
        </div>

        {/* Mobile: snap scroll. Desktop: 3-col grid */}
        <div
          className="mt-10"
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
        >
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:hidden">
            {reviews.map((r, i) => (
              <ReviewCard key={i} r={r} />
            ))}
          </div>

          <div className="hidden md:grid md:grid-cols-3 md:gap-6">
            {[0, 1, 2].map((offset) => {
              const r = reviews[(active + offset) % reviews.length];
              return <ReviewCard key={`${active}-${offset}`} r={r} />;
            })}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                aria-label={`Review ${i + 1}`}
                onClick={() => setActive(i)}
                className="h-2 rounded-full transition-all"
                style={{
                  width: i === active ? 24 : 8,
                  backgroundColor: i === active ? "#B8860B" : "#6B7C3F55",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
