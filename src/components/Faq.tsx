import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faq_img from "../assets/faq-img.png";
const faqs = [
  {
    question: "What is Unifyi?",
    answer:
      "Unifyi is a comprehensive platform designed to streamline and centralize admissions processes for higher education institutions.",
  },
  {
    question: "How does Unifyi improve the admissions process?",
    answer:
      "Unifyi automates application processing, centralizes inquiries, and provides customizable post-application workflows to make admissions seamless.",
  },
  {
    question: "Is Unifyi suitable for all types of educational institutions?",
    answer:
      "Yes, Unifyi is flexible and can be tailored to the specific needs of universities, colleges, and other higher education organizations.",
  },
  {
    question: "Can Unifyi integrate with existing systems?",
    answer:
      "Absolutely! Unifyi supports integration with various existing systems to ensure a smooth transition and workflow.",
  },
  {
    question: "What kind of support does Unifyi offer?",
    answer:
      "We offer 24/7 customer support, onboarding assistance, and detailed documentation to help you get the most out of Unifyi.",
  },
  {
    question: "Is training provided for using Unifyi?",
    answer:
      "Yes, we provide comprehensive training sessions to ensure your team is comfortable and efficient with the platform.",
  },
  {
    question: "Does Unifyi offer analytics features?",
    answer:
      "Yes, Unifyi provides in-depth analytics to track admissions metrics, monitor progress, and make data-driven decisions.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="text-white mb-10 py-4 px-10 md:px-20">
      <h2 className="text-5xl font-bold text-center mb-2 text-white">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly  py-3 items-start ">
        <div className="md:flex items-start hidden  ">
          <img src={faq_img} alt="FAQ Illustration" className="w-80 max-w-sm" />
        </div>
        <div className="space-y-5 pt-10  ">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              {/* FAQ Box */}
              <div className="bg-gray-50 border text-gray-900 border-gray-700 rounded-lg pl-12 pr-6 py-3 relative max-w-xl w-full">
                {/* Number Badge (half-overlapping from left) */}
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-orange-500">
                  {index + 1}
                </div>

                <button
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="pt-2 text-gray-700 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
