import React from "react";
import profile from "../assets/profile.jpg";
import { useTranslation, Trans } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="glass-card flex gap-[60px] items-center px-[60px] py-[90px] text-[var(--text-color)] max-[768px]:flex-col max-[768px]:p-5 max-[768px]:gap-[10px]">
      {/* Foto */}
      <div className="shrink-0">
        <img
          src={profile}
          alt="Profile picture"
          className="w-[400px] h-[400px] object-cover rounded-[20px] border-[1.5px] border-[var(--card-border)] max-[768px]:w-[200px] max-[768px]:h-[200px]"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-[40px] max-[768px]:gap-5">
        {/* Nombre */}
        <p
          className="font-bold text-[80px] text-left leading-[1] text-[var(--icon-color)] max-[768px]:text-[30px] max-[768px]:text-center"
        >
          {t("about.name")}
        </p>

        {/* Descripción */}
        <p className="text-[16px] text-left leading-[1.5] max-[768px]:text-[14px] max-[768px]:text-justify max-[768px]:[hyphens:auto]">
          <Trans i18nKey="about.description">
            <span className="text-[var(--icon-color)] font-bold text-[16px] max-[768px]:text-[14px]">
              minimalist aesthetics
            </span>
            and
            <span className="text-[var(--icon-color)] font-bold text-[16px] max-[768px]:text-[14px]">
              modern architecture.
            </span>
          </Trans>
        </p>

        {/* Botones */}
        <div className="flex flex-row gap-5 max-[768px]:flex-col max-[768px]:gap-[10px]">
          <button
            className="py-5 px-[40px] rounded-[30px] cursor-pointer text-[14px] bg-[var(--electric-purple)] border-[1.5px] border-[var(--electric-purple)] shadow-[0_0_20px_rgba(188,19,254,0.5)] hover:-translate-y-[2px] max-[768px]:w-full max-[768px]:py-[15px] max-[768px]:px-0"
          >
            <a href="#projects" className="no-underline text-white">
              {t("about.explore_projects")}
            </a>
          </button>
          <button
            className="py-5 px-[40px] rounded-[30px] cursor-pointer text-[14px] bg-[var(--card-bg)] [backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)] border-[1.5px] border-[var(--card-border)] hover:-translate-y-[2px] max-[768px]:w-full max-[768px]:py-[15px] max-[768px]:px-0"
          >
            <a href="#contact" className="no-underline text-[var(--icon-color)]">
              {t("about.lets_chat")}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
