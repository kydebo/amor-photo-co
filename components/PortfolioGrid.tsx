import LuxuryButton from "./LuxuryButton";

const galleries = [
  {
    eyebrow: "Gallery I",
    title: "Weddings",
    image: "/images/weddings.jpg",
    description:
      "Romantic, editorial imagery for the day your love becomes legacy.",
  },
  {
    eyebrow: "Gallery II",
    title: "Couples",
    image: "/images/couples.jpg",
    description:
      "Soft, intimate portraits full of movement, warmth, and connection.",
  },
  {
    eyebrow: "Gallery III",
    title: "Motherhood",
    image: "/images/motherhood.jpg",
    description:
      "Tender imagery for family, becoming, and the beauty of ordinary love.",
  },
  {
    eyebrow: "Gallery IV",
    title: "Military",
    image: "/images/homecomings.jpg",
    description:
      "For the love that waits, the arms that return, and the moments home begins again.",
  },
];

export default function PortfolioGrid() {
  return (
    <section
      id="portfolio"
      className="relative bg-[#F8F3EB] px-6 md:px-16 py-32 overflow-hidden"
    >
      <div className="absolute top-16 left-8 font-hand text-[#CFA5A3]/15 text-8xl md:text-9xl hidden md:block">
        preserved
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-5">
            Featured Galleries
          </p>

          <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light mb-7">
            Stories Preserved With Care
          </h2>

          <p className="max-w-2xl mx-auto text-[#3A312B]/70 leading-loose">
            A curated look into weddings, couples, motherhood, military
            homecomings, and the beautifully ordinary moments that become
            heirlooms.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          {/* featured gallery */}
          <a
            href="/portfolio"
            className="group block"
          >
            <div className="relative h-[720px] overflow-hidden mb-8">
              <img
                src={galleries[0].image}
                alt={`${galleries[0].title} photography by Amor Photo Co.`}
                className="h-full w-full object-cover transition duration-[1600ms] ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3A312B]/45 via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-[#F8F3EB]">
                <p className="uppercase tracking-[0.4em] text-[10px] mb-3">
                  {galleries[0].eyebrow}
                </p>
                <h3 className="font-heading text-5xl md:text-6xl font-light">
                  {galleries[0].title}
                </h3>
              </div>
            </div>

            <p className="text-[#3A312B]/70 leading-loose max-w-xl">
              {galleries[0].description}
            </p>

            <span className="inline-block mt-5 uppercase tracking-[0.35em] text-[10px] text-[#7A8261] border-b border-[#9AA6D3] pb-1">
              View Gallery
            </span>
          </a>

          {/* smaller galleries */}
          <div className="grid gap-8">
            {galleries.slice(1).map((gallery) => (
              <a
                key={gallery.title}
                href="/portfolio"
                className="group grid md:grid-cols-[0.95fr_1fr] gap-6 items-center border-t border-[#E8DED3] pt-8"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={gallery.image}
                    alt={`${gallery.title} photography by Amor Photo Co.`}
                    className="h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>

                <div>
                  <p className="uppercase tracking-[0.35em] text-[10px] text-[#7A8261] mb-3">
                    {gallery.eyebrow}
                  </p>

                  <h3 className="font-heading text-[#6B2232] text-4xl mb-4">
                    {gallery.title}
                  </h3>

                  <p className="text-[#3A312B]/70 leading-relaxed mb-5">
                    {gallery.description}
                  </p>

                  <span className="uppercase tracking-[0.35em] text-[10px] text-[#7A8261] border-b border-[#9AA6D3] pb-1">
                    View Gallery
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <LuxuryButton href="/portfolio" variant="periwinkle">
            View the Galleries
          </LuxuryButton>
        </div>
      </div>
    </section>
  );
}