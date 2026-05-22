import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import BackgroundGlow from "./components/BackgroundGlow";
import FullAbout from "./components/about/FullAbout";
import Services from "./components/services/Services";
import ProjectsSection from "./components/projects/ProjectsSection";
import SkillsSection from "./components/skills/SkillsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import MouseFollower from "./components/MouseFollower";
import ScrollToTop from "./components/ScrollToTop";
import NightMode from "./components/NightMode";
import ChangeLanguage from "./components/ChangeLanguage";

import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const { t } = useTranslation();

  // Scroll to hash on page load (e.g. pasting URL with #contact)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Delay scrolling slightly to let the virtual DOM render and translations load
      const timer = setTimeout(() => {
        try {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } catch (error) {
          console.error("Error scrolling to hash on load:", error);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

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
              borderRadius: "100px",
              backdropFilter: "blur(10px)",
            },
          }}
        />

        {/* Fondo de colores */}
        <BackgroundGlow />

        <MouseFollower />
        <ScrollToTop />

        {/* main — traducción de: display flex-col gap-[40px] / responsive gap-[20px] pt-[60px] */}
        <main className="flex flex-col gap-[40px] max-[768px]:gap-5 max-[768px]:pt-[60px]">
          <Header />

          <div className="flex flex-col items-center justify-center text-center py-12 px-5 max-[768px]:py-6">
            <h1
              className="text-[44px] font-extrabold tracking-tight leading-[1.25] max-w-[900px] text-center max-[768px]:text-[26px] bg-clip-text text-transparent select-none"
              style={{ backgroundImage: "var(--slogan-gradient)" }}
            >
              “{t("header.message")}”
            </h1>
          </div>

          {/* header-buttons */}
          <div className="fixed top-[2rem] right-[2rem] flex gap-5 z-[1000] max-[768px]:gap-[10px] max-[768px]:top-4 max-[768px]:right-4">
            <NightMode />
            <ChangeLanguage />
          </div>

          {/* Secciones del Portafolio Modularizadas */}
          <FullAbout />
          <Services />
          <ProjectsSection />
          <SkillsSection />
          <ContactForm />
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
