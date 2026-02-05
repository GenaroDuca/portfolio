import React from "react";

const Project = ({ img, title, description }) => {
  return (
    <div className="glass-card project">
      <img src={img} alt="Project Screenshot" />
      <div>
        <h3>{title}</h3>
        <p style={{color: "var(--text-color)"}}>{description}</p>
      </div>
    </div>
  );
};

export default Project;
