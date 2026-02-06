import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const features = [
    { name: "Admission Management", id: "admission-management" },
    { name: "Paid Application Management", id: "paid-application-management" },
    { name: "Lead Management", id: "lead-management" },
    { name: "Counselor Management", id: "counselor-management" },
    { name: "Student Panel", id: "student-panel" },
    { name: "Admin Panel", id: "admin-panel" },
    { name: "Vendor Management Panel", id: "vendor-management-panel" },
    { name: "Document Verification", id: "document-verification" },
    { name: "Communication Management", id: "communication-management" },
    { name: "Integration with CRM", id: "Integration with CRM" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    setIsDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black border-b border-white/20 shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between p-4 md:px-10 relative">
        {/* Logo */}
        <div className="flex items-center space-x-1 ml-5">
          <a href="/" className="text-2xl font-extrabold tracking-wide">
            <span className="text-red-400">U</span>
            <span className="text-blue-400">n</span>
            <span className="text-yellow-300">i</span>
            <span className="text-green-400">f</span>
            <span className="text-violet-400">y</span>
            <span className="text-teal-300">i</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:scale-110 transition-transform duration-200 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-semibold">
          {["home", "about", "blog", "faq"].map((item) => (
            <button
              key={item}
              onClick={() => handleScrollToSection(item)}
              className="relative group"
            >
              {item.toUpperCase()}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* Features Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => {
              setTimeout(() => setIsDropdownOpen(false), 150);
            }}
          >
            <button className="flex items-center gap-1 group">
              FEATURES
              <svg
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div
                className="absolute left-[-100px] top-full pt-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6 grid grid-cols-3 gap-4 w-[620px]"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => handleScrollToSection(feature.id)}
                    className="text-sm text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    {feature.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => window.open("/team", "_blank")}
            className="relative group"
          >
            TEAM
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-200"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Glass Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-40" />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6 flex flex-col space-y-4 z-50 w-[90%] max-w-sm text-white animate-slideIn">
          {["home", "about", "blog", "faq"].map((item) => (
            <button
              key={item}
              onClick={() => handleScrollToSection(item)}
              className="hover:translate-x-1 transition"
            >
              {item.toUpperCase()}
            </button>
          ))}

          <button
            onClick={() => window.open("/team", "_blank")}
            className="hover:translate-x-1 transition"
          >
            TEAM
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="mt-3 w-full bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2 rounded-xl shadow-md hover:scale-105 transition"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
