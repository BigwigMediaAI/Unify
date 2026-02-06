import React from "react";
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Business Owner",
    company: "Cafe Delight",
    text: "Unifyi transformed the way we handle student inquiries. With its efficient lead tracking and communication tools, we've seen a 30% increase in student enrollments in just 2 months!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Arjun Dixit",
    role: "Operations Manager",
    company: "Urban Stay Hotels",
    text: "Before using Unifyi, we struggled with managing the influx of student inquiries. Now, we can easily follow up with prospective students, resulting in more conversions and better engagement.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Head of Marketing",
    company: "RetailX",
    text: "The real-time analytics and student sentiment analysis from Unifyi have been game changers. We’ve gained valuable insights into prospective student needs, improving our overall enrollment",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "James Wilson",
    role: "Community Manager",
    company: "Local Eats",
    text: "Automated follow-ups and personalized messaging have made our student lead management more streamlined than ever. We've experienced significant growth in student enrollments this year.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const ImageSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="case"
      className="relative bg-black text-white py-20 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          What Our Partners Are Saying
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Info */}
          <div className="lg:w-1/4 text-center lg:text-left">
            <h3 className="text-xl font-semibold text-gray-100">
              CLIENT TESTIMONIALS
            </h3>

            <div className="flex items-center gap-3 mt-3 justify-center lg:justify-start">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-8"
              />
              <div>
                <p className="font-bold text-lg">Rated 4.8/5</p>
                <p className="text-gray-400 text-sm">250+ Google Reviews</p>
              </div>
            </div>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Don't just take our word for it. Here's what our clients say about
              their experience with Unifyi.
            </p>
          </div>

          {/* Slider */}
          <div className="lg:w-3/4 w-full">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-3">
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between min-h-[340px] hover:bg-white/10 transition">
                    <div>
                      <div className="flex justify-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-full w-20 h-20 object-cover border border-white/20"
                        />
                      </div>

                      <p className="text-sm italic text-gray-300 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
