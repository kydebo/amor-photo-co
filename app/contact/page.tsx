import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LuxuryButton from "@/components/LuxuryButton";

const sessionTypes = [
  "Wedding",
  "Couples",
  "Motherhood",
  "Military Homecoming",
  "Family",
  "Other",
];

export default function ContactPage() {
  return (
    <main className="site-scale-down bg-[#F8F3EB] text-[#3A312B] font-body overflow-hidden">
      <Navbar />

      {/* PAGE HERO */}
      <section className="relative min-h-[72vh] flex items-center justify-center px-6 md:px-16 stationery-bg overflow-hidden">
        <div className="absolute top-24 left-8 font-hand text-[#CFA5A3]/20 text-8xl md:text-9xl hidden md:block">
          inquire
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-24">
          <p className="uppercase tracking-[0.5em] text-xs text-[#7A8261] mb-6">
            Contact Amor Photo Co.
          </p>

          <h1 className="font-heading text-[#6B2232] text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
            Tell me what this season means to you.
          </h1>

          <p className="max-w-3xl mx-auto text-[#3A312B]/75 text-lg md:text-xl leading-loose">
            Whether you are planning a wedding, welcoming someone home,
            celebrating motherhood, or preserving the beauty of right now — I
            would be honored to hear your story.
          </p>

          <p className="font-hand text-[#CFA5A3] text-2xl md:text-3xl mt-10">
            soft light, honest feeling, heirloom memory
          </p>
        </div>
      </section>

      {/* INQUIRY SECTION */}
      <section className="relative bg-[#FBF7F0] px-6 md:px-16 py-28 overflow-hidden">
        <div className="absolute bottom-12 right-8 font-hand text-[#9AA6D3]/20 text-8xl md:text-9xl hidden md:block">
          begin
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-32">
            <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-6">
              The Inquiry
            </p>

            <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light leading-tight mb-8">
              A thoughtful beginning to your photography experience.
            </h2>

            <p className="text-[#3A312B]/75 text-lg leading-loose mb-8">
              Share as much as you can — your date, location, session type, and
              the feeling you want your photographs to hold. The more I know
              about your story, the more intentionally I can serve you.
            </p>

            <div className="border-l border-[#9AA6D3] pl-6 mb-10">
              <p className="font-hand text-[#CFA5A3] text-4xl leading-relaxed">
                Amor Photo Co. accepts a limited number of sessions each season
                so every gallery receives careful attention.
              </p>
            </div>

            <div className="bg-[#F8F3EB] border border-[#E8DED3] p-7">
              <p className="uppercase tracking-[0.35em] text-[10px] text-[#7A8261] mb-5">
                Serving
              </p>

              <p className="font-heading text-[#6B2232] text-3xl mb-4">
                Virginia & Military Communities
              </p>

              <p className="text-[#3A312B]/70 leading-loose">
                Weddings, couples, motherhood, families, and military
                homecomings photographed with a refined editorial eye and a soft,
                honest approach.
              </p>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="bg-[#F8F3EB] border border-[#E8DED3] p-7 md:p-10 shadow-[0_30px_80px_rgba(58,49,43,0.08)]">
            <p className="uppercase tracking-[0.4em] text-[10px] text-[#7A8261] mb-8">
              Inquiry Form
            </p>

            <form
              action="mailto:kyradeboni@outlook.com"
              method="post"
              encType="text/plain"
              className="grid gap-7"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <label className="grid gap-3">
                  <span className="uppercase tracking-[0.3em] text-[10px] text-[#6B2232]">
                    Your Name
                  </span>
                  <input
                    name="Name"
                    type="text"
                    required
                    className="bg-[#FBF7F0] border border-[#E8DED3] px-4 py-4 outline-none focus:border-[#9AA6D3] transition"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="uppercase tracking-[0.3em] text-[10px] text-[#6B2232]">
                    Email Address
                  </span>
                  <input
                    name="Email"
                    type="email"
                    required
                    className="bg-[#FBF7F0] border border-[#E8DED3] px-4 py-4 outline-none focus:border-[#9AA6D3] transition"
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <label className="grid gap-3">
                  <span className="uppercase tracking-[0.3em] text-[10px] text-[#6B2232]">
                    Session Type
                  </span>
                  <select
                    name="Session Type"
                    required
                    className="bg-[#FBF7F0] border border-[#E8DED3] px-4 py-4 outline-none focus:border-[#9AA6D3] transition"
                  >
                    <option value="">Select one</option>
                    {sessionTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-3">
                  <span className="uppercase tracking-[0.3em] text-[10px] text-[#6B2232]">
                    Preferred Date / Season
                  </span>
                  <input
                    name="Preferred Date or Season"
                    type="text"
                    placeholder="Example: October 2026 or Spring"
                    className="bg-[#FBF7F0] border border-[#E8DED3] px-4 py-4 outline-none focus:border-[#9AA6D3] transition"
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <label className="grid gap-3">
                  <span className="uppercase tracking-[0.3em] text-[10px] text-[#6B2232]">
                    Location
                  </span>
                  <input
                    name="Location"
                    type="text"
                    placeholder="City, venue, base, or general area"
                    className="bg-[#FBF7F0] border border-[#E8DED3] px-4 py-4 outline-none focus:border-[#9AA6D3] transition"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="uppercase tracking-[0.3em] text-[10px] text-[#6B2232]">
                    Estimated Budget
                  </span>
                  <input
                    name="Estimated Budget"
                    type="text"
                    placeholder="Optional"
                    className="bg-[#FBF7F0] border border-[#E8DED3] px-4 py-4 outline-none focus:border-[#9AA6D3] transition"
                  />
                </label>
              </div>

              <label className="grid gap-3">
                <span className="uppercase tracking-[0.3em] text-[10px] text-[#6B2232]">
                  Tell Me About Your Story
                </span>
                <textarea
                  name="Message"
                  required
                  rows={7}
                  placeholder="Share what you are hoping to preserve, what matters most, and any meaningful details."
                  className="bg-[#FBF7F0] border border-[#E8DED3] px-4 py-4 outline-none focus:border-[#9AA6D3] transition resize-none"
                />
              </label>

              <button
                type="submit"
                className="justify-self-start bg-[#7A8261] text-[#F8F3EB] px-9 py-4 uppercase tracking-[0.4em] text-[11px] transition duration-700 hover:bg-[#9AA6D3] hover:shadow-[0_18px_45px_rgba(122,130,97,0.18)]"
              >
                Send Inquiry
              </button>
            </form>

            <p className="text-[#3A312B]/55 text-sm leading-loose mt-8">
              This form will open your email app with your inquiry details
              prepared. A connected form service can be added before launch for
              a smoother client experience.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-[#F8F3EB] px-6 md:px-16 py-28">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.45em] text-xs text-[#7A8261] mb-5">
            What Happens Next
          </p>

          <h2 className="font-heading text-[#6B2232] text-5xl md:text-7xl font-light mb-16">
            From first note to finished gallery.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "You inquire",
                text: "Send the details you know so far — session type, date, location, and the feeling behind the photographs.",
              },
              {
                title: "We plan",
                text: "We’ll talk through availability, vision, styling, timing, location, and what would make the experience feel meaningful.",
              },
              {
                title: "I preserve",
                text: "Your session is photographed with gentle direction, careful observation, and an heirloom editorial approach.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#FBF7F0] border border-[#E8DED3] p-8"
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

      <Footer />
    </main>
  );
}