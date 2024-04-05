import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import ServiceCard from "./ServiceCard"

const Services = ({ services, testimonials }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="services">
      <h1>Services</h1>
      <Slider {...settings} className="custom-slider">
        {services.filter((service)=> service.enabled).map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </Slider>
      <h1>Testimonials</h1>
      <Slider {...settings} className="custom-slider">
        {testimonials.filter((testi) => testi.enabled).map((testimonial) => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </Slider>
    </section>
  );
};

export default Services;
