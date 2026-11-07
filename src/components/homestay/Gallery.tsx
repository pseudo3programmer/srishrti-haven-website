import { useState } from "react";
import thali from "@/assets/gallery-thali.png?w=1280&format=webp&quality=78";
import thaliSrcSet from "@/assets/gallery-thali.png?w=160;320;640;960;1280&format=webp&quality=78&as=srcset";
import verandah from "@/assets/gallery-verandah.png?w=1280&format=webp&quality=78";
import verandahSrcSet from "@/assets/gallery-verandah.png?w=160;320;640;960;1280&format=webp&quality=78&as=srcset";
import sunsetBalcony from "@/assets/gallery-sunset-balcony.png?w=1280&format=webp&quality=78";
import sunsetBalconySrcSet from "@/assets/gallery-sunset-balcony.png?w=160;320;640;960;1280&format=webp&quality=78&as=srcset";
import valley from "@/assets/gallery-valley.png?w=1280&format=webp&quality=78";
import valleySrcSet from "@/assets/gallery-valley.png?w=160;320;640;960;1280&format=webp&quality=78&as=srcset";
import sunsetHills from "@/assets/gallery-sunset-hills.png?w=1280&format=webp&quality=78";
import sunsetHillsSrcSet from "@/assets/gallery-sunset-hills.png?w=160;320;640;960;1280&format=webp&quality=78&as=srcset";
import mist from "@/assets/gallery-mist.png?w=1280&format=webp&quality=78";
import mistSrcSet from "@/assets/gallery-mist.png?w=160;320;640;960;1280&format=webp&quality=78&as=srcset";
import roomWindow from "@/assets/gallery-room-window.png?w=1280&format=webp&quality=78";
import roomWindowSrcSet from "@/assets/gallery-room-window.png?w=160;320;640;960;1280&format=webp&quality=78&as=srcset";
import cottageNight from "@/assets/gallery-cottage-night.png?w=1280&format=webp&quality=78";
import cottageNightSrcSet from "@/assets/gallery-cottage-night.png?w=160;320;640;960;1280&format=webp&quality=78&as=srcset";
import mountainPanorama from "@/assets/gallery-mountain-panorama.png?w=1280&format=webp&quality=78";
import mountainPanoramaSrcSet from "@/assets/gallery-mountain-panorama.png?w=160;320;640;960;1280&format=webp&quality=78&as=srcset";
import { Button } from "@/components/ui/button";
import { Lightbox } from "./Lightbox";

const images = [
  { src: thali, srcSet: thaliSrcSet, alt: "Home-cooked thali with valley view" },
  { src: verandah, srcSet: verandahSrcSet, alt: "Verandah seating overlooking the hills" },
  { src: sunsetBalcony, srcSet: sunsetBalconySrcSet, alt: "Sunset from the cottage balcony" },
  { src: valley, srcSet: valleySrcSet, alt: "Lush Matheran valley" },
  { src: sunsetHills, srcSet: sunsetHillsSrcSet, alt: "Golden sunset over misty hills" },
  { src: mist, srcSet: mistSrcSet, alt: "Clouds drifting over the cliffs" },
  { src: roomWindow, srcSet: roomWindowSrcSet, alt: "Room window with hill view" },
  { src: cottageNight, srcSet: cottageNightSrcSet, alt: "Cottage entrance lit up at night" },
  { src: mountainPanorama, srcSet: mountainPanoramaSrcSet, alt: "Panoramic mountain valley view" },
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

        <div className="mt-12 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <Button variant="ghost"
              key={i}
              onClick={() => setOpen(i)}
              className="group relative h-auto aspect-square overflow-hidden rounded-xl p-0 hover:bg-transparent"
            >
              <img
                src={img.src}
                srcSet={img.srcSet}
                sizes="(min-width: 1200px) 374px, (min-width: 768px) calc((100vw - 80px) / 3), (min-width: 480px) calc((100vw - 60px) / 2), calc(100vw - 48px)"
                width={640}
                height={640}
                decoding="async"
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2C2C1E]/0 transition-colors group-hover:bg-[#2C2C1E]/30" />
            </Button>
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
