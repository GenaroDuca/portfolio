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
      className="header-button"
      style={{ fontSize: "16px" }}
      onClick={toggleLanguage}
    >
      {i18n.language === "en" ? "ES" : "EN"}
    </button>
  );
};

export default ChangeLanguage;
