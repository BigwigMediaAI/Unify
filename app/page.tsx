"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import AOS from "aos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import SiteFooter from "./components/SiteFooter";
import SiteNavbar, { type NavItem } from "./components/SiteNavbar";
import heroImage from "./assets/unify.png";
import admissionVisual from "./assets/Admission.svg";
import aboutImage from "./assets/ABOUT (1).png";
import featureAdmission from "./assets/features/admission5.webp";
import featureApplication from "./assets/features/paidApplication.webp";
import featureLead from "./assets/features/lead-management.webp";
import featureCounselor from "./assets/features/counselor.webp";
import featureStudent from "./assets/features/student.webp";
import featureAdmin from "./assets/features/admin.webp";
import featureVendor from "./assets/features/vendor.webp";
import featureDocument from "./assets/features/document.webp";
import featureCommunication from "./assets/features/communication.webp";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Platform", href: "#platform" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const outcomes = [
  {
    title: "Improved conversion rates",
    description:
      "By qualifying and nurturing leads, your sales team can focus on leads with the highest potential and increase student conversions.",
  },
  {
    title: "Enhanced student relationships",
    description:
      "Personalized communication and timely follow-ups help build strong long-term student relationships.",
  },
  {
    title: "Increased efficiency",
    description:
      "AI automation reduces manual work, eliminates errors, and improves operational productivity.",
  },
  {
    title: "Better decision-making",
    description:
      "Data insights help you make smarter marketing and admission decisions backed by analytics.",
  },
];

const stats = [
  { value: "20M+", label: "Student engagements powered annually" },
  { value: "4L+", label: "Applications managed annually" },
  { value: "4M+", label: "Inquiries processed annually" },
  { value: "2000+", label: "Business users across departments" },
  { value: "100+", label: "Education organizations trust Unify" },
];

const services = [
  {
    title: "Admission Management",
    description:
      "Turn your chaotic admission process into a well-oiled SaaS platform. From applications to enrollments, centralize data and keep everyone in the loop with real-time updates.",
    imageUrl: featureAdmission.src,
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
  },
  {
    title: "Paid Application Management",
    description:
      "Integrated payment systems help students apply and pay quickly while your team gets a smoother application workflow.",
    imageUrl: featureApplication.src,
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
  },
  {
    title: "Lead Management",
    description:
      "Track where leads come from, how they are scoring, and who is converting so your team can prioritize better.",
    imageUrl: featureLead.src,
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
  },
  {
    title: "Counselor Management",
    description:
      "Monitor performance, boost engagement, and keep students and counselors on the same page with structured workflows.",
    imageUrl: featureCounselor.src,
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
  },
  {
    title: "Student Panel",
    description:
      "Give students one simple place for communication, fees, updates, feedback, support, events, and academic visibility.",
    imageUrl: featureStudent.src,
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
  },
  {
    title: "Admin Panel",
    description:
      "Run your institution from a focused command center for reports, staff monitoring, admissions, access controls, and backups.",
    imageUrl: featureAdmin.src,
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
  },
  {
    title: "Vendor Management Panel",
    description:
      "Centralize vendor onboarding, communication, procurement, invoices, access control, and performance tracking.",
    imageUrl: featureVendor.src,
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
  },
  {
    title: "Document Verification",
    description:
      "Automate document upload, categorization, status tracking, and AI-powered validation with secure workflows.",
    imageUrl: featureDocument.src,
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
  },
  {
    title: "Communication Management",
    description:
      "Manage email, SMS, alerts, reminders, templates, privacy, and feedback communication from one place.",
    imageUrl: featureCommunication.src,
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
  },
  {
    title: "Integration with CRM and Marketing Tools",
    description:
      "Sync your favorite CRM and marketing tools into one workflow to reduce tab switching and improve team collaboration.",
    imageUrl:
      "https://metroguild.com/wp-content/uploads/2023/08/feature-omnichannel-768x502.png",
    listItems: [
      "CRM Synchronization",
      "Marketing Tool Integration",
      "Streamlined Workflow",
      "Enhanced Collaboration",
    ],
  },
];

const testimonials = [
  {
    name: "Emily Carter",
    role: "Business Owner",
    company: "Cafe Delight",
    text: "Unifyi transformed the way we handle student inquiries. We have seen a 30% increase in student enrollments in just 2 months.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Arjun Dixit",
    role: "Operations Manager",
    company: "Urban Stay Hotels",
    text: "Before using Unifyi, we struggled with inquiry volume. Now we can follow up with prospective students and convert faster.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Head of Marketing",
    company: "RetailX",
    text: "The real-time analytics and student sentiment analysis from Unifyi have been game changers for our enrollment team.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

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

const logos = [
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2025/02/Coursera.png",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2025/09/srm-logo.jpg",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2025/12/aadha.jpg",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2025/12/mit.jpg",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2025/11/gmac-by-namt-logo.jpg",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2024/04/VMC-Classes.jpg",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2022/07/XLRI.png",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2023/02/physics-wallah.png",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2025/12/bits.jpg",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2025/12/iimb.jpg",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2024/09/American-University-in-th-Emirates.png",
  "https://dzcu0rfa3nwu9.cloudfront.net/wp-content/uploads/2025/12/kalinga-institue.jpg",
];

const contactDetails = [
  {
    label: "Phone",
    value: "+91 83685 73451",
    note: "Mon to Sat, 10:30 AM - 7:30 PM",
    href: "tel:+919876543210",
  },
  {
    label: "Email",
    value: "vipul@bigwigmedia.in",
    note: "For product demos and support",
    href: "mailto:vipul@bigwigmedia.in",
  },
  {
    label: "Address",
    value: "Bigwig Media, Delhi, India",
    note: "Available for institution visits",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: "easeOut" },
  },
};

export default function Home() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const heroVisualRef = useRef<HTMLDivElement | null>(null);
  const [activeService, setActiveService] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -72]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".gsap-marquee", {
        xPercent: -50,
        repeat: -1,
        duration: 24,
        ease: "none",
      });

      AOS.init({
        duration: 900,
        once: true,
        offset: 120,
        easing: "ease-out-cubic",
        delay: 80,
      });

      const servicesTrack =
        document.querySelector<HTMLElement>(".services-track");

      const servicesScene =
        document.querySelector<HTMLElement>(".services-scene");

      if (servicesTrack && servicesScene) {
        const getScrollAmount = () =>
          Math.max(0, servicesTrack.scrollWidth - window.innerWidth);

        gsap.to(servicesTrack, {
          x: () => -getScrollAmount(),
          ease: "none",

          scrollTrigger: {
            trigger: servicesScene,
            start: "top top",

            end: () => `+=${getScrollAmount()}`,

            scrub: 1,
            pin: true,

            invalidateOnRefresh: true,

            onUpdate: (self) => {
              const index = Math.min(
                services.length - 1,
                Math.round(self.progress * (services.length - 1)),
              );

              setActiveService(index);
            },
          },
        });
      }

      if (heroVisualRef.current) {
        gsap.to(heroVisualRef.current, {
          y: -10,
          duration: 3.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToSection = (href: string) => {
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#030711] text-slate-100"
    >
      <SiteNavbar items={navItems} onNavigate={scrollToSection} />

      <motion.section
        id="home"
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:pt-36"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(45,212,191,0.16),transparent_26%),radial-gradient(circle_at_86%_12%,rgba(255,122,89,0.16),transparent_30%),linear-gradient(135deg,#02050b_0%,#060c16_60%,#08131e_100%)]" />
        <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute bottom-10 right-0 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />
        <div className="absolute left-10 top-24 hidden h-40 w-40 rounded-full bg-cyan-300/10 blur-[80px] lg:block" />
        <div className="absolute right-10 top-40 hidden h-32 w-32 rounded-full bg-orange-400/10 blur-[80px] lg:block" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[720px] lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            data-aos="fade-right"
            className="max-w-2xl"
          >
            <motion.p
              variants={item}
              className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-200 shadow-[0_10px_30px_rgba(45,212,191,0.16)]"
            >
              Empowering Educational Institutions
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-black leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-6xl"
            >
              Streamline leads, applications and admissions with AI.
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              Unifyi transforms your institution into an operational powerhouse.
              From applicant tracking to vendor management and admissions, our
              AI-powered platform optimizes workflows, improves communication,
              and boosts conversion rates.
            </motion.p>
            <motion.div
              variants={item}
              data-aos="fade-up"
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={() => scrollToSection("#contact")}
                className="rounded-2xl bg-[#ff7a59] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(255,122,89,0.25)] transition hover:-translate-y-1 hover:bg-[#f56a45]"
              >
                Contact Us
              </button>
              <button
                onClick={() => scrollToSection("#services")}
                className="rounded-2xl border border-white/10 bg-white/8 px-6 py-3.5 text-sm font-bold text-slate-200 transition hover:-translate-y-1 hover:bg-white/12"
              >
                Explore Services
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: heroY }}
            className="relative"
            data-aos="fade-left"
          >
            <div
              ref={heroVisualRef}
              className="relative rounded-[2rem] border border-white/10 bg-[#08111d] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            >
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0d1723]">
                <Image
                  src={heroImage}
                  alt="Unifyi dashboard preview"
                  priority
                  className="h-auto w-full"
                />
              </div>
              <div className="relative -mt-8 mx-4 grid gap-3 rounded-[1.25rem] border border-white/10 bg-[#0b141d]/95 p-4 shadow-2xl backdrop-blur sm:grid-cols-3">
                {stats.slice(0, 3).map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-3"
                  >
                    <p className="text-xl font-black text-[#ff9a76]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="overflow-hidden border-y border-white/10 bg-[#07111c] py-5">
        <div className="gsap-marquee flex w-max items-center gap-12 whitespace-nowrap px-6">
          {logos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-[70px] w-[150px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white p-3"
            >
              <Image
                src={logo}
                alt={`Trusted partner ${index + 1}`}
                width={140}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <motion.section
        id="platform"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="relative overflow-hidden bg-[#050b12] px-5 py-20 sm:px-8"
      >
        <div className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-gradient-to-t from-[#02050a] to-transparent" />
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <motion.div variants={item}>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff9a76]">
                Platform outcomes
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                UNIFYI - Breathing life into admission management
              </h2>
            </motion.div>
            <motion.p
              variants={item}
              className="text-base leading-8 text-slate-400"
            >
              We are a global enrollment platform designed to equip institutions
              for growth with centralized admissions, lead intelligence,
              automation, and analytics.
            </motion.p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((outcome, index) => (
              <motion.article
                key={outcome.title}
                variants={item}
                data-aos="fade-up"
                className="rounded-[1.5rem] border border-white/10 bg-[#09111b]/95 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur"
                transition={{ duration: 0.55, delay: index * 0.05 }}
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-400/10 text-sm font-black text-cyan-300">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-black text-white">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {outcome.description}
                </p>
              </motion.article>
            ))}
          </div>

          <div
            className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#08111d] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
            data-aos="zoom-in"
          >
            <Image
              src={admissionVisual}
              alt="Admission management workflow"
              className="mx-auto h-auto w-full max-w-5xl rounded-[1.5rem] bg-[#0b1724] p-4"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-[#07111c] px-5 py-16 text-white sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        data-aos="fade-up"
      >
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              variants={item}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              data-aos="fade-up"
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
            >
              <p className="text-3xl font-black text-[#f3c969]">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section
        id="services"
        className="
    services-scene
    relative
    h-screen
    overflow-hidden
    bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.14),transparent_45%),#030711]
  "
      >
        <div className="flex h-full flex-col overflow-hidden px-4 pb-4 pt-4 sm:px-6 sm:pb-5 sm:pt-5 lg:px-10 lg:pb-8 lg:pt-6">
          {/* ================= HEADER ================= */}
          <div className="mx-auto w-full max-w-7xl shrink-0">
            <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
              {/* LEFT HEADING */}
              <div className="max-w-2xl">
                <p className="text-2xl font-black uppercase tracking-[0.2em] text-cyan-200 ">
                  Our Services
                </p>
              </div>

              {/* ================= PROGRESS ================= */}
              <div className="w-full max-w-sm rounded-[1rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur sm:rounded-[1.25rem] sm:p-4">
                <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.12em] text-slate-400 sm:text-xs sm:tracking-[0.16em]">
                  <span className="min-w-0 truncate">
                    {services[activeService].title}
                  </span>

                  <span className="shrink-0">
                    {String(activeService + 1).padStart(2, "0")}/
                    {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10 sm:mt-3 sm:h-2">
                  <div
                    style={{
                      width: `${Math.max(
                        8,
                        ((activeService + 1) / services.length) * 100,
                      )}%`,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-amber-300 to-[#ff7a59] transition-[width] duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARDS AREA ================= */}
          <div className="mt-3 min-h-0 flex-1 sm:mt-4 lg:mt-5">
            <div className="services-track flex h-full w-max items-center gap-4 px-[5vw] sm:gap-5 lg:gap-7 lg:px-[6vw]">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="
              group
              flex
              h-full
              max-h-[600px]
              w-[90vw]
              max-w-[500px]
              shrink-0
              flex-col
              overflow-hidden
              rounded-[1.4rem]
              border
              border-white/10
              bg-[#08111d]
              shadow-[0_28px_90px_rgba(0,0,0,0.38)]

              sm:w-[82vw]
              sm:max-w-[650px]
              sm:rounded-[1.6rem]

              lg:grid
              lg:h-[430px]
              lg:w-[88vw]
              lg:max-w-[980px]
              lg:grid-cols-[43%_57%]
              lg:rounded-[1.8rem]
            "
                >
                  {/* ================= IMAGE ================= */}
                  <div
                    className="
                relative
                h-[160px]
                shrink-0
                overflow-hidden
                bg-[#101b27]
                p-3

                sm:h-[190px]
                sm:p-4

                lg:h-auto
                lg:min-h-0
              "
                  >
                    {/* GLOW */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(45,212,191,0.20),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.16),transparent_32%)]" />

                    {/* IMAGE */}
                    <div
                      role="img"
                      aria-label={service.title}
                      className="
                  relative
                  h-full
                  w-full
                  rounded-[1rem]
                  border
                  border-white/10
                  bg-contain
                  bg-center
                  bg-no-repeat
                  transition-transform
                  duration-500

                  sm:rounded-[1.2rem]
                  lg:rounded-[1.35rem]

                  group-hover:scale-[1.02]
                "
                      style={{
                        backgroundImage: `url(${service.imageUrl})`,
                      }}
                    />
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div
                    className="
                flex
                min-h-0
                flex-1
                flex-col
                border-t
                border-white/10
                px-4
                py-3

                sm:px-5
                sm:py-4

                lg:justify-center
                lg:border-l
                lg:border-t-0
                lg:px-7
                lg:py-6
              "
                  >
                    {/* NUMBER */}
                    <div className="flex shrink-0 items-center justify-between">
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff9a76] sm:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.7)] sm:h-2.5 sm:w-2.5" />
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-2 shrink-0 text-xl font-black leading-[1.1] text-white sm:text-2xl lg:mt-3 lg:text-[28px]">
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-2 shrink-0 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6 lg:mt-3">
                      {service.description}
                    </p>

                    {/* DIVIDER */}
                    <div className="my-2.5 h-px w-full shrink-0 bg-white/10 sm:my-3 lg:my-4" />

                    {/* KEY FEATURES */}
                    <p className="shrink-0 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 sm:text-[10px]">
                      Key Features
                    </p>

                    {/* ================= FEATURES GRID ================= */}
                    <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 sm:mt-3 sm:gap-x-5 sm:gap-y-2 lg:gap-y-2.5">
                      {service.listItems.map((listItem) => (
                        <div
                          key={listItem}
                          className="flex min-w-0 items-start gap-1.5 sm:gap-2"
                        >
                          {/* DOT */}
                          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-cyan-300 sm:h-1.5 sm:w-1.5" />

                          {/* TEXT */}
                          <span className="text-[10px] font-semibold leading-4 text-slate-300 sm:text-xs sm:leading-5">
                            {listItem}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="lead-management"
        className="bg-[#061018] px-5 py-16 sm:px-8"
        aria-label="CRM and Analytics Features"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div data-aos="fade-right">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff9a76]">
                CRM & Business Insights
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Manage leads. Track performance. Grow smarter.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                A centralized CRM and analytics system designed to manage your
                sales pipeline, monitor website performance, and track your
                Google Business presence — all from one powerful dashboard.
              </p>

              <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
                <li>
                  <strong className="text-white">Lead CRM & Assignment:</strong>{" "}
                  Capture and manage inquiries, assign leads to employees, track
                  assigned and unassigned leads, and keep your sales pipeline
                  organized.
                </li>

                <li>
                  <strong className="text-white">
                    Lead Status & Follow-ups:
                  </strong>{" "}
                  Mark important leads, track follow-ups, manage interested and
                  non-interested prospects, and monitor every lead from a single
                  dashboard.
                </li>

                <li>
                  <strong className="text-white">
                    Smart Search, Filters & Data Control:
                  </strong>{" "}
                  Quickly find leads using search and filters, manage lead
                  records, and import or export data whenever required.
                </li>

                <li>
                  <strong className="text-white">Website Analytics:</strong>{" "}
                  Monitor total users, real-time visitors, sessions, page views,
                  engagement rate, bounce rate, traffic sources, devices,
                  browsers, countries, cities, and top-performing pages.
                </li>

                <li>
                  <strong className="text-white">
                    Conversion & Lead Analytics:
                  </strong>{" "}
                  Understand how website traffic converts into leads with
                  conversion rates, lead sources, visitor trends, and
                  performance insights.
                </li>

                <li>
                  <strong className="text-white">
                    Google Business Insights:
                  </strong>{" "}
                  Monitor Google Business reviews, average ratings, rating
                  distribution, profile performance, ranking insights,
                  competitors, and customer sentiment from one place.
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="rounded-2xl bg-[#ff7a59] px-5 py-2.5 text-sm font-bold text-white"
                >
                  Request Demo
                </button>

                <button
                  onClick={() => scrollToSection("#services")}
                  className="rounded-2xl border border-white/10 px-5 py-2.5 text-sm text-white"
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* Visual */}
            <div
              data-aos="zoom-in"
              className="rounded-[1.5rem] border border-white/10 bg-[#08111d] p-4"
            >
              <Image
                src="/lead.png"
                alt="CRM lead management and business analytics dashboard"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[1rem]"
              />

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Get complete visibility into your leads, website performance,
                and Google Business presence through centralized dashboards and
                actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#061018] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div data-aos="fade-right">
            <p className="text-3xl m:text-4xl font-black uppercase tracking-[0.2em] text-[#ff9a76]">
              About Us
            </p>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-400">
              <p>
                Ever wondered what you would get if you crossed a digital
                advertising agency with Artificial Intelligence & Machine
                Learning? Meet BIGWIG MEDIA, an AI-powered force redefining the
                digital landscape with innovation, creativity, and precision.
              </p>
              <p>
                We blend proprietary AI technology, marketing mastery, and
                advanced analytics to build systems that do not just perform,
                they dominate. Our mission is simple: help institutions grow
                faster, smarter, and more efficiently.
              </p>
              <p>
                We are architects of digital evolution, pushing boundaries and
                shaping the future of intelligent automation.
              </p>
            </div>
            <button
              onClick={() => scrollToSection("#contact")}
              className="mt-7 rounded-2xl bg-[#ff7a59] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#f56a45]"
            >
              Contact Us
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            data-aos="zoom-in"
            className="rounded-[2rem] border border-white/10 bg-[#08111d] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
          >
            <Image
              src={aboutImage}
              alt="About Unifyi"
              className="h-auto w-full rounded-[1.35rem]"
            />
          </motion.div>
        </div>
      </section>

      <section id="case" className="bg-[#050b12] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Client Testimonials
              </p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                What our partners are saying
              </h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-black text-slate-300 shadow-sm">
              Rated 4.8/5 - 250+ Google Reviews
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                data-aos="fade-up"
                className="rounded-[1.6rem] border border-white/10 bg-[#09111b] p-6 shadow-[0_16px_44px_rgba(0,0,0,0.28)]"
              >
                <p className="text-sm leading-7 text-slate-400">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <div
                    role="img"
                    aria-label={testimonial.name}
                    className="h-14 w-14 rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div>
                    <p className="font-black text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        id="faq"
        className="bg-[#07111c] px-5 py-20 text-white sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div variants={item}>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f3c969]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Got questions? We have got answers.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/65">
              Everything you need to know about Unifyi, from integrations and
              security to onboarding and analytics.
            </p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                data-aos="fade-up"
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-black sm:text-base"
                >
                  {faq.question}
                  <span className="text-xl">
                    {activeFaq === index ? "-" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-6 text-white/65">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="bg-[#030711] px-5 py-20 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#0b1118]/80 to-transparent" />
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#08111d] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div variants={item} data-aos="fade-right">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff9a76]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Move your admission team into a smarter workflow.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400">
                Reach us directly for demos, onboarding, integrations, and
                support.
              </p>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-3">
              {contactDetails.map((detail, index) => (
                <motion.article
                  key={detail.label}
                  variants={item}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  data-aos="fade-up"
                  className="rounded-[1.3rem] border border-white/10 bg-white/[0.05] p-5"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-4 block text-base font-black leading-7 text-white hover:text-[#ff9a76]"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-4 text-base font-black leading-7 text-white">
                      {detail.value}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {detail.note}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <SiteFooter items={navItems} />
    </main>
  );
}
