import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import crm from "../assets/Admission.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Improved conversion rates",
    description:
      "By qualifying and nurturing leads, your sales team can focus on leads with the highest potential and increase student conversions.",
  },
  {
    title: "Enhanced student relationships",
    description:
      "Personalized communication and timely follow-ups help build strong long-term student relationships.",
  },
  {
    title: "Increased efficiency",
    description:
      "AI automation reduces manual work, eliminates errors, and improves operational productivity.",
  },
  {
    title: "Better decision-making",
    description:
      "Data insights help you make smarter marketing and admission decisions backed by analytics.",
  },
];

function Universities() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[150px]" />

      <div className="relative w-11/12 mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            UNIFYI
          </span>{" "}
          – Breathing Life into Admission Management
        </h1>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300 shadow-xl"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
                ✓
              </div>

              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
              ✓
            </div>

            <h3 className="font-semibold text-lg mb-2">
              {features[current].title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {features[current].description}
            </p>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/10 border border-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/10 border border-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl rounded-3xl" />

            <img
              src={crm}
              alt="Admission Management"
              className="relative rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 p-6 shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Universities;
