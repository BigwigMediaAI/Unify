import about from "../assets/ABOUT (1).png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[150px]" />
      </div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        data-aos="fade-up"
      >
        {/* Text Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Us</h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            Ever wondered what you'd get if you crossed a digital advertising
            agency with Artificial Intelligence & Machine Learning? Meet BIGWIG
            MEDIA — an AI-powered force redefining the digital landscape with
            innovation, creativity, and precision.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            We blend proprietary AI technology, marketing mastery, and advanced
            analytics to build systems that don’t just perform — they dominate.
            Our mission is simple: help institutions grow faster, smarter, and
            more efficiently.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We’re not just another agency. We’re architects of digital evolution
            — pushing boundaries and shaping the future of intelligent
            automation.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold shadow-lg hover:scale-105 transition-all"
          >
            Contact Us
          </button>
        </div>

        {/* Image Spotlight */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl rounded-3xl" />

          <img
            src={about}
            alt="About Us"
            className="relative w-full max-w-md rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 p-6 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
