import { useState } from "react";

import standardRoom1 from "@/assets/standard-room-1.jpg.asset.json";
import standardRoom2 from "@/assets/standard-room-2.jpg.asset.json";
import standardRoom3 from "@/assets/standard-room-3.jpg.asset.json";
import standardRoom4 from "@/assets/standard-room-4.jpg.asset.json";
import classicRoom1 from "@/assets/classic-room-1.jpg.asset.json";
import classicRoom2 from "@/assets/classic-room-2.jpg.asset.json";
import classicRoom3 from "@/assets/classic-room-3.jpg.asset.json";
import classicRoom4 from "@/assets/classic-room-4.jpg.asset.json";
import classicRoom5 from "@/assets/classic-room-5.jpg.asset.json";
import classicRoom6 from "@/assets/classic-room-6.jpg.asset.json";

const rooms = [
  {
    img: standardRoom1.url,
    gallery: [standardRoom1.url, standardRoom2.url, standardRoom3.url, standardRoom4.url],
    name: "Standard Room",
    desc: "A clean, comfortable room with essential amenities for a restful stay.",
    amenities: ["Sleeps 2", "Comfortable bed", "Clean linens", "Hot water"],
  },
  {
    img: classicRoom1.url,
    gallery: [
      classicRoom1.url,
      classicRoom2.url,
      classicRoom3.url,
      classicRoom4.url,
      classicRoom5.url,
      classicRoom6.url,
    ],
    name: "Classic Mountain View Room",
    desc: "Wake up to panoramic mountain vistas through large windows. Best for nature lovers.",
    amenities: ["Sleeps 2", "Mountain view", "Hot water"],
  },
];

const icon = (i: number) => {
  const paths = [
    <path key="0" d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V10z" />,
    <path key="1" d="M4 17h16M5 17V9a3 3 0 013-3h8a3 3 0 013 3v8" />,
    <path key="2" d="M3 12c4-7 14-7 18 0M5 12c3-5 11-5 14 0M12 14v2" />,
    <path key="3" d="M12 3v3M12 18v3M5 12H2m20 0h-3M6 6L4 4m16 0l-2 2M6 18l-2 2m16 0l-2-2" />,
  ];
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[i % paths.length]}
    </svg>
  );
};

export function Rooms() {
  const [activeImages, setActiveImages] = useState<Record<number, number>>({
    0: 0,
    1: 0,
  });

  return (
    <section id="rooms" className="px-6 py-24 sm:py-28" data-fade>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase" style={{ color: "#B8860B", letterSpacing: "0.28em" }}>
            <span className="decor-rule" />
            Stay With Us
            <span className="decor-rule" />
          </div>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Rooms & Cottages</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm" style={{ color: "#6E6A55" }}>
            Two quiet spaces. Choose whichever suits your trip — every stay includes home-cooked meals.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {rooms.map((r, roomIndex) => {
            const current = activeImages[roomIndex] ?? 0;
            const currentImg = r.gallery[current] || r.img;
            const hasMultiple = r.gallery.length > 1;

            return (
              <article
                key={r.name}
                className="group overflow-hidden rounded-2xl border bg-[#FBF4E4] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "#6B7C3F33" }}
              >
                <div className="overflow-hidden">
                  <img
                    src={currentImg}
                    alt={r.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {hasMultiple ? (
                  <div className="flex gap-2 overflow-x-auto px-4 pt-4 pb-1 scrollbar-hide">
                    {r.gallery.map((photo, photoIndex) => (
                      <button
                        key={photo}
                        type="button"
                        onClick={() => setActiveImages((prev) => ({ ...prev, [roomIndex]: photoIndex }))}
                        className={`shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                          photoIndex === current
                            ? "ring-2 ring-[#B8860B] ring-offset-1"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={photo}
                          alt={`${r.name} photo ${photoIndex + 1}`}
                          loading="lazy"
                          width={120}
                          height={90}
                          className="aspect-[4/3] h-20 w-28 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                ) : null}

                <div className="p-7">
                  <h3 className="font-serif text-2xl font-semibold">{r.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "#3F3F2C" }}>
                    {r.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {r.amenities.map((a, i) => (
                      <span
                        key={a}
                        className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs"
                        style={{ borderColor: "#6B7C3F40", color: "#4A7C59" }}
                      >
                        {icon(i)}
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
