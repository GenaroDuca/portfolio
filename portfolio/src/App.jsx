import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Background from "./components/background";
import Project from "./components/project";
import MouseFollower from "./components/MouseFollower";

import ina from "./assets/ina.png";

function App() {
  return (
    <>
      {/* CAPA DEL FONDO DE COLORES */}
      <div className="background-wrapper">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
        <div className="bg-glow glow-3"></div>
        <div className="bg-glow glow-4"></div>
      </div>

      <MouseFollower />

      {/* CONTENIDO PORTFOLIO */}
      <main>
        <Header />
        <h1 className="section-title" id="about">
          About Me
        </h1>
        <About />
        <Background />
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
      </main>
    </>
  );
}

export default App;
