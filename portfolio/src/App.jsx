import './App.css'
import Header from './components/header'
import About from './components/about'
import Background from './components/background'
import Project from './components/project'

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

      {/* CONTENIDO DE TU PORTFOLIO */}
      <main>
        <Header />
        <About />
        <Background />
        <Project img="" title="" description="" />
      </main>
    </>
  );
}

export default App
