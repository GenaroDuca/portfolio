import React from "react";
import { useTranslation } from "react-i18next";
import Skill from "../Skill";

import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { SiPostman } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2
        className="text-left border-l-[2px] border-[var(--primary-accent)] pl-[10px] text-[var(--icon-color)] text-[24px]"
        id="skills"
      >
        {t("tech_stack.title")}
      </h2>

      {/* skills-container */}
      <div className="flex flex-col gap-5 px-5">
        {/* Frontend */}
        <p className="text-left pl-[10px] border-l-[2px] border-[var(--primary-accent)] text-[var(--icon-color)]">
          {t("tech_stack.frontend")}
        </p>
        <div className="grid grid-cols-6 gap-5 max-[768px]:grid-cols-2">
          <Skill icon={<FaReact size={45} />} title="React" />
          <Skill icon={<RiJavascriptFill size={50} />} title="Javascript" />
          <Skill icon={<RiTailwindCssFill size={50} />} title="Tailwind" />
          <Skill icon={<FaHtml5 size={50} />} title="HTML" />
          <Skill icon={<FaCss3Alt size={50} />} title="CSS" />
        </div>

        {/* Backend */}
        <p className="text-left pl-[10px] border-l-[2px] border-[var(--primary-accent)] text-[var(--icon-color)]">
          {t("tech_stack.backend")}
        </p>
        <div className="grid grid-cols-6 gap-5 max-[768px]:grid-cols-2">
          <Skill icon={<RiSupabaseFill size={50} />} title="Supabase" />
          <Skill icon={<BiLogoTypescript size={50} />} title="Typescript" />
          <Skill icon={<SiNestjs size={45} />} title="NestJS" />
          <Skill
            icon={<PiFileSql size={50} />}
            title="MySql & PostgreSQL"
          />
        </div>

        {/* Tools */}
        <p className="text-left pl-[10px] border-l-[2px] border-[var(--primary-accent)] text-[var(--icon-color)]">
          {t("tech_stack.tools")}
        </p>
        <div className="grid grid-cols-6 gap-5 max-[768px]:grid-cols-2">
          <Skill icon={<SiPostman size={50} />} title="Postman" />
          <Skill icon={<IoLogoFigma size={50} />} title="Figma" />
          <Skill icon={<FaGitAlt size={50} />} title="Git & GitHub" />
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
