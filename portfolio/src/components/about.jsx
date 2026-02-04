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
            color: "white",
            fontWeight: "bold",
            fontSize: "80px",
            textAlign: "left",
            lineHeight: "1",
          }}
        >
          Genaro Duca
        </p>
        <p style={{ fontSize: "16px", textAlign: "left", lineHeight: "1.5" }}>
          Junior Developer crafting high-performance digital experiences with a
          focus on{" "}
          <span
            style={{
              color: "white",
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
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            modern architecture.
          </span>
        </p>
        <div>
          <button>Explore Projects</button>
          <button>Let´s Chat</button>
        </div>
      </div>
    </div>
  );
};

export default About; 
