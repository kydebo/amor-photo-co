import LuxuryButton from "./LuxuryButton";

const services = [
  {
    title: "Weddings",
    description:
      "For vows, heirloom moments, and the day your love becomes legacy.",
    detail: "Full wedding collections available",
  },
  {
    title: "Couples",
    description:
      "For soft, romantic portraits filled with movement, warmth, and connection.",
    detail: "Engagements, anniversaries, and love stories",
  },
  {
    title: "Motherhood",
    description:
      "For the quiet beauty of becoming, holding, nurturing, and remembering.",
    detail: "Maternity, newborn, and motherhood sessions",
  },
  {
    title: "Military",
    description:
      "For the love that waits, the arms that return, and the moments home begins again.",
    detail: "Homecomings, deployment returns, reunions, and military families",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#FBF7F0] px-6 md:px-16 py-32 overflow-hidden"
    >
      <div className="absolute top-14 right-8 font-hand text-[#CFA5A3]/15 text-8xl md:text-9xl hidden md:block">
        offerings
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-18">
          <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-5">
            Services
          </p>

          <h2 className="font-heading text-[#6B2232] text-4xl md:text-6xl font-light mb-6">
            Collections for every season of love.
          </h2>

          <p className="max-w-2xl mx-auto text-[#3A312B]/70 leading-loose">
            Each collection is designed with intention and warmth
             — so your images feel as beautiful years from now as they do
            today.
          </p>

          <p className="max-w-2xl mx-auto mt-6 uppercase tracking-[0.28em] text-[10px] text-[#9AA6D3]">
            A limited number of sessions are accepted each month to preserve the
            care and attention of every gallery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#F8F3EB] border border-[#E8DED3] p-8 md:p-10 transition duration-700 hover:border-[#9AA6D3] hover:-translate-y-1"
            >
              <p className="uppercase tracking-[0.35em] text-[10px] text-[#7A8261] mb-5">
                Collection
              </p>

              <h3 className="font-heading text-[#6B2232] text-4xl md:text-5xl mb-5">
                {service.title}
              </h3>

              <p className="text-[#3A312B]/75 leading-loose mb-7">
                {service.description}
              </p>

              <div className="h-px w-20 bg-gradient-to-r from-[#7A8261] to-[#9AA6D3] opacity-70 mb-5"></div>

              <p className="uppercase tracking-[0.3em] text-[10px] text-[#7A8261]">
                {service.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <LuxuryButton href="services" variant="olive">
            View the Collections
          </LuxuryButton>
        </div>
      </div>
    </section>
  );
}