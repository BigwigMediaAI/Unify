import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Social Media Icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const handleScrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="md:w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Branding Section */}
          <div className="space-y-4">
            <span className="text-red-500 text-2xl font-bold">U</span>
            <span className="text-blue-500 text-2xl font-bold">n</span>
            <span className="text-yellow-500 text-2xl font-bold">i</span>
            <span className="text-green-500 text-2xl font-bold">f</span>
            <span className="text-violet-700 text-2xl font-bold">y</span>
            <span className="text-teal-700 text-2xl font-bold">i</span>
            <p className="text-md text-gray-400 text-justify ">
              The most preferred platform for leads to admission management.
              Simplify your processes and enhance the student enrollment
              experience with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <button
                  onClick={() => handleScrollToSection("home")}
                  className="text-gray-400 hover:text-white"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("about")}
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("features")}
                  className="text-gray-400 hover:text-white"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("blog")}
                  className="text-gray-400 hover:text-white"
                >
                  Blogs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Resources
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <button
                  onClick={() => handleScrollToSection("case")}
                  className="text-gray-400 hover:text-white"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("faq")}
                  className="text-gray-400 hover:text-white"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Contact Info
            </h3>
            <ul className="space-y-2 text-center">
              <li className="text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                info@bigwigmedia.in
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <a
            href="https://www.facebook.com/profile.php?id=61575340735142"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="h-8 w-8 text-blue-600 hover:text-blue-700"
            />
          </a>
          <a href="https://www.instagram.com/bigwigdigital/" target="blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-8 w-8 text-pink-600 hover:text-pink-700"
            />
          </a>
          <a href="https://x.com/bigwig_digital" target="blank">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="h-8 w-8 text-blue-400 hover:text-blue-500"
            />
          </a>
          <a href="https://www.youtube.com/@BigwigDigital2024" target="blank">
            <FontAwesomeIcon
              icon={faYoutube}
              className="h-8 w-8 text-red-700 hover:text-red-800"
            />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2025 Bigwig Media. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
