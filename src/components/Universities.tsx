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
import crm from "../assets/CRM-Funnel-Updated-02.webp";

function Universities() {
    return (
        <div>

        <h1 className="mt-12 md:mt-20 text-2xl md:text-3xl font-bold text-center text-gray-700">The lifeblood of Admission Management in India!</h1>
        <div className="grid grid-cols-2 md:grid-cols-6 p-8 md:p-14 gap-10">
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

        <div className="bg-gradient-to-b from-blue-50 via-gray-100 to-white py-16">
    <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 leading-tight md:leading-snug px-4">
        Conquer Admissions Chaos with Unify CRM – Your Campus’s Secret Weapon
    </h1>
    <p className="text-justify md:text-center text-gray-600 px-8 mt-4 md:mt-6 text-lg md:text-xl md:max-w-6xl mx-auto">
        Imagine your admissions office as a reality TV show: “Survivor: Paper Pile Edition.” Applications scattered everywhere, decisions made via coin tosses, and inquiries lost in the void like socks in the dryer. Enter Unify CRM to save the day – and your sanity.
    </p>
    <p className="text-justify md:text-center text-gray-600 px-8 mt-6 md:mt-10 text-lg md:text-xl md:max-w-6xl mx-auto">
        Unify is like the admissions equivalent of having your favorite professor hand out open-book exams. It organizes inquiries (so you’re not sending emails into the abyss), automates applications (bye-bye, form-chasing marathons), and customizes workflows (because cookie-cutter solutions are so passé). Oh, and it handles payments like a pro – no more awkward “how do I pay?” moments, just happy students shouting, “Take my money already!”
    </p>
    <img src={crm} alt="" className="mt-10 md:mt-16 mx-auto md:max-w-2xl " />
</div>


        </div>
    );
}

export default Universities;