const testimonials = [
  {
    quote:
      "We had such an amazing experience with Kyra. She was so comfortable to work with and it felt so natural having her capture our wedding.",
    name: "Alyssa & Jason",
    detail: "Wedding Session",
  },
  {
    quote:
      "Kyra created an environment that was fun and lighthearted and captured us so naturally. Nothing felt forced — just soft, honest, and beautiful.",
    name: "Lauren",
    detail: "Motherhood Session",
  },
  {
    quote:
      "It was the first time that I not only felt comfortable in front of the camera but we both felt like our gallery captured us so honestly. I felt so confident after seeing our gallery!",
    name: "Claire & James",
    detail: "Couples Session",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#F8F3EB] px-6 md:px-16 py-32 overflow-hidden">
      <div className="absolute top-16 left-8 font-script text-[#CFA5A3]/20 text-8xl md:text-9xl hidden md:block">
        kind words
      </div>

      <div className="absolute bottom-20 right-8 font-script text-[#9AA6D3]/20 text-8xl md:text-9xl hidden md:block">
        love notes
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-5">
            Love Notes
          </p>

          <h2 className="font-heading text-[#6B2232] text-4xl md:text-6xl font-light mb-6">
            Words From the Ones Remembered
          </h2>

          <p className="max-w-2xl mx-auto text-[#3A312B]/70 leading-loose">
            A few reflections from the stories, families, and quiet moments I’ve
            had the honor of preserving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative bg-[#FBF7F0] border border-[#E8DED3] px-8 py-10 shadow-[0_24px_70px_rgba(58,49,43,0.08)]"
            >
              <div className="absolute -top-5 left-8 bg-[#CFA5A3] text-[#F8F3EB] h-10 w-10 rounded-full flex items-center justify-center font-heading text-2xl">
                “
              </div>

              <p className="font-script text-[#6B2232] text-3xl leading-relaxed mb-5">
                {item.quote}
              </p>

              <div className="h-px w-16 bg-[#7A8261]/50 mb-5"></div>

              <p className="font-heading text-[#6B2232] text-2xl">
                {item.name}
              </p>

              <p className="uppercase tracking-[0.3em] text-[10px] text-[#7A8261] mt-2">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}