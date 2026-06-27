import { WHATSAPP_URL, INSTAGRAM_URL } from "./constants";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        className="group pulse-gold relative grid h-12 w-12 place-items-center rounded-full shadow-lg transition-transform hover:scale-110 sm:h-14 sm:w-14"
        style={{ background: "linear-gradient(135deg, #B8860B 0%, #D4A53A 100%)" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" />
        </svg>
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#2C2C1E] px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
          Follow us
        </span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group pulse-wa relative grid h-12 w-12 place-items-center rounded-full shadow-lg transition-transform hover:scale-110 sm:h-14 sm:w-14"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.7-.4-1.5-.8-2.2-1.6-.6-.5-1-1.2-1.4-1.9-.1-.3 0-.4.1-.5.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#2C2C1E] px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
          Chat with us
        </span>
      </a>
    </div>
  );
}
