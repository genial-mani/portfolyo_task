import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <img src={testimonial.image.url} alt={testimonial.name} />
      <div className="testimonial-content">
        <h2>{testimonial.name}</h2>
        <p>{testimonial.position}</p>
        <p>{testimonial.review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
