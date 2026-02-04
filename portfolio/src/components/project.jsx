import React from "react";

const Project = (img, title, description) => {
  return (
    <div className="glass-card project">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Project; 
