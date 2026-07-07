import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LuxuryButton from "@/components/LuxuryButton";

const collections = [
  {
    title: "Weddings",
    subtitle: "For vows, heirloom details, and the day love becomes legacy.",
    image: "/images/weddings.jpg",
    includes: [
      "Editorial wedding day coverage",
      "Timeline guidance",
      "Curated online gallery",
      "High-resolution edited images",
      "Print release",
    ],
    note: "Full wedding collections available by inquiry",
  },
  {
    title: "Couples",
    subtitle: "For soft connection, movement, and the romance of being together.",
    image: "/images/couples.jpg",
    includes: [
      "Engagements, anniversaries, or love story sessions",
      "Location and styling guidance",
      "Gentle posing direction",
      "Curated online gallery",
      "High-resolution edited images",
    ],
    note: "Designed for connection, warmth, and honest movement",
  },
  {
    title: "Motherhood",
    subtitle: "For the quiet beauty of becoming, holding, and remembering.",
    image: "/images/motherhood.jpg",
    includes: [
      "Maternity, newborn, or motherhood sessions",
      "Soft lifestyle approach",
      "Location and wardrobe guidance",
      "Curated online gallery",
      "High-resolution edited images",
    ],
    note: "Created for tender, timeless family storytelling",
  },
  {
    title: "Military",
    subtitle: "For the love that waits and the moments home begins again.",
    image: "/images/homecomings.jpg",
    includes: [
      "Homecomings and deployment returns",
      "Pier-side, airport, or family reunions",
      "Documentary-style coverage",
      "Emotional storytelling approach",
      "High-resolution edited images",
    ],
    note: "For reunions, military families, and long-awaited embraces",
  },
];

const process = [
  {
    title: "Inquire",
    text: "Send a note with your session type, date or season, location, and what you are hoping to preserve.",
  },
  {
    title: "Plan",
    text: "We shape the details together with thoughtful guidance around timing, location, styling, and feeling.",
  },
  {
    title: "Photograph",
    text: "Your session unfolds with gentle direction, soft observation, and space for real connection.",
  },
  {
    title: "Preserve",
    text: "Your gallery is carefully edited and delivered as a collection of images meant to be returned to for years.",
  },
];

const faqs = [
  {
    question: "Do you travel?",
    answer:
      "Yes. Travel can be discussed during inquiry depending on the session type, location, and availability.",
  },
  {
    question: "Do you help with posing?",
    answer:
      "Yes. Sessions are gently guided so you never feel overly posed, but you also never feel unsure what to do.",
  },
  {
    question: "How do we book?",
    answer:
      "Start by sending an inquiry with your session type, date or season, and what you are hoping to preserve.",
  },
  {
    question: "Do you photograph military homecomings?",
    answer:
      "Yes. Military reunions and homecomings are part of the Amor Photo Co. story and are approached with care, patience, and emotional awareness.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F8F3EB] text-[#3A312B] font-body overflow-hidden">
      <Navbar />

      {/* PAGE HERO */}
      <section className="relative min-h-[78vh] flex items-center justify-center px-6 md:px-16 stationery-bg overflow-hidden">
        <div className="absolute top-24 right-8 font-hand text-[#CFA5A3]/20 text-8xl md:text-9xl hidden md:block">
          collections
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-24">
          <p className="uppercase tracking-[0.5em] text-xs text-[#7A8261] mb-6">
            Services
          </p>

          <h1 className="font-heading text-[#6B2232] text-6xl md:text-8xl lg:text-9xl font-light leading-tight mb-8">
            Collections for every season of love.
          </h1>

          <p className="max-w-3xl mx-auto text-[#3A312B]/75 text-lg md:text-xl leading-loose">
            Thoughtfully created for weddings, couples, motherhood, military
            homecomings, and the meaningful seasons you never want to forget.
          </p>

          <div className="mx-auto mt-10 h-px w-36 bg-gradient-to-r from-transparent via-[#9AA6D3] to-transparent"></div>

          <p className="font-hand text-[#CFA5A3] text-4xl md:text-5xl mt-10">
            intentional, artful, and deeply yours
          </p>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="bg-[#F8F3EB] px-6 md:px-16 py-24 text-center">
        <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-5">
          The Investment
        </p>

        <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light mb-8">
          More than photographs — a way to remember.
        </h2>

        <p className="max-w-3xl mx-auto text-[#3A312B]/75 text-lg leading-loose">
          Every collection is designed with intention, warmth, and an editorial
          eye. Amor Photo Co. accepts a limited number of weddings, sessions, and
          military homecomings each season to ensure every client receives a
          thoughtful, artful experience.
        </p>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-[#FBF7F0] px-6 md:px-16 py-32">
        <div className="max-w-7xl mx-auto grid gap-16">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-[620px] overflow-hidden">
                <img
                  src={collection.image}
                  alt={`${collection.title} photography by Amor Photo Co.`}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3A312B]/40 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8 text-[#F8F3EB]">
                  <p className="uppercase tracking-[0.45em] text-[10px] mb-3">
                    Collection {index + 1}
                  </p>
                  <h2 className="font-heading text-5xl md:text-6xl font-light">
                    {collection.title}
                  </h2>
                </div>
              </div>

              <div className="bg-[#F8F3EB] border border-[#E8DED3] p-8 md:p-12">
                <p className="uppercase tracking-[0.4em] text-[10px] text-[#7A8261] mb-5">
                  Amor Photo Co.
                </p>

                <h3 className="font-heading text-[#6B2232] text-5xl md:text-6xl font-light mb-6">
                  {collection.title} Collections
                </h3>

                <p className="text-[#3A312B]/75 leading-loose mb-8">
                  {collection.subtitle}
                </p>

                <div className="h-px w-24 bg-gradient-to-r from-[#7A8261] to-[#9AA6D3] mb-8"></div>

                <p className="uppercase tracking-[0.35em] text-[10px] text-[#7A8261] mb-5">
                  Includes
                </p>

                <ul className="space-y-4 mb-8">
                  {collection.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 text-[#3A312B]/75 leading-relaxed"
                    >
                      <span className="text-[#CFA5A3]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="uppercase tracking-[0.28em] text-[10px] text-[#9AA6D3]">
                  {collection.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-[#D8CEC4] px-6 md:px-16 py-32 overflow-hidden">
        <div className="absolute top-12 left-8 font-hand text-[#F8F3EB]/35 text-8xl md:text-9xl hidden md:block">
          cared for
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.45em] text-xs text-[#6B2232] mb-5">
              The Process
            </p>

            <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light mb-7">
              Calm, thoughtful, and guided from the beginning.
            </h2>

            <p className="max-w-2xl mx-auto text-[#3A312B]/70 leading-loose">
              The experience is designed so you feel prepared, cared for, and
              fully present in the moments that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="bg-[#F8F3EB] border border-[#E8DED3] p-8 min-h-[300px]"
              >
                <p className="font-hand text-[#CFA5A3] text-5xl mb-5">
                  0{index + 1}
                </p>

                <h3 className="font-heading text-[#6B2232] text-3xl mb-5">
                  {step.title}
                </h3>

                <p className="text-[#3A312B]/70 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8F3EB] px-6 md:px-16 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-5">
              Questions
            </p>

            <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light">
              Before you inquire.
            </h2>
          </div>

          <div className="grid gap-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-[#E8DED3] bg-[#FBF7F0] p-8"
              >
                <h3 className="font-heading text-[#6B2232] text-3xl mb-4">
                  {faq.question}
                </h3>

                <p className="text-[#3A312B]/70 leading-loose">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#6B2232] text-[#F8F3EB] px-6 md:px-16 py-28 text-center">
        <p className="uppercase tracking-[0.45em] text-xs text-[#CFA5A3] mb-5">
          Begin the Inquiry
        </p>

        <h2 className="font-heading text-5xl md:text-7xl font-light mb-8">
          Tell me what this season means to you.
        </h2>

        <p className="max-w-2xl mx-auto text-[#F8F3EB]/75 leading-loose mb-12">
          Send a note with your session type, preferred date or season,
          location, and anything meaningful you want remembered.
        </p>

        <LuxuryButton href="mailto:kyradeboni@outlook.com" variant="periwinkle">
          Inquire for Collections
        </LuxuryButton>
      </section>

      <Footer />
    </main>
  );
}