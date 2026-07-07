import LuxuryButton from "./LuxuryButton";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-[#6B2232] text-[#F8F3EB] px-6 md:px-16 py-28 overflow-hidden"
    >
      <div className="absolute top-10 left-8 font-hand text-[#CFA5A3]/15 text-8xl md:text-9xl hidden md:block">
        amor
      </div>

      <div className="absolute bottom-10 right-8 font-script text-[#F8F3EB]/10 text-8xl md:text-9xl hidden md:block">
        legacy
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-[0.45em] text-xs text-[#CFA5A3] mb-6">
          Amor Photo Co.
        </p>

        <h2 className="font-heading text-5xl md:text-7xl font-light leading-tight mb-8">
          Heirloom editorial photography for love, motherhood, military
          homecomings, and the stories that become legacy.
        </h2>

        <p className="max-w-2xl mx-auto text-[#F8F3EB]/75 leading-loose mb-12">
          Serving Virginia couples, families, mothers, and military communities
          with soft, honest, artful imagery.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-20">
          <LuxuryButton href="mailto:kyradeboni@outlook.com" variant="periwinkle">
            Begin Your Story
          </LuxuryButton>

          <LuxuryButton href="#portfolio" variant="outline">
            View the Galleries
          </LuxuryButton>
        </div>

        <div className="border-t border-[#9AA6D3]/35 pt-12 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-[10px] text-[#CFA5A3] mb-4">
              Brand
            </p>
            <p className="font-heading text-3xl tracking-[0.18em]">
              AMOR PHOTO CO.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.35em] text-[10px] text-[#CFA5A3] mb-4">
              Philosophy
            </p>
            <p className="font-hand text-4xl text-[#CFA5A3]">
              Love, in its truest light.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.35em] text-[10px] text-[#CFA5A3] mb-4">
              Connect
            </p>
            <div className="flex justify-center gap-5 uppercase tracking-[0.3em] text-[10px]">
              <a href="#" className="hover:text-[#CFA5A3] transition">
                Instagram
              </a>
              <a
                href="mailto:kyradeboni@outlook.com"
                className="hover:text-[#CFA5A3] transition"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <p className="mt-14 uppercase tracking-[0.35em] text-[10px] text-[#F8F3EB]/45">
          Romantic · Refined · Honest · Heirloom Editorial Photography
        </p>
      </div>
    </footer>
  );
}