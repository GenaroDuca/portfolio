import React from "react";
import { useTranslation } from "react-i18next";
import About from "./About";
import Background from "./Background";

const FullAbout = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2
        className="text-left border-l-[2px] border-[var(--primary-accent)] pl-[10px] text-[var(--icon-color)] text-[24px]"
        id="about"
      >
        {t("about.title")}
      </h2>
      <About />
      {/* <Background /> */}
    </>
  );
};

export default FullAbout;