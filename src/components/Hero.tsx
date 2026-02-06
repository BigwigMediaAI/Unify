import React, { useEffect, useState } from "react";
import social from "../assets/unify.png";
import ContactUs from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white pt-28 pb-20 px-6 md:px-14"
      data-aos="fade-up"
    >
      {/* Glow Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[140px]" />

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-2xl space-y-6 text-center lg:text-left">
          <h4 className="text-blue-400 font-semibold tracking-wide">
            Empowering Educational Institutions 🎓
          </h4>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Streamline Your Leads, Applications &
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Admission Management with AI
            </span>
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Unifyi transforms your institution into an operational powerhouse.
            From applicant tracking to vendor management and admissions — our
            AI-powered platform optimizes workflows, improves communication, and
            boosts your conversion rates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get Started
            </button>

            <a
              href="/contact"
              className="px-8 py-3 rounded-xl border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="relative w-full max-w-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />

          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
            <img
              src={social}
              alt="Dashboard Preview"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="relative bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-2xl w-full max-w-md">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <ContactUs />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
