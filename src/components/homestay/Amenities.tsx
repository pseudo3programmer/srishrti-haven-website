const items = [
  { label: "Surrounded by Nature", path: "M12 2C8 8 5 11 5 15a7 7 0 0014 0c0-4-3-7-7-13z" },
  { label: "Hot Water", path: "M12 3c-3 4-5 6-5 9a5 5 0 0010 0c0-3-2-5-5-9z M9 14c0 1 1 2 3 2" },
  { label: "Home-Cooked Meals", path: "M4 11h16v2H4z M6 13v6h12v-6 M9 6v3M12 4v5M15 6v3" },
  { label: "Free WiFi", path: "M5 12a10 10 0 0114 0 M8 15a6 6 0 018 0 M11 18h2" },
  { label: "Parking", path: "M6 4h7a5 5 0 010 10H9v6H6V4z M9 7v4h3a2 2 0 000-4H9z" },
  { label: "Bonfire Nights", path: "M12 3c2 3 4 5 4 8a4 4 0 11-8 0c0-3 2-5 4-8z M5 21h14" },
];

export function Amenities() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: "#6B7C3F" }} data-fade>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-2xl font-semibold sm:text-3xl" style={{ color: "#FBF8EF" }}>
          What's Included
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((it) => (
            <div key={it.label} className="flex flex-col items-center text-center">
              <div
                className="grid h-14 w-14 place-items-center rounded-full"
                style={{ backgroundColor: "rgba(245, 233, 211, 0.12)", color: "#F5E9D3" }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={it.path} />
                </svg>
              </div>
              <div className="mt-3 text-sm font-medium" style={{ color: "#F5E9D3" }}>
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
