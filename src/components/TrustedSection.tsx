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

const TrustedSection = () => {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <div className="flex items-center justify-center gap-6 mb-14">
          <div className="flex-1 h-px bg-white/10" />
          <p className="text-gray-400 text-sm md:text-lg whitespace-nowrap">
            Trusted and ❤️ by over{" "}
            <span className="text-white font-semibold">
              1000+ institutions worldwide
            </span>
          </p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-center items-center group">
              <img
                src={logo}
                alt="partner"
                className="h-10 object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
