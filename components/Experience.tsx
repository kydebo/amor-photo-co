const steps = [
  {
    number: "01",
    title: "Inquiry",
    text: "You reach out with your vision, date, and the moments you hope to preserve.",
  },
  {
    number: "02",
    title: "Planning",
    text: "We shape the details together — location, styling, timeline, and the feeling you want your images to hold.",
  },
  {
    number: "03",
    title: "Session",
    text: "Your session unfolds naturally with gentle direction, honest emotion, and room for real connection.",
  },
  {
    number: "04",
    title: "Editing",
    text: "Each image is carefully refined with warmth, softness, and timeless color in mind.",
  },
  {
    number: "05",
    title: "Delivery",
    text: "Your finished gallery is delivered as an heirloom collection — ready to share, print, and return to for years.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#D8CEC4] px-6 md:px-16 py-32 overflow-hidden"
    >
      <div className="absolute top-10 right-8 font-script text-[#F8F3EB]/35 text-8xl md:text-9xl hidden md:block">
        remembered
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.45em] text-xs text-[#6B2232] mb-5">
            The Experience
          </p>

          <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light mb-6">
            Thoughtful from beginning to heirloom.
          </h2>

          <p className="max-w-2xl mx-auto text-[#3A312B]/70 leading-loose">
            A calm, intentional process designed to help you feel cared for,
            prepared, and fully present in the moments that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-[#F8F3EB] border border-[#E8DED3] p-7 min-h-[310px] flex flex-col justify-between shadow-[0_24px_60px_rgba(58,49,43,0.08)]"
            >
              <div>
                <p className="font-script text-[#CFA5A3] text-5xl mb-4">
                  {step.number}
                </p>

                <h3 className="font-heading text-[#6B2232] text-3xl mb-4">
                  {step.title}
                </h3>

                <p className="text-[#3A312B]/70 leading-relaxed text-sm">
                  {step.text}
                </p>
              </div>

              <div className="mt-8 h-px w-16 bg-gradient-to-r from-[#7A8261] to-[#9AA6D3] opacity-70"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}