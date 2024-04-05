import React from "react";

const Accordian = ({ temp, ed, i }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${temp + i}`}
          aria-expanded={i == 0 ? "false" : "true"}
          aria-controls={`collapse-${temp + i}`}
        >
          {ed.company_name}
        </button>
      </h2>
      <div
        id={`collapse-${temp + i}`}
        className={`accordion-collapse collapse ${i == 0 ? 'show' : " "}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="accor-body-head">
            <p>{ed.jobTitle}</p>
            <p>{`${ed.startDate
              .slice(0, 10)
              .replaceAll("-", "/")} - ${ed.endDate
              .slice(0, 10)
              .replaceAll("-", "/")} `}</p>
          </div>
          <div className="com-desc">
            <p>{ed.jobLocation}</p>
            <p>{ed.summary}</p>
          </div>
          <ul>
            {ed.bulletPoints.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
