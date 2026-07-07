export default function BrandStory() {
  return (
    <section
      id="about"
      className="relative bg-[#F8F3EB] px-6 md:px-16 py-32 overflow-hidden"
    >
      <div className="absolute top-16 left-8 font-script text-[#CFA5A3]/20 text-8xl md:text-9xl hidden md:block">
        amor
      </div>

      <div className="absolute bottom-16 right-8 font-script text-[#9AA6D3]/20 text-8xl md:text-9xl hidden md:block">
        light
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 items-center relative z-10">
        <div className="border border-[#E8DED3] bg-[#FBF7F0] p-5 shadow-[0_30px_80px_rgba(58,49,43,0.08)]">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="/images/philosophy.jpg"
              alt="Timeless editorial photography by Amor Photo Co."
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-6">
            The Philosophy
          </p>

          <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light leading-tight mb-8">
            For the moments that feel like forever.
          </h2>

          <p className="text-[#3A312B]/75 text-lg leading-loose mb-8">
            Amor Photo Co. is rooted in warmth, honest connection, and the quiet
            beauty of natural light. My work is not about perfect posing or
            forced moments — it is about preserving the feeling of being loved,
            seen, held, and remembered.
          </p>

          <p className="text-[#3A312B]/75 text-lg leading-loose mb-10">
            Every image is created to feel timeless, like a pressed flower in an
            old book, a handwritten note tucked inside a drawer, or a memory
            your family will return to for generations.
          </p>

          <p className="font-script text-[#CFA5A3] text-3xl">
            honest, timeless, and deeply yours
          </p>
        </div>
      </div>
    </section>
  );
}