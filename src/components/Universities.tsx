import jaipur from "../assets/universities/jaipur.webp";
import srm from "../assets/universities/SRM.webp";
import imi from "../assets/universities/imi.webp";
import nims from "../assets/universities/nims.webp";
import anant from "../assets/universities/anant.webp";
import auro from "../assets/universities/auro.webp";
import galgotias from "../assets/universities/Galgotias-1.webp";
import gandhi from "../assets/universities/gandhi.webp";
import global from "../assets/universities/global.webp";
import lpu from "../assets/universities/Lovely-Professional-University-Logo.webp";
import spjain from "../assets/universities/sp jain.webp";
import xlri from "../assets/universities/XLRI.webp";
import crm from "../assets/Admission.svg";

const features = [
  {
    title: "Improved conversion rates",
    description:
      "By qualifying and nurturing leads, your sales team can focus on leads with the highest potential, and your business can increase the likelihood of converting them into paying students.",
  },
  {
    title: "Enhanced students relationships",
    description:
      "Lead management, personalized communication, and timely follow-ups enable your business to build strong relationships with students, leading to increased loyalty and retention.",
  },
  {
    title: "Increased efficiency",
    description:
      "Automating lead management processes with the help of AI, can help streamline your sales operations, reduce manual errors, and increase productivity.",
  },
  {
    title: "Better decision-making",
    description:
      "Get valuable insights into students behavior and preferences, enabling you to make informed and data-driven decisions about sales strategies and marketing efforts.",
  },
];

function Universities() {
  return (
    <div className="bg-black text-white">
      <h1 className="text-4xl font-semibold mb-10 text-center py-5">
        <span className="text-blue-400 font-bold">UNIFYI</span> - Breathing Life
        into Admission Management
      </h1>

      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-6 gap-10">
        <img src={jaipur} alt="" />
        <img src={srm} alt="" />
        <img src={imi} alt="" />
        <img src={nims} alt="" />
        <img src={global} alt="" />
        <img src={xlri} alt="" />
        <img src={gandhi} alt="" />
        <img src={spjain} alt="" />
        <img src={auro} alt="" />
        <img src={anant} alt="" />
        <img src={lpu} alt="" />
        <img src={galgotias} alt="" />
      </div>

      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-11/12 mx-auto px-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-md rounded-lg p-6 text-left"
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

        <img src={crm} alt="" className="mt-10 md:mt-16 mx-auto md:max-w-2xl" />
      </div>
    </div>
  );
}

export default Universities;
