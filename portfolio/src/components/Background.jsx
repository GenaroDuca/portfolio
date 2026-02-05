import React from "react";
import { useTranslation } from "react-i18next";

const Background = () => {
  const { t } = useTranslation();

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
        {t("background.title")}
      </p>
      <div>
        <p
          style={{
            textAlign: "left",
            fontSize: "16px",
          }}
        >
          {t("background.p1")}
        </p>
        <p
          style={{
            textAlign: "left",
            fontSize: "16px",
          }}
        >
          {t("background.p2")}
        </p>
      </div>
    </div>
  );
};

export default Background;
