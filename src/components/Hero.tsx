import React, { useState } from "react";
import social from "../assets/unify.png";
import ContactUs from "./Contact";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-between pt-24 py-12 px-4 md:px-14 mt-10 bg-black"
    >
      {/* Left Section */}
      <div className="w-11/12 mx-auto mb-10 space-y-5 text-center lg:text-left">
        <h4 className="text-blue-400 font-bold text-lg flex items-center justify-center lg:justify-start">
          Empowering Educational Institutions & Universities
          <span className="ml-1 text-blue-400">🎓</span>
        </h4>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
          Streamline Your Leads, Applications & Admission Management Processes -{" "}
          <span className="text-blue-400">Powered by AI</span>
        </h1>
        <p className="text-gray-300 leading-relaxed text-justify">
          Unifyi serves as a comprehensive platform designed to streamline your
          educational establishment, converting it into an efficient operational
          powerhouse. From applicant tracking to counseling and vendor
          management, right through to admissions, Unifyi's integration offers a
          simplistic yet sophisticated solution for workflow optimization. By
          enhancing communication and improving management processes, it
          simultaneously boosts your conversion rate from lead inquiries to
          successful admissions. Let Unifyi transform your institution and
          elevate your efficiency to the next level.
        </p>
        <a href="/contact">
          <button className="inline-block mt-3 bg-blue-600 text-white px-6 p-2 rounded-lg shadow-md hover:bg-blue-700">
            Contact Us
          </button>
        </a>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
        <img
          src={social}
          alt="Happy User"
          className="w-full mx-auto md:w-full object-cover"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
