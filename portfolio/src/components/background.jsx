import React from "react";

const Background = () => {
  return (
    <div className="glass-card background">
      <p
        style={{
          color: "var(--electric-purple)",
          textAlign: "left",
          fontSize: "14px",
          fontWeight: "bold",
          letterSpacing: "3px",
        }}
      >
        BACKGROUND
      </p>
      <div>
        <p
          style={{
            textAlign: "left",
            fontSize: "16px",
          }}
        >
          I am a Full Stack Web Developer passionate about building clean,
          efficient, and scalable digital solutions. Having recently completed
          my professional training, I focus on the intersection of modern
          frontend architecture with React and robust backend management with
          Supabase.
        </p>
        <p
          style={{
            textAlign: "left",
            fontSize: "16px",
          }}
        >
          I am currently developing a custom management system for a fragrance
          business, applying my technical skills to solve real-world logistical
          problems and optimize business workflows.
        </p>
      </div>
    </div>
  );
};

export default Background;
