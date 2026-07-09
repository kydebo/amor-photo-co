export default function LoveLetterIntro() {
  return (
    <section
      id="intro"
      className="relative min-h-[92vh] flex items-center justify-center px-6 overflow-hidden stationery-bg"
    >
      {/* top paper shadow */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#D8CEC4]/35 to-transparent"></div>

      {/* real calla lily image */}
      <img
        src="/decor/calla-lily.png"
        alt=""
        className="absolute left-6 md:left-20 top-32 w-40 md:w-60 opacity-20 hidden sm:block"
      />

      {/* real stamp watermark */}
      <img
        src="/decor/stamp.png"
        alt=""
        className="absolute right-10 md:right-28 top-[48%] w-32 md:w-44 opacity-25 hidden md:block"
      />

      {/* love letter text */}
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fadeUp pt-28 md:pt-32">
  <p className="uppercase tracking-[0.5em] text-[10px] text-[#7A8261] mb-10">
    Amor Photo Co.
  </p>

  <p className="font-heading text-[#6B2232] text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-10">
    Love, held still.
  </p>

  <p className="max-w-2xl mx-auto text-[#3A312B]/70 text-base md:text-lg leading-loose mb-12">
    Wedding, motherhood, family, and military homecoming photography in Virginia.
  </p>

  <a
    href="#hero"
    className="inline-block uppercase tracking-[0.5em] text-[11px] text-[#6B2232] hover:text-[#CFA5A3] transition duration-500"
  >
    Enter
  </a>
</div>

      {/* soft fade into hero */}
      <div className="absolute bottom-[-1px] left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F8F3EB] pointer-events-none"></div>
    </section>
  );
}