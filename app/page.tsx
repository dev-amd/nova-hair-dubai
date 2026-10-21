import Navbar from "./navbar";
import Hero from "./hero";
import TrustBar from "./trust-bar";
import ProcessSteps from "./process-steps";
import About from "./about";
import Testimonials from "./testimonials";
import Contact from "./contact";
import FAQ from "./faq";
import FooterCTA from "./footer-cta";
import Footer from "./footer";
import Results from "./results";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero /> {/* 1. Hook + Quiz */}
      <TrustBar /> {/* 2. DHA / JCI Credibility */}
      <Results /> {/* 3. Proof (Before & After Slider) */}
      <ProcessSteps /> {/* 4. Journey (Easy 4 steps) */}
      <About /> {/* 5. Surgeon Authority (Dr. Tariq) */}
      <Testimonials /> {/* 6. Social Proof (Dubai reviews) */}
      <FAQ /> {/* 7. Clear Objections & Doubts (Move here!) */}
      <Contact /> {/* 8. VIP Booking Form */}
      <FooterCTA /> {/* 9. Final Night Skyline Push */}
      <Footer /> {/* 10. Links & Disclaimer */}
    </main>
  );
}
