import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LuxuryButton from "@/components/LuxuryButton";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F3EB] text-[#3A312B] font-body overflow-hidden">
      <Navbar />

      <section className="relative min-h-[78vh] flex items-center justify-center px-6 md:px-16 stationery-bg overflow-hidden">
        <div className="absolute top-24 left-8 font-hand text-[#CFA5A3]/20 text-8xl md:text-9xl hidden md:block">
          about
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-24">
          <p className="uppercase tracking-[0.5em] text-xs text-[#7A8261] mb-6">
            Behind Amor Photo Co.
          </p>

          <h1 className="font-heading text-[#6B2232] text-6xl md:text-8xl lg:text-9xl font-light leading-tight mb-8">
            A quiet devotion to love, light, and legacy.
          </h1>

          <p className="max-w-3xl mx-auto text-[#3A312B]/75 text-lg md:text-xl leading-loose">
            Amor Photo Co. was created for the moments that feel tender, honest,
            fleeting, and worth remembering.
          </p>

          <p className="font-hand text-[#CFA5A3] text-2xl md:text-3xl mt-10">
            love, in its truest light
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 py-32 bg-[#F8F3EB]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
         <div className="relative -mx-6 md:mx-0">
  <div className="hidden md:block absolute -top-5 -left-5 h-full w-full border border-[#9AA6D3]/60"></div>

  <div className="relative bg-[#FBF7F0] border-y md:border border-[#E8DED3] p-0 md:p-4 shadow-[0_30px_80px_rgba(58,49,43,0.08)]">
    <img
      src="/images/about.jpg"
      alt="Ky of Amor Photo Co."
      className="h-[560px] md:h-[850px] w-full object-cover object-top"
    />
  </div>
</div>

          <div>
            <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-6">
              Meet Kyra 
            </p>

            <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light leading-tight mb-8">
              For the people who want their story preserved with care.
            </h2>

            <p className="text-[#3A312B]/75 text-lg leading-loose mb-7">
              My work is rooted in honest connection, soft light, and the belief
              that the most meaningful photographs are often the quietest ones —
              the glance before the kiss, the hand that reaches instinctively,
              the child held close, the moment someone finally comes home.
            </p>

            <p className="text-[#3A312B]/75 text-lg leading-loose mb-7">
              I photograph weddings, couples, motherhood, families, and military
              stories with a refined editorial eye and a deep respect for the
              emotion inside each season.
            </p>

            <p className="text-[#3A312B]/75 text-lg leading-loose mb-10">
              Amor Photo Co. is not about forced perfection. It is about
              preserving the feeling of being loved, seen, held, and remembered.
            </p>

            <p className="font-hand text-[#CFA5A3] text-2xl md:text-3xl mb-10">
              honest, timeless, and deeply yours
            </p>

            <LuxuryButton href="/#contact" variant="olive">
              Begin the Inquiry
            </LuxuryButton>
          </div>
        </div>
      </section>

      <section className="bg-[#FBF7F0] px-6 md:px-16 py-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-5">
            The Amor Approach
          </p>

          <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light mb-16">
            Calm guidance. Honest feeling. Artful preservation.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Soft Direction",
                text: "You will never be left wondering what to do. I gently guide while leaving room for real emotion to unfold.",
              },
              {
                title: "Editorial Eye",
                text: "Each gallery is created with attention to light, composition, movement, and the small details that make an image feel timeless.",
              },
              {
                title: "Heirloom Feeling",
                text: "The goal is not simply to make beautiful photographs, but to preserve something your future self will be grateful to hold.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#F8F3EB] border border-[#E8DED3] p-8"
              >
                <h3 className="font-heading text-[#6B2232] text-4xl mb-5">
                  {item.title}
                </h3>

                <div className="h-px w-20 bg-gradient-to-r from-[#7A8261] to-[#9AA6D3] mb-6"></div>

                <p className="text-[#3A312B]/70 leading-loose">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#6B2232] text-[#F8F3EB] px-6 md:px-16 py-28 text-center">
        <p className="uppercase tracking-[0.45em] text-xs text-[#CFA5A3] mb-5">
          Your Story Matters
        </p>

        <h2 className="font-heading text-5xl md:text-7xl font-light mb-8">
          Let’s preserve this season before it changes.
        </h2>

        <p className="max-w-2xl mx-auto text-[#F8F3EB]/75 leading-loose mb-12">
          Send a note with what you are hoping to remember, and we’ll begin
          shaping an experience around it.
        </p>

        <LuxuryButton href="mailto:kyradeboni@outlook.com" variant="periwinkle">
          Begin Your Story
        </LuxuryButton>
      </section>

      <Footer />
    </main>
  );
}