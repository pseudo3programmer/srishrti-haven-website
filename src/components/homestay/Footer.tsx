import logo from "@/assets/logo.jpeg";
import { WHATSAPP_URL, INSTAGRAM_URL } from "./constants";

const links = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C2C1E", color: "#E8E1CD" }}>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3 md:items-start">
        <div className="flex items-start gap-3">
          <img src={logo} alt="Shree Srushti Homestay logo" className="h-12 w-12 rounded-full object-cover" />
          <div>
            <div className="font-serif text-lg font-semibold" style={{ color: "#F5E9D3" }}>
              Shree Srushti Homestay
            </div>
            <div className="mt-1 text-xs" style={{ color: "#B8AC8A" }}>
              Matheran, Maharashtra, India
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap justify-start gap-x-6 gap-y-2 md:justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors hover:text-[#D4A53A]"
              style={{ color: "#E8E1CD" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:justify-end">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full transition-transform hover:scale-110"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.7-.4-1.5-.8-2.2-1.6-.6-.5-1-1.2-1.4-1.9-.1-.3 0-.4.1-.5.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full transition-transform hover:scale-110"
            style={{ background: "linear-gradient(135deg, #B8860B 0%, #D4A53A 100%)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="white" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "#FFFFFF1A" }}>
        <div className="mx-auto max-w-6xl px-6 py-5 text-center text-xs" style={{ color: "#B8AC8A" }}>
          © {new Date().getFullYear()} Shree Srushti Homestay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
