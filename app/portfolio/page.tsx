import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LuxuryButton from "@/components/LuxuryButton";

const portfolioImages = [
  {
    image: "/images/portfolio/photo-1.jpg",
    alt: "Heirloom editorial photography by Amor Photo Co.",
    size: "large",
  },
  {
    image: "/images/portfolio/photo-2.jpg",
    alt: "Romantic photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-3.jpg",
    alt: "Soft emotional photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-4.jpg",
    alt: "Timeless storytelling photography by Amor Photo Co.",
    size: "wide",
  },
  {
    image: "/images/portfolio/photo-5.jpg",
    alt: "Natural light photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-6.jpg",
    alt: "Editorial love story photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-7.jpg",
    alt: "Virginia photography by Amor Photo Co.",
    size: "large",
  },
  {
    image: "/images/portfolio/photo-8.jpg",
    alt: "Warm romantic photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-9.jpg",
    alt: "Emotional heirloom photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-10.jpg",
    alt: "Love and family photography by Amor Photo Co.",
    size: "wide",
  },
  {
    image: "/images/portfolio/photo-11.jpg",
    alt: "Refined editorial photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-12.jpg",
    alt: "Honest timeless photography by Amor Photo Co.",
    size: "portrait",
  },
    {
    image: "/images/portfolio/photo-13.jpg",
    alt: "Heirloom editorial photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-14.jpg",
    alt: "Romantic storytelling photography by Amor Photo Co.",
    size: "wide",
  },
  {
    image: "/images/portfolio/photo-15.jpg",
    alt: "Soft emotional photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-16.jpg",
    alt: "Timeless Virginia photography by Amor Photo Co.",
    size: "large",
  },
    {
    image: "/images/portfolio/photo-17.jpg",
    alt: "Heirloom editorial photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-18.jpg",
    alt: "Romantic storytelling photography by Amor Photo Co.",
    size: "wide",
  },
  {
    image: "/images/portfolio/photo-19.jpg",
    alt: "Soft emotional photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-20.jpg",
    alt: "Timeless Virginia photography by Amor Photo Co.",
    size: "large",
  },
    {
    image: "/images/portfolio/photo-21.jpg",
    alt: "Heirloom editorial photography by Amor Photo Co.",
    size: "portrait",
  },
  {
    image: "/images/portfolio/photo-22.jpg",
    alt: "Romantic storytelling photography by Amor Photo Co.",
    size: "wide",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#F8F3EB] text-[#3A312B] font-body overflow-hidden">
      <Navbar />

      {/* PAGE HERO */}
      <section className="relative min-h-[78vh] flex items-center justify-center px-6 md:px-16 stationery-bg overflow-hidden">
        <div className="absolute top-24 left-8 font-hand text-[#CFA5A3]/20 text-8xl md:text-9xl hidden md:block">
          portfolio
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-24">
          <p className="uppercase tracking-[0.5em] text-xs text-[#7A8261] mb-6">
            Amor Photo Co.
          </p>

          <h1 className="font-heading text-[#6B2232] text-6xl md:text-8xl lg:text-9xl font-light leading-tight mb-8">
            The Portfolio
          </h1>

          <p className="max-w-3xl mx-auto text-[#3A312B]/75 text-lg md:text-xl leading-loose">
            A curated collection of love, motherhood, military homecomings, and
            the honest moments that become heirlooms.
          </p>

          <div className="mx-auto mt-10 h-px w-36 bg-gradient-to-r from-transparent via-[#9AA6D3] to-transparent"></div>

          <p className="font-hand text-[#CFA5A3] text-4xl md:text-5xl mt-10">
            preserved with care
          </p>
        </div>
      </section>

      {/* FEATURED PORTFOLIO INTRO */}
      <section className="px-6 md:px-16 py-28 bg-[#F8F3EB]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="relative h-[760px] overflow-hidden">
            <img
              src="/images/portfolio/photo-1.jpg"
              alt="Featured portfolio image by Amor Photo Co."
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#3A312B]/45 via-transparent to-transparent"></div>

            <div className="absolute bottom-8 left-8 right-8 text-[#F8F3EB]">
              <p className="uppercase tracking-[0.45em] text-[10px] mb-4">
                Featured Portfolio
              </p>
              <h2 className="font-heading text-5xl md:text-7xl font-light">
                Love, in its truest light.
              </h2>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-6">
              Curated With Intention
            </p>

            <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light leading-tight mb-8">
              One portfolio, many seasons of love.
            </h2>

            <p className="text-[#3A312B]/75 leading-loose mb-8">
              This portfolio brings together the images that best represent Amor
              Photo Co. — quiet emotion, soft light, honest connection, and the
              kind of photographs that feel like memory.
            </p>

            <p className="text-[#3A312B]/75 leading-loose mb-10">
              Rather than separating each story into categories, this collection
              is designed to be experienced as one continuous visual love letter:
              weddings, couples, motherhood, military homecomings, and the
              beautifully ordinary moments in between.
            </p>

            <p className="font-hand text-[#CFA5A3] text-4xl md:text-5xl mb-10">
              honest, timeless, and deeply yours
            </p>

            <LuxuryButton href="/contact" variant="olive">
              Begin the Inquiry
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* SINGLE EDITORIAL GALLERY */}
      <section className="relative bg-[#FBF7F0] px-6 md:px-16 py-32 overflow-hidden">
        <div className="absolute bottom-12 right-8 font-hand text-[#9AA6D3]/20 text-8xl md:text-9xl hidden md:block">
          heirloom
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-5">
              Featured Gallery
            </p>

            <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light mb-7">
              The images that tell the story.
            </h2>

            <p className="max-w-2xl mx-auto text-[#3A312B]/70 leading-loose">
              A single curated gallery of the photographs used to represent the
              heart, feeling, and visual direction of Amor Photo Co.
            </p>
          </div>

 <div className="grid gap-10">
  <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
    <div className="h-[640px] overflow-hidden">
      <img src="/images/portfolio/photo-1.jpg" alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
    </div>

    <div className="grid gap-6">
      {[2, 3].map((num) => (
        <div key={num} className="h-[307px] overflow-hidden">
          <img src={`/images/portfolio/photo-${num}.jpg`} alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {[4, 5, 6].map((num) => (
      <div key={num} className="h-[430px] overflow-hidden">
        <img src={`/images/portfolio/photo-${num}.jpg`} alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
      </div>
    ))}
  </div>

  <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
    <div className="grid gap-6">
      {[7, 8].map((num) => (
        <div key={num} className="h-[307px] overflow-hidden">
          <img src={`/images/portfolio/photo-${num}.jpg`} alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
        </div>
      ))}
    </div>

    <div className="h-[640px] overflow-hidden">
      <img src="/images/portfolio/photo-9.jpg" alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    {[10, 11].map((num) => (
      <div key={num} className="h-[540px] overflow-hidden">
        <img src={`/images/portfolio/photo-${num}.jpg`} alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
      </div>
    ))}
  </div>

  <div className="h-[680px] overflow-hidden">
    <img src="/images/portfolio/photo-12.jpg" alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {[13, 14, 15].map((num) => (
      <div key={num} className="h-[430px] overflow-hidden">
        <img src={`/images/portfolio/photo-${num}.jpg`} alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
      </div>
    ))}
  </div>

  <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
    <div className="h-[640px] overflow-hidden">
      <img src="/images/portfolio/photo-16.jpg" alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
    </div>

    <div className="grid gap-6">
      {[17, 18].map((num) => (
        <div key={num} className="h-[307px] overflow-hidden">
          <img src={`/images/portfolio/photo-${num}.jpg`} alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    {[19, 20].map((num) => (
      <div key={num} className="h-[540px] overflow-hidden">
        <img src={`/images/portfolio/photo-${num}.jpg`} alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
      </div>
    ))}
  </div>

  <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6 items-stretch">
    <div className="h-[560px] overflow-hidden">
      <img src="/images/portfolio/photo-21.jpg" alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
    </div>

    <div className="h-[560px] overflow-hidden">
      <img src="/images/portfolio/photo-22.jpg" alt="Portfolio image by Amor Photo Co." className="h-full w-full object-cover" />
    </div>
  </div>
</div>
</div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#F8F3EB] px-6 md:px-16 py-28 text-center">
        <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-5">
          Ready When You Are
        </p>

        <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light mb-8">
          Let’s preserve what this season feels like.
        </h2>

        <p className="max-w-2xl mx-auto text-[#3A312B]/70 leading-loose mb-12">
          Amor Photo Co. accepts a limited number of weddings, sessions, and
          military homecomings each season to ensure every gallery is created
          with care.
        </p>

        <LuxuryButton href="/contact" variant="periwinkle">
          Begin Your Story
        </LuxuryButton>
      </section>

      <Footer />
    </main>
  );
}