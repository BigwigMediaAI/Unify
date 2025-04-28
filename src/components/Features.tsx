import admission from "../assets/features/admission5.webp";
import application from "../assets/features/paidApplication.webp";
import lead from "../assets/features/lead-management.webp";
import conselor from "../assets/features/counselor.webp";
import student from "../assets/features/student panel.webp";
import admin from "../assets/features/admin panel.webp";
import vendor from "../assets/features/vendor.webp";
import document from "../assets/features/document (1).webp";
import communication from "../assets/features/communication.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  const featureData = [
    {
      title: "Admission Management",
      description:
        'Turn your chaotic admission process into a well-oiled SaaS platform. From applications to enrollments, centralize data and keep everyone in the loop with real-time updates—no more "Who dropped the ball?" moments.',
      listItems: [
        "Real-Time Updates",
        "Centralized Database",
        "Multi Channel Communication",
        "Admission Workflow Automation",
        "Payment Integration",
        "Reporting & Analytics",
        "Integration With External System",
        "Compliance & Security",
        "Document Management",
      ],
      imageUrl: admission,
      id: "admission-management",
    },
    {
      title: "Paid Application Management",
      description:
        "Say goodbye to payment confusion. With integrated payment systems, students can apply and pay in a snap, while you enjoy a smoother, less headachy process. Everyone wins!",
      listItems: [
        "Application Creation & Customization",
        "Payment Integration",
        "Fee Management",
        "Application Submission Workflow",
        "Applicant Tracking",
        "Centralized Dashboard for Administrator",
        "Reporting & Analytics",
        "Secure Document Upload",
        "Multilingual & Multicurrency Support",
        "Refund & Dispute Management",
        "Fraud Prevention & Security",
      ],
      imageUrl: application,
      id: "paid-application-management",
    },
    {
      title: "Lead Management",
      description:
        "Get a grip on your leads! Track where they’re coming from, how they’re scoring, and who’s converting—because guessing is so last year.",
      listItems: [
        "Lead Capture",
        "Centralized Lead Database",
        "Lead Tracking",
        "Communication & Engagement",
        "Automated Workflow Mangement",
        "Reporting & Analytics",
        "Mobile Accessibility",
        "Data Security & Compliance",
        "Event Management",
        "Integration With Social Media",
        "Notification & Reminders",
        "Scalibility & Flexibilty",
      ],
      imageUrl: lead,
      id: "lead-management",
    },
    {
      title: "Counselor Management",
      description:
        "Keep your counselors on their toes! Monitor performance, boost engagement, and make sure students and counselors are on the same page (finally).",
      listItems: [
        "Counselor Assignment",
        "Counselor Profiles",
        "Interaction Tracking",
        "Lead & Application Management",
        "Communication Tools",
        "Performance Analytics",
        "Customizable Workflows",
        "Secure Document Handling",
        "Data Security & Compliance",
      ],
      imageUrl: conselor,
      id: "counselor-management",
    },
    {
      title: "Student Panel",
      description:
        "Put the power in the hands of your students. With a one-stop-shop for communication, fees, and application updates, they’ll wonder how they ever survived without it.",
      listItems: [
        "Personalized Dashboard",
        "Academic Management",
        "Fee Management",
        "Communication & Notification",
        "Career & Placement Services",
        "Feedback & Surveys",
        "Student Support Service",
        "Event & Activities",
        "Mobile Accessibility",
      ],
      imageUrl: student,
      id: "student-panel",
    },
    {
      title: "Admin Panel",
      description:
        "Calling all admins! Run your institution like a boss with a panel that does it all—reports, staff monitoring, and admissions. It’s basically your command center.",
      listItems: [
        "Dashboard Overview",
        "Access Controls",
        "Data Downloads",
        "Academic Management",
        "Fee & Finance Management",
        "Communication & Notifications",
        "Document Management",
        "Report & Insight",
        "Data Backup & Recovery",
      ],
      imageUrl: admin,
      id: "admin-panel",
    },
    {
      title: "Vendor Management Panel",
      description:
        "Wrangle your vendors like a pro. Centralized communication and performance tracking mean better relationships and fewer headaches. Vendors will love you for it.",
      listItems: [
        "Vendor Onboarding",
        "Vendor Profile",
        "Centralized Messaging",
        "Vendor Performance Tracking",
        "Procurement Mangement",
        "Payment & Invoice Management",
        "Analytics & Reporting",
        "Role Based Access Control",
      ],
      imageUrl: vendor,
      id: "vendor-management-panel",
    },
    {
      title: "Document Verification",
      description:
        "Tired of playing detective with documents? Automate the verification process and catch those sneaky fake ones—no magnifying glass needed.",
      listItems: [
        "Document Upload & Collection",
        "Document Categorization",
        "AI Powered Validation",
        "Notification & Alert",
        "Document Status Tracking",
        "Security & Compliance",
        "Reporting & Analytics",
        "Multi Language Support",
        "User Friendly Interface",
      ],
      imageUrl: document,
      id: "document-verification",
    },
    {
      title: "Communication Management",
      description:
        "Email? WhatsApp? SMS? Keep your communication chaos-free by managing everything in one place. Schedule, automate, and track like the messaging wizard you are.",
      listItems: [
        "Centralized Messaging Platform",
        "Email/SMS Communication ",
        "Real Time Communication",
        "Automated Alert & Reminders",
        "Predefined Communication Templates",
        "Role Based Access Control",
        "Mobile Accessibiltiy",
        "Data Privacy & Security",
        "Survey & Feedback Management",
      ],
      imageUrl: communication,
      id: "communication-management",
    },
    {
      title: "Integration with CRM and Marketing Tools",
      description:
        "Sync your favorite tools like peanut butter and jelly. No more switching between tabs like you’re playing whack-a-mole. It’s all in one place, and your sanity thanks you.",
      listItems: [
        "CRM Synchronization",
        "Marketing Tool Integration",
        "Streamlined Workflow",
        "Enhanced Collaboration",
      ],
      imageUrl:
        "https://metroguild.com/wp-content/uploads/2023/08/feature-omnichannel-768x502.png",
      id: "Integration with CRM",
    },
  ];

  return (
    <div id="features" className="md:w-11/12 mx-auto px-4 py-16">
      <h2 className="text-5xl font-extrabold text-white text-center mb-10 tracking-tight">
        Our Services
      </h2>

      <div className="flex flex-col space-y-20">
        {featureData.map((feature, index) => (
          <div
            key={index}
            id={feature.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-12 md:gap-20`}
          >
            {/* Text Section */}
            <div
              className="w-full md:w-1/2"
              data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {feature.description}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                {feature.listItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-base"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div
                className="relative group"
                data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}
              >
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-80 md:w-96 max-w-full rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl bg-black opacity-0 group-hover:opacity-10 transition duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
