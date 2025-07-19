import "./App.css";
import Navbar from "@components/Navbar/Navbar";
import Hero from "@components/Hero/Hero";
import Features from "@components/Features/Features";
import TestimonialsSection from "@components/Testimonials/TestimonialsSection";
import Footer from "@components/Footer/Footer";
import HowItWorks from "@components/HowItWorks/HowItWorks";
import CTASection from "@components/CTASection/CTASection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
