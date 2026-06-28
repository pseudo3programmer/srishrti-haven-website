import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all"
      style={{
        backgroundColor: scrolled ? "rgba(245, 233, 211, 0.92)" : "rgba(245, 233, 211, 0.7)",
        borderBottom: "1px solid #6B7C3F33",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Shree Srushti Homestay logo"
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-1"
            style={{ boxShadow: "0 0 0 1px #6B7C3F33" }}
          />
          <div className="hidden min-w-0 sm:block">
            <div
              className="truncate font-serif text-base font-semibold leading-tight"
              style={{ color: "#6B7C3F" }}
            >
              Shree Srushti
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "#B8860B" }}>
              Homestay · Matheran
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors hover:text-[#B8860B]"
              style={{ color: "#6B7C3F" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md lg:hidden"
          style={{ color: "#6B7C3F" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="border-t lg:hidden"
          style={{ borderColor: "#6B7C3F33", backgroundColor: "rgba(245, 233, 211, 0.98)" }}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b py-3 text-base font-medium"
                style={{ color: "#6B7C3F", borderColor: "#6B7C3F1f" }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
