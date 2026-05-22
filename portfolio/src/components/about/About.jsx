import React from "react";
// import profile from "../assets/profile.jpg";
import ducasoluciones from "../../assets/ducasoluciones.JPG";

import { useTranslation, Trans } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="glass-card flex gap-[60px] items-center px-[60px] py-[90px] text-[var(--text-color)] max-[768px]:flex-col max-[768px]:p-5 max-[768px]:gap-[10px]">
      {/* Foto */}
      <div className="shrink-0">
        <img
          src={ducasoluciones}
          alt="Profile picture"
          className="w-[400px] h-[400px] object-cover rounded-[20px] border-[1.5px] border-[var(--card-border)] max-[768px]:w-[200px] max-[768px]:h-[200px]"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-[40px] max-[768px]:gap-5">
        {/* Nombre */}
        <p
          className="font-bold text-[60px] text-left leading-[1] text-[var(--icon-color)] max-[768px]:text-[30px] max-[768px]:text-center"
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
          <a
            href="#services"
            className="self-center py-5 px-[40px] rounded-full bg-[var(--glow-3)] border-[1.5px] border-[var(--card-border)] font-bold text-[var(--icon-color)] cursor-pointer hover:-translate-y-[2px]"
          >
            {t("about.services")}
          </a>
          <a
            href="#contact"
            className="self-center py-5 px-[40px] rounded-full bg-[var(--card-bg)] border-[1.5px] border-[var(--card-border)] font-bold text-[var(--icon-color)] cursor-pointer hover:-translate-y-[2px]"
          >
            {t("about.lets_chat")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
