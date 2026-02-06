import React from "react";
import { IoLogoGithub } from "react-icons/io";

const Project = ({ img, title, description, link, github }) => {
  return (
    <a
      className={link ? "glass-card project click" : "glass-card project"}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-info">
        <h3 style={{ color: "var(--icon-color)" }}>{title}</h3>
      </div>

      <img src={img} alt="Project Screenshot" />
      <p
        style={{
          color: "var(--text-color)",
          textAlign: "justify",
          hyphens: "auto",
          WebkitHyphens: "auto",
          msHyphens: "auto",
        }}
      >
        {description}
      </p>

      <div className="project-links">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--icon-color)" }}
          >
            <IoLogoGithub size={30} />
          </a>
        )}
      </div>
    </a>
  );
};

export default Project;
