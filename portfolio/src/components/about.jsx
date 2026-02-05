import React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="glass-card about">
      <div>
        <img src={profile} alt="Profile picture" />
      </div>
      <div>
        <p
          style={{
            color: "var(--icon-color)",
            fontWeight: "bold",
            fontSize: "80px",
            textAlign: "left",
            lineHeight: "1",
          }}
        >
          Genaro Duca
        </p>
        <p style={{ fontSize: "16px", textAlign: "left", lineHeight: "1.5" }}>
          Full Stack Developer crafting high-performance digital experiences
          with a focus on{" "}
          <span
            style={{
              color: "var(--primary-accent)",
              fontWeight: "bold",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            minimalist aesthetics
          </span>{" "}
          and{" "}
          <span
            style={{
              color: "var(--primary-accent)",
              fontWeight: "bold",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            modern architecture.
          </span>
        </p>
        <div>
          <button>
            <a href="#projects">Explore Projects</a>
          </button>
          <button>
            <a href="#contact">Let´s Chat</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
