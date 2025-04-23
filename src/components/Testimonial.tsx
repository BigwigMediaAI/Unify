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
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="case" className="bg-black text-white mb-10">
      <div className="w-11/12 mx-auto px-2 text-center py-4">
        <h2 className="text-5xl font-semibold mb-8">
          What Our Partners Are Saying
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-5">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-100">
              CLIENT TESTIMONIALS
            </h2>
            <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
              <div className="rounded-full p-2 text-gray-100 text-xl font-bold">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt=""
                  className="w-8"
                />
              </div>
              <div>
                <p className="font-bold text-lg text-gray-100">Rated 4.8/5</p>
                <p className="text-gray-400 text-sm">250+ Google Reviews</p>
              </div>
            </div>
            <p className="text-gray-400 mt-4">
              Don't just take our word for it. Here's what our clients have to
              say about their Unique experience.
            </p>
          </div>
          <div className="md:w-3/4 w-full">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  {" "}
                  {/* Add horizontal gap */}
                  <div className="p-6 rounded-lg bg-gray-800 h-[420px] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-full w-20 h-20 object-cover border-4 border-white"
                        />
                      </div>
                      <p className="text-md italic mb-4 text-gray-200">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">
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
