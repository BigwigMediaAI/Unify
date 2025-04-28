import { useEffect, useState } from "react";

function Nav2() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full mx-auto z-50 transition-colors duration-300  ${
        isScrolled ? "bg-black shadow-md shadow-gray-400" : "bg-black"
      }`}
    >
      <div className="flex items-center md:w-11/12 justify-between p-4 md:px-16 relative ">
        <div className="flex items-center space-x-1 ml-5">
          <a href="/">
            <span className="text-red-400 text-2xl font-bold">U</span>
            <span className="text-blue-400 text-2xl font-bold">n</span>
            <span className="text-yellow-300 text-2xl font-bold">i</span>
            <span className="text-green-400 text-2xl font-bold">f</span>
            <span className="text-violet-400 text-2xl font-bold">y</span>
            <span className="text-teal-300 text-2xl font-bold">i</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav2;
