import React from "react";
import ceo from "../assets/ceo.jpg"

const Team: React.FC = () => {
  // Sample data for team members


  return (
    <>
    <section className=" container mx-auto py-12 px-4 lg:px-8">
      <div className="max=w-6xl px-6 md:px-8 gap-8">
        {/* CEO Section */}
        <div className=" bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
            src={ceo} // Replace with your CEO image
            alt="CEO"
            className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Vipul Dutta</h3>
          <p className="text-blue-600 text-center my-3">CEO & Founder</p>
          <p className="text-gray-600 text-center">
          Vipul Dutta, the all-star of tech entrepreneurship and the Mastermind-in-Chief over at Bigwig Media Group of Companies. With a legendary 23-year run in the high-stakes world of Digital Marketing and Advertising, he's practically royalty in the industry. No kidding! His majestic career is littered with illustrious roles like 'Director of Adglobal360- Hakahodo (Japan),' 'Lord High Director of Pensa Media - a Google Partner Company (India),' and 'Supreme Leader at PBL/ACP Media (New Zealand).' Not just content being one of the pioneer in digital marketing, he's got a serious crush on AI and is hell-bent on spearheading the next wave of innovative firepower in the digital market landscape.
          </p>
          <h2 className="text-gray-600 text-center mt-4">
          Step up, folks, and prepare to be amazed by the spectacle that is Unifyi! Picture it: An AI-fuelled, SAAS platform that acts as a one-stop-shop for managing leads through the maze-like hilarity that is the universities and institutions admission process. Think of Unifyi as your ticket to the roller coaster ride of lead capture, nurturing, and conversion into admissions, all without losing your hair (or your sanity).
          </h2>
          <h2 className="text-gray-600 text-center mt-4">
          And here's the cherry on top- an unstoppable squad of over 40 dedicated experts, tirelessly working 24/7. They might not wear superhero capes but, their mission? To offer you the best-customized solutions! Whether your institution requires a simple solution or complex adjustments, they've got your back! They ensure your lead data is shielded with maximum security and the enrollment success scales up. So stick around with Unifyi and watch the show!
          </h2>
        </div>
      </div>
    </section>
    </>
  );
};

export default Team;
