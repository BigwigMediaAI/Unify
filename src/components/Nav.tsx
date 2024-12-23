import { useState, useEffect } from 'react';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (id:any) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; // Adjust this value for the desired offset
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    setIsDropdownOpen(false); // Close dropdown after clicking
    setIsOpen(false)
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-between p-4 md:px-10 relative">
        <div className="flex items-center space-x-1 ml-5">
          <span className="text-red-500 text-2xl font-bold">U</span>
          <span className="text-blue-500 text-2xl font-bold">n</span>
          <span className="text-yellow-500 text-2xl font-bold">i</span>
          <span className="text-green-500 text-2xl font-bold">f</span>
          <span className="text-violet-700 text-2xl font-bold">y</span>
        </div>

        <button
          className="md:hidden text-gray-600 hover:text-black focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        <div className="hidden md:flex gap-8 space-x-6 text-gray-600">
          <button onClick={() => handleScrollToSection('home')} className="hover:text-black">
            Home
          </button>
          <div
  className="relative"
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
  {/* Features Button with Dropdown Icon */}
  <button className="hover:text-black flex items-center">
    Features
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-4 h-4 ml-1 transition-transform duration-200"
      style={{
        transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Dropdown Menu */}
  {isDropdownOpen && (
    <div className="absolute left-[-100px] bg-white shadow-lg rounded-lg p-4 grid grid-cols-3 gap-4 w-[600px] h-[300px] z-50">
      {features.map((feature, index) => (
        <button
          key={index}
          onClick={() => handleScrollToSection(feature.id)}
          className="text-gray-600 hover:text-black text-sm"
        >
          {feature.name}
        </button>
      ))}
    </div>
  )}
</div>

          <button onClick={() => handleScrollToSection('about')} className="hover:text-black">
            About Us
          </button>
          <button onClick={() => handleScrollToSection('blog')} className="hover:text-black">
            Blogs
          </button>
        </div>

        <div className="md:block hidden">
          <button
            onClick={() => handleScrollToSection('faq')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none"
          >
            FAQ
          </button>
        </div>
      </div>

      {/* Overlay for Darkening/Blur Effect */}
    {isOpen && (
      <div className="fixed inset-0 top-20 right-0 bg-black bg-opacity-70 z-40" /> // z-40 ensures overlay is behind the dropdown
    )}

      {isOpen && (
        <div className="absolute top-14 right-0 bg-white shadow-lg rounded-md p-4 flex flex-col space-y-4 z-50 h-[30vh] w-full max-w-md">
          <button onClick={() => handleScrollToSection('home')} className="hover:text-black">
            Home
          </button>
          <button onClick={() => handleScrollToSection('features')} className="hover:text-black">
            Features
          </button>
          <button onClick={() => handleScrollToSection('about')} className="hover:text-black">
            About Us
          </button>
          <button onClick={() => handleScrollToSection('blog')} className="hover:text-black">
            Blogs
          </button>
          <button
            onClick={() => handleScrollToSection('faq')}
            className="w-1/2 mx-auto block text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg focus:outline-none text-lg sm:text-xl shadow-md"
          >
            FAQ
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
