import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from "./constants";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-28" data-fade>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase" style={{ color: "#B8860B", letterSpacing: "0.28em" }}>
            <span className="decor-rule" />
            Reach Out
            <span className="decor-rule" />
          </div>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Book Your Stay</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm" style={{ color: "#6E6A55" }}>
            Chat with us directly — no third-party fees, instant replies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* WhatsApp */}
          <div
            className="rounded-2xl border bg-[#FBF4E4] p-8 transition-transform hover:-translate-y-1"
            style={{ borderColor: "#6B7C3F40" }}
          >
            <div className="grid h-14 w-14 place-items-center rounded-full" style={{ backgroundColor: "#25D366" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.7-.4-1.5-.8-2.2-1.6-.6-.5-1-1.2-1.4-1.9-.1-.3 0-.4.1-.5.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold">Book via WhatsApp</h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#3F3F2C" }}>
              Chat with the owner for availability, pricing, and special requests. We reply within minutes.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#25D366" }}
            >
              Open WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Instagram */}
          <div
            className="rounded-2xl border bg-[#FBF4E4] p-8 transition-transform hover:-translate-y-1"
            style={{ borderColor: "#6B7C3F40" }}
          >
            <div
              className="grid h-14 w-14 place-items-center rounded-full"
              style={{ background: "linear-gradient(135deg, #B8860B 0%, #D4A53A 100%)" }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" />
              </svg>
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold">Follow on Instagram</h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#3F3F2C" }}>
              Real photos, real moments. See what guests are experiencing right now.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#B8860B" }}
            >
              Visit Instagram
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 text-center text-sm" style={{ color: "#6E6A55" }}>
          <div>📍 Shree Srushti Homestay, Matheran, Raigad District, Maharashtra 410102</div>
          <div>
            ✉️{" "}
            <a href={`mailto:${EMAIL}`} className="hover:underline" style={{ color: "#6B7C3F" }}>
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
