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
        <p className="font-hand text-[#6B2232] text-3xl md:text-4xl lg:text-5xl leading-[1.45] mb-10">
          To the lovers, the dreamers,
          <br />
          the mothers, the quiet souls...
        </p>

        <p className="font-hand text-[#6B2232]/75 text-2xl md:text-3xl lg:text-4xl leading-[1.75] mb-10">
          Thank you for believing in beauty, in connection,
          <br className="hidden md:block" />
          and in the moments that become memory.
          <br className="hidden md:block" />
          These are the stories I am honored to preserve —
          <br className="hidden md:block" />
          honest, timeless, and deeply yours.
        </p>

        <p className="font-hand text-[#6B2232] text-4xl mb-7">♡</p>

        <p className="font-hand text-[#6B2232]/75 text-2xl md:text-3xl leading-tight">
          xo,
          <br />
          kyra amor
        </p>

        <a
          href="#hero"
          className="inline-block mt-14 uppercase tracking-[0.5em] text-[11px] text-[#6B2232] hover:text-[#CFA5A3] transition duration-500"
        >
          Enter the Story
          <span className="block mt-4 text-lg">⌄</span>
        </a>
      </div>

      {/* soft fade into hero */}
      <div className="absolute bottom-[-1px] left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F8F3EB] pointer-events-none"></div>
    </section>
  );
}