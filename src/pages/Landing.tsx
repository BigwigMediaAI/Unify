import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Universities from "../components/Universities";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import StatsSection from "../components/Stats";
import Blog from "../components/Blog";

import ImageSlider from "../components/Testimonial";

function Landing() {
  return (
    <div id="home" className="bg-black">
      <Nav />
      <Hero />
      <Universities />
      <StatsSection />
      <Features />
      <ImageSlider />
      <AboutUs />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Landing;
