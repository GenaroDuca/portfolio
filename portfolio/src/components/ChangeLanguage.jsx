import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      className="border-none bg-transparent cursor-pointer text-[var(--text-color)] hover:text-[var(--primary-accent)] text-[16px] flex items-center justify-center max-[768px]:text-[14px]"
      onClick={toggleLanguage}
    >
      {i18n.language === "en" ? "ES" : "EN"}
    </button>
  );
};

export default ChangeLanguage;
