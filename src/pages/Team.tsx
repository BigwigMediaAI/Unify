import React from "react";
import ceo from "../assets/ceo.jpg";
import Nav2 from "../components/Nav2";
import Footer2 from "../components/Footer2";

const Team: React.FC = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Nav2 />

      <section className="relative py-24">
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero Profile */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            {/* Image Spotlight */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl rounded-full" />
              <img
                src={ceo}
                alt="Vipul Dutta"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border border-white/10 shadow-2xl"
              />
            </div>

            {/* Title */}
            <div className="text-center lg:text-left max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Vipul Dutta
              </h1>

              <p className="text-blue-400 font-semibold mb-6 text-lg">
                Founder & CEO
              </p>

              <p className="text-gray-400 leading-relaxed text-lg">
                A visionary entrepreneur with 23+ years in digital marketing and
                technology innovation, leading the next generation of AI-driven
                enrollment platforms.
              </p>
            </div>
          </div>

          {/* Biography Block */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl mb-16">
            <p className="text-gray-400 leading-relaxed mb-6">
              Vipul Dutta, the all-star of tech entrepreneurship and the
              Mastermind-in-Chief over at Bigwig Media Group of Companies. With
              a legendary 23-year run in the high-stakes world of Digital
              Marketing and Advertising, he's practically royalty in the
              industry. No kidding! His majestic career is littered with
              illustrious roles like 'Director of Adglobal360- Hakahodo
              (Japan),' 'Lord High Director of Pensa Media - a Google Partner
              Company (India),' and 'Supreme Leader at PBL/ACP Media (New
              Zealand).' Not just content being one of the pioneer in digital
              marketing, he's got a serious crush on AI and is hell-bent on
              spearheading the next wave of innovative firepower in the digital
              market landscape.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Today, his focus is AI transformation. With Unifyi, he is
              spearheading a future where institutions leverage automation,
              analytics, and intelligent systems to unlock enrollment growth and
              operational excellence.
            </p>
          </div>

          {/* About Unifyi Section */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                About Unifyi
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Step up, folks, and prepare to be amazed by the spectacle that
                is Unifyi! Picture it: An AI-fuelled, SAAS platform that acts as
                a one-stop-shop for managing leads through the maze-like
                hilarity that is the universities and institutions admission
                process. Think of Unifyi as your ticket to the roller coaster
                ride of lead capture, nurturing, and conversion into admissions,
                all without losing your hair (or your sanity).
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                The Mission
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Powered by a 40+ expert team working around the clock, Unifyi
                delivers customized solutions that scale enrollment success
                while maintaining enterprise-grade data security.Also offer you
                the best-customized solutions! Whether your institution requires
                a simple solution or complex adjustments, they've got your back!
                They ensure your lead data is shielded with maximum security and
                the enrollment success scales up. So stick around with Unifyi
                and watch the show!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer2 />
    </div>
  );
};

export default Team;
