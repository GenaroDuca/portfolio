import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import About from "./components/About";
import Background from "./components/Background";
import Project from "./components/Project";
import MouseFollower from "./components/MouseFollower";
import ContactForm from "./components/ContactForm";
import Skill from "./components/Skill";
import ScrollToTop from "./components/ScrollToTop";
import NightMode from "./components/NightMode";
import ChangeLanguage from "./components/ChangeLanguage";

import { ThemeProvider } from "./context/ThemeContext";

// import catube from "./assets/catube.png";
// import catube2 from "./assets/catube2.png";
// import catube3 from "./assets/catube3.png";

import opencourt from "./assets/opencourt.png";
import opencourt2 from "./assets/opencourt2.png";
import opencourt3 from "./assets/opencourt3.png";

import misfinanzas from "./assets/misfinanzas.png";
import misfinanzas2 from "./assets/misfinanzas2.png";
import misfinanzas3 from "./assets/misfinanzas3.png";
import misfinanzas4 from "./assets/misfinanzas4.png";

import ducaagrimensura from "./assets/ducaagrimensura.png";
import ducaagrimensura2 from "./assets/ducaagrimensura2.png";
import ducaagrimensura3 from "./assets/ducaagrimensura3.png";
import ducaagrimensura4 from "./assets/ducaagrimensura4.png";

import ina from "./assets/ina.jpg";
import ina2 from "./assets/ina2.jpg";
import ina3 from "./assets/ina3.jpg";
import ina4 from "./assets/ina4.jpg";

import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";
import { GrAndroid } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { useTranslation } from "react-i18next";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Analytics />
      <ThemeProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            className: "",
            style: {
              border: "1.5px solid var(--card-border)",
              padding: "20px",
              color: "var(--text-color)",
              background: "var(--card-bg)",
              borderRadius: "30px",
              backdropFilter: "blur(10px)",
            },
          }}
        />

        {/* Fondo de colores — traducción exacta de .background-wrapper + .bg-glow + .glow-N */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-10] bg-[var(--bg-color)]">
          <div className="absolute rounded-full blur-[100px] top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--glow-1)] opacity-60" />
          <div className="absolute rounded-full blur-[100px] top-[20%] right-[-5%] w-[600px] h-[600px] bg-[var(--glow-2)] opacity-40" />
          <div className="absolute rounded-full blur-[100px] bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[var(--glow-3)] opacity-30" />
          <div className="absolute rounded-full blur-[100px] bottom-[-5%] right-[20%] w-[550px] h-[550px] bg-[var(--glow-4)] opacity-50" />
        </div>

        <MouseFollower />
        <ScrollToTop />

        {/* main — traducción de: display flex-col gap-[40px] / responsive gap-[20px] pt-[60px] */}
        <main className="flex flex-col gap-[40px] max-[768px]:gap-5 max-[768px]:pt-[60px]">
          <Header />

          {/* header-buttons */}
          <div className="fixed top-[2rem] right-[2rem] flex gap-5 z-[1000] max-[768px]:gap-[10px] max-[768px]:top-5 max-[768px]:right-5">
            <NightMode />
            <ChangeLanguage />
          </div>

          {/* section-title */}
          <h1
            className="text-left border-l-[2px] border-[var(--primary-accent)] pl-[10px] text-[var(--icon-color)] max-[768px]:text-[24px]"
            id="about"
          >
            {t("about.title")}
          </h1>
          <About />

          <Background />

          <h1
            className="text-left border-l-[2px] border-[var(--primary-accent)] pl-[10px] text-[var(--icon-color)] max-[768px]:text-[24px]"
            id="skills"
          >
            {t("tech_stack.title")}
          </h1>

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

          <h1
            className="text-left border-l-[2px] border-[var(--primary-accent)] pl-[10px] text-[var(--icon-color)] max-[768px]:text-[24px]"
            id="projects"
          >
            {t("projects.title")}
          </h1>

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

            
            {/* <Project
              img={[catube, catube2, catube3]}
              title="Catube"
              description={t("projects.catube_description")}
              link="https://catube.xyz"
              github="https://github.com/GenaroDuca/Catube"
            /> */}
          </div>

          <h1
            className="text-left border-l-[2px] border-[var(--primary-accent)] pl-[10px] text-[var(--icon-color)] max-[768px]:text-[24px]"
            id="contact"
          >
            {t("contact.title")}
          </h1>
          <ContactForm />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
