import { MAP_EMBED_URL, MAP_OPEN_URL, MAP_DIRECTIONS_URL } from "./constants";

const distances = [
  { emoji: "🚗", from: "From Mumbai", value: "~3 hrs", sub: "120 km via Old Mumbai-Pune Hwy" },
  { emoji: "🚗", from: "From Pune", value: "~3.5 hrs", sub: "120 km via NH48" },
  { emoji: "🚗", from: "From Nashik", value: "~4.5 hrs", sub: "180 km via NH160" },
  { emoji: "🚆", from: "Nearest Railway", value: "~21 km", sub: "Neral Junction → toy train" },
];

export function Location() {
  return (
    <section id="location" className="px-6 py-24 sm:py-28" data-fade>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase" style={{ color: "#B8860B", letterSpacing: "0.28em" }}>
            <span className="decor-rule" />
            Find Us
            <span className="decor-rule" />
          </div>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Tucked into Matheran's hills</h2>
        </div>

        {/* TODO: Replace map embed query with the exact Google Maps pin URL provided by the cottage owner.
            For a keyed iframe use:
            https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=Matheran,Maharashtra,India&zoom=14 */}
        <div
          className="mt-10 overflow-hidden rounded-xl border bg-[#FBF4E4] shadow-sm"
          style={{ borderColor: "#6B7C3F40" }}
        >
          <iframe
            title="Map of Matheran, Maharashtra"
            src={MAP_EMBED_URL}
            loading="lazy"
            className="block h-[280px] w-full md:h-[420px]"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-5 flex justify-center">
          <a
            href={MAP_OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "#6B7C3F" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 3h7v7M21 3l-9 9M5 5h6v2H7v10h10v-4h2v6H5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Open in Google Maps
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {distances.map((d) => (
            <div
              key={d.from}
              className="rounded-xl border bg-[#FBF4E4] p-5 text-center transition-transform hover:-translate-y-1"
              style={{ borderColor: "#6B7C3F40" }}
            >
              <div className="text-2xl">{d.emoji}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7C3F" }}>
                {d.from}
              </div>
              <div className="mt-2 font-serif text-2xl font-semibold" style={{ color: "#B8860B" }}>
                {d.value}
              </div>
              <div className="mt-1 text-xs" style={{ color: "#6E6A55" }}>
                {d.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold shadow-md transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "#B8860B", color: "#2C2C1E" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-8 8-13a8 8 0 10-16 0c0 5 8 13 8 13z" strokeLinejoin="round" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
