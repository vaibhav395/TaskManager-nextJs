"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    testimonial: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
        <div className="max-w-lg mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6">
                  <p className="text-gray-300 mb-4">{testimonial.testimonial}</p>
                  <p className="text-blue-200 font-semibold">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
