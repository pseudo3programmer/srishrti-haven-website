import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Nav } from "@/components/homestay/Nav";
import { Hero } from "@/components/homestay/Hero";
import { About } from "@/components/homestay/About";
import { Rooms } from "@/components/homestay/Rooms";
import { Amenities } from "@/components/homestay/Amenities";
import { Gallery } from "@/components/homestay/Gallery";
import { Location } from "@/components/homestay/Location";
import { Reviews } from "@/components/homestay/Reviews";
import { Contact } from "@/components/homestay/Contact";
import { Footer } from "@/components/homestay/Footer";
import { FloatingButtons } from "@/components/homestay/FloatingButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Srushti Homestay — Matheran, Maharashtra" },
      {
        name: "description",
        content:
          "A peaceful cottage homestay in Matheran, Maharashtra. Forest views, home-cooked meals, and quiet mornings. Book direct on WhatsApp.",
      },
      { property: "og:title", content: "Shree Srushti Homestay — Matheran" },
      {
        property: "og:description",
        content: "A peaceful cottage escape in Matheran's misty hills.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  // Fade-in-up on scroll
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-fade]");
    els.forEach((el) => el.classList.add("fade-up"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fade-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5E9D3" }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
