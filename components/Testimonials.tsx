const testimonials = [
  {
    quote:
      "Kyra was hands-on and completely involved while somehow elegantly remaining in the shadows. It was a dream come true having our day feel effortless.",
    name: "Samantha & Charles",
    detail: "Wedding",
  },
  {
    quote:
      "Kyra created an environment that was fun and light-hearted. I felt beautiful, guided, and completely at ease. Nothing felt forced.",
    name: "Kennedy",
    detail: "Motherhood",
  },
  {
    quote:
      "For the first time, we felt comfortable in front of the camera. Our gallery captured us completely in our element.",
    name: "Claire & Brad",
    detail: "Couples",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8F3EB] px-6 md:px-16 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="uppercase tracking-[0.5em] text-[10px] text-[#7A8261] mb-5">
            Kind Words
          </p>

          <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light">
            Seen. Guided. Remembered.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="border-t border-[#9AA6D3]/60 pt-8"
            >
              <p className="text-[#3A312B]/75 text-lg leading-loose mb-10">
                “{item.quote}”
              </p>

              <p className="font-heading text-[#6B2232] text-2xl">
                {item.name}
              </p>

              <p className="uppercase tracking-[0.35em] text-[10px] text-[#7A8261] mt-3">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}