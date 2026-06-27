import hero from "@/assets/hero.jpg";
import { WHATSAPP_URL } from "./constants";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Misty hills of Matheran at golden hour"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(43, 53, 20, 0.55)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2C2C1E]/60" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 pt-24 text-center">
        <div
          className="mb-5 text-[11px] font-semibold uppercase sm:text-xs"
          style={{ color: "#D4A53A", letterSpacing: "0.32em" }}
        >
          <span className="decor-rule" style={{ background: "#D4A53A" }} />
          Welcome to Matheran
          <span className="decor-rule" style={{ background: "#D4A53A" }} />
        </div>

        <h1
          className="font-serif font-semibold leading-[1.05]"
          style={{ color: "#FBF8EF", fontSize: "clamp(36px, 8vw, 64px)" }}
        >
          Shree Srushti Homestay
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: "#F5E9D3" }}
        >
          A peaceful escape in the heart of Maharashtra's misty countryside —
          slow mornings, forest air, and home-cooked meals.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "#B8860B" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.7-.4-1.5-.8-2.2-1.6-.6-.5-1-1.2-1.4-1.9-.1-.3 0-.4.1-.5.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            Book on WhatsApp
          </a>
          <a
            href="#rooms"
            className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:scale-[1.03] hover:bg-white/10"
            style={{ borderColor: "#F5E9D3", color: "#FBF8EF" }}
          >
            View Rooms
          </a>
        </div>

        <a
          href="#about"
          aria-label="Scroll down"
          className="bob absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ color: "#F5E9D3" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 4v16M5 13l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
