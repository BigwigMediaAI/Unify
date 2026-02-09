import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Unifyi?",
    answer:
      "Unifyi is a centralized AI-powered platform that simplifies and automates admissions for modern educational institutions.",
  },
  {
    question: "How does it improve admissions?",
    answer:
      "It eliminates manual workflows, centralizes inquiries, and provides intelligent automation for faster processing and higher conversion.",
  },
  {
    question: "Can it integrate with existing systems?",
    answer:
      "Yes. Unifyi is designed to integrate seamlessly with your current infrastructure and third-party tools.",
  },
  {
    question: "Is it secure?",
    answer:
      "We follow enterprise-grade security practices and compliance standards to protect institutional and student data.",
  },
  {
    question: "Do you provide onboarding?",
    answer:
      "Yes. Dedicated onboarding, training, and 24/7 support are included.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE — Editorial Block */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Got questions?
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              We’ve got answers.
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Everything you need to know about Unifyi — from integrations and
            security to onboarding and analytics. Designed to remove friction
            and give institutions clarity.
          </p>

          <div className="mt-8 text-sm text-gray-500">
            Still curious? Our team is available 24/7.
          </div>
        </div>

        {/* RIGHT SIDE — FAQ Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="relative pl-10">
                {/* timeline dot */}
                <div
                  className={`absolute left-0 top-6 w-6 h-6 rounded-full border-2 transition ${
                    openIndex === index
                      ? "bg-blue-500 border-blue-400"
                      : "border-white/20 bg-black"
                  }`}
                />

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left group"
                  >
                    <span className="text-lg font-medium group-hover:text-blue-400 transition">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`px-6 transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-40 pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
