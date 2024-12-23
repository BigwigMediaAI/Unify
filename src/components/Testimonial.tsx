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
    image: "https://randomuser.me/api/portraits/women/3.jpg", // Image 1
  },
  {
    name: "Arjun Dixit",
    role: "Operations Manager",
    company: "Urban Stay Hotels",
    text: "Before using Unifyi, we struggled with managing the influx of student inquiries. Now, we can easily follow up with prospective students, resulting in more conversions and better engagement.",
    image: "https://randomuser.me/api/portraits/men/5.jpg", // Image 2
  },
  {
    name: "Sophia Martinez",
    role: "Head of Marketing",
    company: "RetailX",
    text: "The real-time analytics and student sentiment analysis from Unifyi have been game changers. We’ve gained valuable insights into prospective student needs, improving our overall enrollment",
    image: "https://randomuser.me/api/portraits/women/4.jpg", // Image 3
  },
  {
    name: "James Wilson",
    role: "Community Manager",
    company: "Local Eats",
    text: "Automated follow-ups and personalized messaging have made our student lead management more streamlined than ever. We've experienced significant growth in student enrollments this year.",
    image: "https://randomuser.me/api/portraits/men/8.jpg", // Image 4
  },
];

const ImageSlider: React.FC = () => {
    const settings = {
      infinite: true, // Loop infinitely
      speed: 2000, // Speed of slide transition (in ms)
      slidesToShow: 3, // Number of visible slides
      slidesToScroll: 1, // Number of slides to scroll at a time
      autoplay: true, // Enable automatic sliding
      autoplaySpeed: 4000, // Continuous autoplay with no delay
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ] // Smooth animation
    };
  
    return (
      <section id="case" className=" bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            What Our Users Are Saying
          </h2>
  
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-24 h-24 object-cover"
                  />
                </div>
                <p className="text-lg italic text-gray-600 mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
  
  export default ImageSlider;
  