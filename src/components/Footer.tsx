import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 ">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Contact Section */}
          <div className="space-y-7 md:w-1/4">
            <div className="flex items-center space-x-1">
              <span className="text-red-500 text-3xl font-bold">U</span>
              <span className="text-blue-500 text-3xl font-bold">n</span>
              <span className="text-yellow-500 text-3xl font-bold">i</span>
              <span className="text-green-500 text-3xl font-bold">f</span>
              <span className="text-black text-3xl font-bold">y</span>
            </div>
            <div>
            <p className="text-md text-gray-600">+91-11 49 384 555</p>
            <a href="mailto:info@bigwigmedia.in" className="text-md text-gray-600">info@bigwigmedia.in</a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://x.com/bigwig_media" target='blank' className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-twitter fa-2xl"></i>
              </a>
              <a href="https://www.facebook.com/bigwigmedia.in/" target='blank' className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-facebook fa-2xl"></i>
              </a>
              <a href="https://www.instagram.com/bigwigmedia/" target='blank' className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-instagram fa-2xl"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCA0GIfKW7ORxUT6_mMnEEzQ" target='blank' className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-youtube fa-2xl"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-2/3">
            {/* Product Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Product</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:underline">Enrollment Cloud</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Education CRM</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Application Platform</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Payment Cloud</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Echo</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Niaa - The Education Chatbot</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Mobile App</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Admission Management Software</a></li>
              </ul>
            </div>

            {/* Industry Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Industries</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:underline">EdTech</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Coaching & Training Institutes</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">K12 Schools</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Preschool & Play Schools</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Online Degree Programmes</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Higher Education</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Study Abroad Consultants</a></li>
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Community</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:underline">Academy by unify</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Illuminate by unify</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Insights by unify</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Founders Table</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Videos</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Quick Reads</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Enrollmics by unify</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Company</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:underline">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Our Partners</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Success Stories</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Career</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Media Kit</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Security & Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t pt-4">
          <p className="text-sm text-gray-600">
          All Rights Reserved © 2024 Bigwigmedia & Events Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
