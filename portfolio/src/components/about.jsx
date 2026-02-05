import React from "react";
import profile from "../assets/profile.jpg";
import { useTranslation, Trans } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

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
          {t("about.name")}
        </p>
        <p style={{ fontSize: "16px", textAlign: "left", lineHeight: "1.5" }}>
          <Trans i18nKey="about.description">
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
          </Trans>
        </p>
        <div>
          <button>
            <a href="#projects">{t("about.explore_projects")}</a>
          </button>
          <button>
            <a href="#contact">{t("about.lets_chat")}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
