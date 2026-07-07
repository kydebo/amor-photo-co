export default function CinematicImageBreak() {
  return (
    <section className="relative h-[90vh] min-h-[650px] overflow-hidden bg-[#F8F3EB]">
      {/* full-width image */}
      <img
        src="/images/image-break.jpg"
        alt="Heirloom editorial photography by Amor Photo Co."
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* subtle luxury overlay */}
      <div className="absolute inset-0 bg-[#3A312B]/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F3EB]/15 via-transparent to-[#F8F3EB]/45"></div>

      {/* soft paper fade at top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F8F3EB] to-transparent"></div>

      {/* quote overlay */}
      <div className="absolute inset-0 flex items-start justify-center px-6 pt-32 md:pt-40 text-center">
        <div className="max-w-4xl">
          <p className="font-hand text-[#F8F3EB] text-4xl md:text-5xl leading-relaxed drop-shadow-[0_8px_24px_rgba(58,49,43,0.55)]">
            Where love finds the light,
            <br />
            memories become art.
          </p>

          <div className="mx-auto mt-10 h-px w-32 bg-[#F8F3EB]/75"></div>

          <p className="mt-25 uppercase tracking-[0.50em] text-[15px] text-[#F8F3EB] drop-shadow-[0_6px_16px_rgba(58,49,43,0.5)]">
            Amor Photo Co.
          </p>
        </div>
      </div>

      {/* bottom paper fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F8F3EB] to-transparent"></div>
    </section>
  );
}