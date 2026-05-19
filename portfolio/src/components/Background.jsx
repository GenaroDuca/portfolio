import React from "react";
import { useTranslation } from "react-i18next";

const Background = () => {
  const { t } = useTranslation();

  return (
    <div className="glass-card flex flex-col gap-5 p-[30px] text-[var(--text-color)] max-[768px]:p-5">
      {/* Título */}
      <p className="text-[var(--electric-purple)] text-left text-[14px] font-bold tracking-[3px]">
        {t("background.title")}
      </p>

      {/* Párrafos en fila */}
      <div className="flex flex-row gap-[40px] max-[768px]:flex-col max-[768px]:gap-5">
        <p className="flex-1 text-left leading-[1.5] text-[16px] max-[768px]:text-[14px] max-[768px]:text-justify max-[768px]:[hyphens:auto]">
          {t("background.p1")}
        </p>
        <p className="flex-1 text-left leading-[1.5] text-[16px] max-[768px]:text-[14px] max-[768px]:text-justify max-[768px]:[hyphens:auto]">
          {t("background.p2")}
        </p>
      </div>
    </div>
  );
};

export default Background;
