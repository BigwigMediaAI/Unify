import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer2() {
  return (
    <div>
      <div className="md:w-11/12 px-6 py-6 mx-auto border-gray-500 pt-6 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Social Links */}
        <div className="flex space-x-4">
          {[
            {
              icon: faFacebookF,
              href: "https://www.facebook.com/profile.php?id=61575340735142",
            },
            {
              icon: faInstagram,
              href: "https://www.instagram.com/bigwigdigital/",
            },
            {
              icon: faYoutube,
              href: "https://www.youtube.com/@BigwigDigital2024",
            },
            {
              icon: faXTwitter,
              href: "https://x.com/bigwig_digital",
            },
            {
              icon: faLinkedin,
              href: "https://www.linkedin.com/company/bigwig-digital/",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-600 transition"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            Made with <span className="text-red-500 text-lg">♥</span> by Unifyi
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          © 2025 bigwigmedia. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer2;
