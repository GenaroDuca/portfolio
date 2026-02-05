import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="glass-card header">
      <p>
        <strong>{t("header.portfolio")}</strong> Genaro
      </p>
      <nav>
        <a href="#about">{t("header.about")}</a>
        <a href="#projects">{t("header.projects")}</a>
        <a href="#contact">{t("header.contact")}</a>
      </nav>
    </div>
  );
};

export default Header;
