import { Toaster, toast } from "react-hot-toast";

import "./App.css";

import Header from "./components/header";
import About from "./components/about";
import Background from "./components/background";
import Project from "./components/project";
import MouseFollower from "./components/MouseFollower";
import ContactForm from "./components/contactForm";
import Skill from "./components/Skill";
import ScrollToTop from "./components/ScrollToTop";
import NightMode from "./components/nightMode";
import ChangeLanguage from "./components/changelanguage";

import ina from "./assets/ina.png";

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

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            border: "1.5px solid rgba(255, 255, 255, 0.1)",
            padding: "20px",
            color: "var(--text-color)",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "30px",
            backdropFilter: "blur(10px)",
          },
        }}
      />

      {/* CAPA DEL FONDO DE COLORES */}
      <div className="background-wrapper">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
        <div className="bg-glow glow-3"></div>
        <div className="bg-glow glow-4"></div>
      </div>

      <MouseFollower />
      <ScrollToTop />

      {/* CONTENIDO PORTFOLIO */}
      <main>
        <Header />
        <div className="header-buttons">
          <NightMode />
          <ChangeLanguage />
        </div>

        <h1 className="section-title" id="about">
          About Me
        </h1>
        <About />

        <Background />

        <h1 className="section-title" id="skills">
          Tech Stack
        </h1>
        <div className="skills-container">
          <p>Frontend Development</p>
          <div className="skills-grid">
            <Skill icon={<FaReact size={45} />} title="React" />
            <Skill icon={<RiJavascriptFill size={50} />} title="Javascript" />
            <Skill icon={<FaHtml5 size={50} />} title="HTML5" />
            <Skill icon={<FaCss3Alt size={50} />} title="CSS3" />
          </div>

          <p>Backend Development</p>
          <div className="skills-grid">
            <Skill icon={<BiLogoTypescript size={50} />} title="Typescript" />
            <Skill icon={<SiNestjs size={45} />} title="NestJS" />
            <Skill icon={<SiMongodb size={45} />} title="MongoDB" />
            <Skill icon={<PiFileSql size={50} />} title="MySql & PostgreSQL" />
          </div>

          <p>Mobile Development</p>
          <div className="skills-grid">
            <Skill icon={<GrAndroid size={50} />} title="Android Studio" />
            <Skill icon={<FaJava size={50} />} title="Java" />
          </div>

          <p>Tools</p>
          <div className="skills-grid">
            <Skill icon={<SiPostman size={50} />} title="Postman" />
            <Skill icon={<IoLogoFigma size={50} />} title="Figma" />
            <Skill icon={<RiSupabaseFill size={50} />} title="Supabase" />
            <Skill icon={<FaGitAlt size={50} />} title="Git & GitHub" />
          </div>
        </div>

        <h1 className="section-title" id="projects">
          Projects
        </h1>
        <div className="projects-container">
          <Project img={ina} title="INA Gestión" description="Emprendimiento" />
          <Project img={ina} title="INA Gestión" description="Emprendimiento" />
          <Project img={ina} title="INA Gestión" description="Emprendimiento" />
          <Project img={ina} title="INA Gestión" description="Emprendimiento" />
          <Project img={ina} title="INA Gestión" description="Emprendimiento" />
          <Project img={ina} title="INA Gestión" description="Emprendimiento" />
        </div>
        <h1 className="section-title" id="contact">
          Contact
        </h1>
        <ContactForm />
      </main>
    </>
  );
}

export default App;
