export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* hero photo */}
      <img
        src="/images/hero.jpg"
        alt="Romantic wedding photography by Amor Photo Co."
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
{/* soft fade from love-letter intro */}
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F8F3EB]/80 via-[#F8F3EB]/35 to-transparent z-[1]"></div>

      {/* minimal luxury veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F3EB]/12 via-transparent to-[#F8F3EB]/38"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F3EB]/18 via-transparent to-transparent"></div>

      {/* brand text */}
      <div className="relative z-10 w-full px-6 md:px-20">
        <div className="mx-auto max-w-6xl text-center -translate-y-24 md:-translate-y-34">
          <h1 className="font-heading text-[#6B2232] text-6xl md:text-8xl lg:text-[9.5rem] font-light tracking-[0.34em] leading-none mb-6">
            AMOR
          </h1>

          <p className="font-heading text-[#6B2232] text-2xl md:text-4xl tracking-[0.55em] mb-8">
            PHOTO CO.
          </p>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 md:w-32 bg-[#7A8261]/45"></div>
            <span className="text-[#9AA6D3] text-lg">✥</span>
            <div className="h-px w-20 md:w-32 bg-[#7A8261]/45"></div>
          </div>

          <p className="font-hand text-[#CFA5A3] text-2xl md:text-3xl mb-8">
            Love, in its truest light.
          </p>

          <a
            href="#portfolio"
            className="inline-block border-b border-[#6B2232] text-[#6B2232] uppercase tracking-[0.45em] text-xs pb-2 hover:text-[#9AA6D3] hover:border-[#9AA6D3] transition duration-700"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* luxury soft fade transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-44 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#F8F3EB] via-[#F8F3EB]/82 to-transparent" />

        <p className="absolute bottom-8 left-0 right-0 text-center uppercase tracking-[0.55em] text-[10px] md:text-xs text-[#6B2232]">
          Romantic · Refined · Honest
        </p>
      </div>
    </section>
  );
}