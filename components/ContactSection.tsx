import LuxuryButton from "./LuxuryButton";

const sessionTypes = ["Weddings", "Couples", "Motherhood", "Military"];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#FBF7F0] px-6 md:px-16 py-32 overflow-hidden"
    >
      <div className="absolute top-14 left-8 font-hand text-[#CFA5A3]/20 text-7xl md:text-9xl hidden md:block">
        inquire
      </div>

      <div className="absolute bottom-16 right-8 font-script text-[#9AA6D3]/20 text-7xl md:text-9xl hidden md:block">
        remembered
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-6">
            Begin Your Story
          </p>

          <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light leading-tight mb-8">
            Tell me what season of life you want remembered.
          </h2>

          <p className="text-[#3A312B]/75 text-lg leading-loose mb-8">
            Whether you are planning a wedding, welcoming someone home,
            celebrating motherhood, or preserving the beauty of right now —
            I would be honored to hear what this season means to you.
          </p>

          <p className="text-[#3A312B]/65 leading-loose mb-10">
            Amor Photo Co. accepts a limited number of weddings, sessions, and
            military homecomings each season to ensure every client receives a
            thoughtful, artful experience.
          </p>

          <p className="font-hand text-[#CFA5A3] text-2xl md:text-2xl leading-relaxed">
            soft light, honest feeling, and the kind of photographs your heart
            returns to.
          </p>
        </div>

        <div className="bg-[#F8F3EB] border border-[#E8DED3] p-8 md:p-10 shadow-[0_30px_80px_rgba(58,49,43,0.08)]">
          <p className="uppercase tracking-[0.35em] text-[11px] text-[#7A8261] mb-6">
            What are you hoping to preserve?
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {sessionTypes.map((type) => (
              <div
                key={type}
                className="border border-[#9AA6D3]/45 bg-[#FBF7F0] px-4 py-5 text-center transition duration-500 hover:bg-[#9AA6D3]/15 hover:border-[#7A8261]"
              >
                <p className="font-heading text-[#6B2232] text-2xl">
                  {type}
                </p>
              </div>
            ))}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#7A8261]/50 to-transparent mb-8"></div>

          <p className="text-[#3A312B]/70 leading-loose mb-8">
            Send a note with your session type, preferred date or season,
            location, and anything meaningful you want remembered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <LuxuryButton href="mailto:kyradeboni@outlook.com" variant="olive">
              Begin the Inquiry
            </LuxuryButton>

            <LuxuryButton href="#portfolio" variant="text">
              View Galleries
            </LuxuryButton>
          </div>
        </div>
      </div>
    </section>
  );
}