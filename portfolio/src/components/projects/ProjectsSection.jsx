import React from "react";
import { useTranslation } from "react-i18next";
import Project from "../Project";

import opencourt from "../../assets/opencourt.png";
import opencourt2 from "../../assets/opencourt2.png";
import opencourt3 from "../../assets/opencourt3.png";

import misfinanzas from "../../assets/misfinanzas.png";
import misfinanzas2 from "../../assets/misfinanzas2.png";
import misfinanzas3 from "../../assets/misfinanzas3.png";
import misfinanzas4 from "../../assets/misfinanzas4.png";

import ducaagrimensura from "../../assets/ducaagrimensura.png";
import ducaagrimensura2 from "../../assets/ducaagrimensura2.png";
import ducaagrimensura3 from "../../assets/ducaagrimensura3.png";
import ducaagrimensura4 from "../../assets/ducaagrimensura4.png";

import ina from "../../assets/ina.jpg";
import ina2 from "../../assets/ina2.jpg";
import ina3 from "../../assets/ina3.jpg";
import ina4 from "../../assets/ina4.jpg";

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2
        className="text-left border-l-[2px] border-[var(--primary-accent)] pl-[10px] text-[var(--icon-color)] text-[24px]"
        id="projects"
      >
        {t("projects.title")}
      </h2>

      {/* projects-container */}
      <div className="grid grid-cols-3 gap-5 max-[768px]:grid-cols-1">
        <Project
          img={[ina, ina2, ina3, ina4]}
          title="INA Gestión"
          description={t("projects.ina_description")}
        />

        <Project
          img={[opencourt, opencourt2, opencourt3]}
          title="OpenCourt"
          description={t("projects.opencourt_description")}
          link="https://open-court.vercel.app"
        />

        <Project
          img={[
            ducaagrimensura,
            ducaagrimensura2,
            ducaagrimensura3,
            ducaagrimensura4,
          ]}
          title="Duca Agrimensura"
          description={t("projects.ducaagrimensura_description")}
          link="https://duca-agrimensura.vercel.app/"
        />

        <Project
          img={[misfinanzas, misfinanzas2, misfinanzas3, misfinanzas4]}
          title="Mis Finanzas"
          description={t("projects.misfinanzas_description")}
          link="https://misfinanzas-gamma.vercel.app"
        />
      </div>
    </>
  );
};

export default ProjectsSection;
