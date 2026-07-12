import Navbar from "@/components/Navbar";
import LoveLetterIntro from "@/components/LoveLetterIntro";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import BrandStory from "@/components/BrandStory";
import CinematicImageBreak from "@/components/CinematicImageBreak";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-scale-down bg-[#F8F3EB] text-[#3A312B] font-body overflow-hidden">
      <Navbar />
      <LoveLetterIntro />
      <div className="mt-0">
      <Hero />
      </div>
      <PortfolioGrid />
      <BrandStory />
      <CinematicImageBreak />
      <Experience />
      <Services />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}