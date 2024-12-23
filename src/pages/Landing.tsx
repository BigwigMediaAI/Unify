import FAQ from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Universities from "../components/Universities";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import StatsSection from "../components/Stats";
import { useEffect, useState } from "react";
import Blog from "../components/Blog";



function Landing() {
    const [isVisible, setIsVisible] = useState(false);
    
  // Handle scroll to top button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return (
        <div id="home">
            <Nav/>
            <Hero/>
            <Universities/>
            <StatsSection/>
            <Features/>
            <AboutUs/>
            <Blog/>
            <FAQ/>
            <Footer/>
            {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-20 fixed bottom-10 right-10 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center"
        >
          ↑
        </button>
      )}
        </div>
    );
}

export default Landing;