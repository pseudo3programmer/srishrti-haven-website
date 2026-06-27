import { useState } from "react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import about from "@/assets/about.jpg";
import room1 from "@/assets/room1.jpg";
import room2 from "@/assets/room2.jpg";
import { Lightbox } from "./Lightbox";

const images = [
  { src: g3, alt: "Sunset valley view from Matheran" },
  { src: about, alt: "Cottage exterior" },
  { src: g2, alt: "Red-earth forest trail in mist" },
  { src: room1, alt: "Deluxe cottage bedroom" },
  { src: g4, alt: "Verandah swing with flowers" },
  { src: g1, alt: "Home-cooked Maharashtrian thali" },
  { src: room2, alt: "Family suite with hill view" },
  { src: g5, alt: "Bonfire under the night sky" },
  { src: g6, alt: "Cup of masala chai" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-6 py-24 sm:py-28" data-fade>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase" style={{ color: "#B8860B", letterSpacing: "0.28em" }}>
            <span className="decor-rule" />
            Moments
            <span className="decor-rule" />
          </div>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Gallery</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden rounded-xl"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2C2C1E]/0 transition-colors group-hover:bg-[#2C2C1E]/30" />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <Lightbox
          images={images}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((i) => ((i ?? 0) - 1 + images.length) % images.length)}
          onNext={() => setOpen((i) => ((i ?? 0) + 1) % images.length)}
        />
      )}
    </section>
  );
}
