import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import crm from "../assets/Admission.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Improved conversion rates",
    description:
      "By qualifying and nurturing leads, your sales team can focus on leads with the highest potential, and your business can increase the likelihood of converting them into paying students.",
  },
  {
    title: "Enhanced student relationships",
    description:
      "Lead management, personalized communication, and timely follow-ups enable your business to build strong relationships with students, leading to increased loyalty and retention.",
  },
  {
    title: "Increased efficiency",
    description:
      "Automating lead management processes with the help of AI can help streamline your sales operations, reduce manual errors, and increase productivity.",
  },
  {
    title: "Better decision-making",
    description:
      "Get valuable insights into student behavior and preferences, enabling you to make informed and data-driven decisions about sales strategies and marketing efforts.",
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
    <div className="bg-black text-white mb-10 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        <span className="text-blue-400 font-bold">UNIFYI</span> - Breathing Life
        into Admission Management
      </h1>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-4 gap-6 w-11/12 mx-auto px-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
            data-aos="zoom-in"
          >
            <div className="text-white bg-green-500 w-fit px-2 rounded-full text-lg mb-4">
              ✓
            </div>
            <h3 className="font-semibold text-lg text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-5/6 mx-auto relative px-5">
        <div className="bg-gray-800 shadow-md rounded-lg p-6 text-left">
          <div className="text-white bg-green-500 w-fit px-2 rounded-full text-lg mb-4">
            ✓
          </div>
          <h3 className="font-semibold text-lg text-white mb-2">
            {features[current].title}
          </h3>
          <p className="text-gray-300">{features[current].description}</p>
        </div>

        {/* Left and Right Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-400 p-1 rounded-full text-white"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-400 p-1 rounded-full text-white"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* CRM Image */}
      <img
        src={crm}
        alt="Admission Management"
        className="mt-10 md:mt-16 mx-auto md:max-w-2xl hidden md:block"
      />
    </div>
  );
}

export default Universities;
