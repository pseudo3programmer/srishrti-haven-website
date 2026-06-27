import about from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-28" data-fade>
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 text-xs font-semibold uppercase" style={{ color: "#B8860B", letterSpacing: "0.28em" }}>
            <span className="decor-rule" />
            Our Story
          </div>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl" style={{ color: "#6B7C3F" }}>
            A little cottage in the clouds
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: "#3F3F2C" }}>
            Tucked away on the quiet edge of Matheran, Shree Srushti is a small family-run homestay
            built for travellers who want to slow down. Wake to birdsong, sip chai on the verandah,
            and walk red-earth trails into a forest that hums all day long.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#3F3F2C" }}>
            Every room is simple and warm. Every meal is cooked fresh in our kitchen. There is no
            schedule here — only the soft rhythm of the hills.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "3", l: "Cottages" },
              { n: "5★", l: "Hospitality" },
              { n: "1947", l: "Feet elevation" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border bg-[#FBF4E4] p-4 text-center"
                style={{ borderColor: "#6B7C3F33" }}
              >
                <div className="font-serif text-2xl font-semibold" style={{ color: "#B8860B" }}>
                  {s.n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider" style={{ color: "#6E6A55" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -left-3 -top-3 h-full w-full rounded-2xl"
            style={{ border: "1px solid #6B7C3F", borderRadius: 18 }}
          />
          <img
            src={about}
            alt="Cottage exterior with wooden porch surrounded by trees"
            loading="lazy"
            width={1280}
            height={960}
            className="relative h-full w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
