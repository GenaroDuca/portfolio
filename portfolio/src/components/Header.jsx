import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="glass-card flex justify-between items-center p-[30px] max-[768px]:p-5 max-[768px]:text-[14px] max-[768px]:fixed max-[768px]:top-0 max-[768px]:left-0 max-[768px]:right-0 max-[768px]:z-[1000] max-[768px]:rounded-none">
      <p className="max-[768px]:hidden text-[var(--text-color)]">
        <strong>{t("header.portfolio")}</strong> Genaro
      </p>
      <nav className="flex gap-5 max-[768px]:gap-[10px]">
        <a href="#about" className="text-[var(--text-color)] no-underline hover:text-[var(--primary-accent)]">
          {t("header.about")}
        </a>
        <a href="#projects" className="text-[var(--text-color)] no-underline hover:text-[var(--primary-accent)]">
          {t("header.projects")}
        </a>
        <a href="#contact" className="text-[var(--text-color)] no-underline hover:text-[var(--primary-accent)]">
          {t("header.contact")}
        </a>
      </nav>
    </div>
  );
};

export default Header;
