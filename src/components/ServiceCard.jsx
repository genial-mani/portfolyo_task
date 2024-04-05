import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="card">
      <img src={service.image.url} className="card-img-top" />
      <div
        className="card-body"
        // style={{
        //   backgroundImage: `url(${service.image.url})`,
        //   backdropFilter: "blur(20px) saturate(180%)",
        //   backgroundSize: "cover",
        // }}
      >
        <h5 className="card-title">{service.name}</h5>
        <p className="card-text">{service.desc}</p>
        <p className="card-text">{service.charge}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
