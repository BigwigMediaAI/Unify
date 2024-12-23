import React, { useState } from "react";
import social from "../assets/Lead management.svg"
import ContactUs from "./Contact";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section id="home" className="relative flex flex-col lg:flex-row items-center justify-between py-12 px-4 md:px-14 mt-10">
      {/* Left Section */}
      <div className="max-w-lg space-y-3 text-center lg:text-left">
  <h4 className="text-blue-500 font-bold text-lg flex items-center justify-center lg:justify-start">
    Empowering Educational Institutions & Universities
    <span className="ml-1 text-blue-500">🎓</span>
  </h4>
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
    Streamline Your Leads, Applications & Admission Management Processes - <span className="text-blue-500">Powered by AI</span>
  </h1>
  <p className="text-gray-600 leading-relaxed text-justify">
  Unifyi serves as a comprehensive platform designed to streamline your educational establishment, converting it into an efficient operational powerhouse. From applicant tracking to counseling and vendor management, right through to admissions, Unifyi's integration offers a simplistic yet sophisticated solution for workflow optimization. By enhancing communication and improving management processes, it simultaneously boosts your conversion rate from lead inquiries to successful admissions. Let Unifyi transform your institution and elevate your efficiency to the next level.  </p>
  <button
  onClick={openModal}
            className="inline-block  bg-blue-600 text-white px-6 p-2 rounded-lg shadow-md hover:bg-blue-700"
          >
            Contact Us
          </button>
    
</div>



      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
        <img
          src={social} // Replace with your actual image URL
          alt="Happy User"
          className="w-60 mx-auto md:w-full object-cover"
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
