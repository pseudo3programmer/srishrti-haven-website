import { useState } from "react";
import thali from "@/assets/gallery-thali.png.asset.json";
import verandah from "@/assets/gallery-verandah.png.asset.json";
import sunsetBalcony from "@/assets/gallery-sunset-balcony.png.asset.json";
import valley from "@/assets/gallery-valley.png.asset.json";
import sunsetHills from "@/assets/gallery-sunset-hills.png.asset.json";
import mist from "@/assets/gallery-mist.png.asset.json";
import roomWindow from "@/assets/gallery-room-window.png.asset.json";
import cottageNight from "@/assets/gallery-cottage-night.png.asset.json";
import chaiToast from "@/assets/gallery-chai-toast.png.asset.json";
import { Lightbox } from "./Lightbox";

const images = [
  { src: thali.url, alt: "Home-cooked thali with valley view" },
  { src: verandah.url, alt: "Verandah seating overlooking the hills" },
  { src: sunsetBalcony.url, alt: "Sunset from the cottage balcony" },
  { src: valley.url, alt: "Lush Matheran valley" },
  { src: sunsetHills.url, alt: "Golden sunset over misty hills" },
  { src: mist.url, alt: "Clouds drifting over the cliffs" },
  { src: roomWindow.url, alt: "Room window with hill view" },
  { src: cottageNight.url, alt: "Cottage entrance lit up at night" },
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
