import admission from '../assets/features/admission5.webp';
import application from "../assets/features/paidApplication.webp";
import lead from "../assets/features/lead-management.webp";
import conselor from "../assets/features/counselor.webp";
import student from "../assets/features/student panel.webp";
import admin from "../assets/features/admin panel.webp";
import vendor from "../assets/features/vendor.webp";
import document from "../assets/features/document (1).webp";
import communication from '../assets/features/communication.webp';

function Features() {
  const featureData = [
    {
      title: "Admission Management",
      description:
        "Turn your chaotic admission process into a well-oiled machine. From applications to enrollments, centralize data and keep everyone in the loop with real-time updates—no more \"Who dropped the ball?\" moments.",
      listItems: [
        "Real-Time Updates",
        "Data Centralization",
        "Improved Tracking",
        "Seamless Workflow",
      ],
      imageUrl: admission,
      id: "admission-management",
    },
    {
      title: "Paid Application Management",
      description:
        "Say goodbye to payment confusion. With integrated payment systems, students can apply and pay in a snap, while you enjoy a smoother, less headachy process. Everyone wins!",
      listItems: [
        "Integrated Payment",
        "Simple User Flow",
        "Payment Confirmation",
        "Transparency in Payment Process",
      ],
      imageUrl: application,
      id: "paid-application-management",
    },
    {
      title: "Lead Management",
      description:
        "Get a grip on your leads! Track where they’re coming from, how they’re scoring, and who’s converting—because guessing is so last year.",
      listItems: [
        "Lead Source Tracking",
        "Lead Scoring",
        "Performance Monitoring",
        "Conversion Optimisation",
      ],
      imageUrl: lead,
      id: "lead-management",
    },
    {
      title: "Counselor Management",
      description:
        "Keep your counselors on their toes! Monitor performance, boost engagement, and make sure students and counselors are on the same page (finally).",
      listItems: [
        "Counselor Performance Tracking",
        "Improved Engagement",
        "Centralised Communication",
        "Real-Time Insights",
      ],
      imageUrl: conselor,
      id: "counselor-management",
    },
    {
      title: "Student Panel",
      description:
        "Put the power in the hands of your students. With a one-stop-shop for communication, fees, and application updates, they’ll wonder how they ever survived without it.",
      listItems: [
        "Communication Hub",
        "Application Scoring",
        "Fee Management",
        "Call History",
      ],
      imageUrl: student,
      id: "student-panel",
    },
    {
      title: "Admin Panel",
      description:
        "Calling all admins! Run your institution like a boss with a panel that does it all—reports, staff monitoring, and admissions. It’s basically your command center.",
      listItems: [
        "Institution-wide Control",
        "Reports and Analytics",
        "Staff Monitoring",
        "Real-Time Performance Tracking",
      ],
      imageUrl: admin,
      id: "admin-panel",
    },
    {
      title: "Vendor Management Panel",
      description:
        "Wrangle your vendors like a pro. Centralized communication and performance tracking mean better relationships and fewer headaches. Vendors will love you for it (probably).",
      listItems: [
        "Vendor Performance Tracking",
        "Streamlined Relationships",
        "Centralized Communication",
        "Improved Collaboration",
      ],
      imageUrl: vendor,
      id: "vendor-management-panel",
    },
    {
      title: "Document Verification",
      description:
        "Tired of playing detective with documents? Automate the verification process and catch those sneaky fake ones—no magnifying glass needed.",
      listItems: [
        "Automated Verification",
        "Secure Document Handling",
        "Compliance Monitoring",
        "Authenticity Checks",
      ],
      imageUrl: document,
      id: "document-verification",
    },
    {
      title: "Communication Management",
      description:
        "Email? WhatsApp? SMS? Keep your communication chaos-free by managing everything in one place. Schedule, automate, and track like the messaging wizard you are.",
      listItems: [
        "Centralized Communication",
        "Multi-Channel Support",
        "Scheduling & Automation",
        "Tracking and Reporting",
      ],
      imageUrl: communication,
      id: "communication-management",
    },
  ];
  

  return (
    <div id="features" className="py-16 px-8 sm:px-12">
      {featureData.map((feature, index) => (
        <div
          key={index}
          id={feature.id}
          className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-8 mt-${index === 0 ? 0 : 16} mt-10`}
        >
          {/* Feature */}
          <div className={index % 2 === 0 ? "" : "order-1 md:order-2"}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight transition-colors duration-300">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">{feature.description}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              {feature.listItems.map((item, i) => (
                <ul key={i} className=" transition-colors duration-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500 text-xl">✔</span> {item}
                  </li>
                </ul>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center mb-10 md:mb-4 order-2 md:order-1">
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-96 max-w-md md:max-w-lg transition-transform duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
