import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        portfolio: "Portfolio",
        about: "About Me",
        projects: "Projects",
        contact: "Contact",
      },
      about: {
        title: "About Me",
        name: "Genaro Duca",
        description:
          "Full Stack Developer crafting high-performance digital experiences with a focus on <0>minimalist aesthetics</0> and <2>modern architecture.</2>",
        explore_projects: "Projects",
        lets_chat: "Contact",
      },
      background: {
        title: "BACKGROUND",
        p1: "I am a Full Stack Web Developer passionate about building clean, efficient, and scalable digital solutions. Having recently completed my professional training, I focus on the intersection of modern frontend architecture with React and robust backend management using NestJS (Node.js) and Supabase.",
        p2: "I am currently developing a custom management system for a fragrance business, applying my technical skills to solve real-world logistical problems and optimize business workflows.",
      },
      tech_stack: {
        title: "Tech Stack",
        frontend: "Frontend Development",
        backend: "Backend Development",
        mobile: "Mobile Development",
        tools: "Tools",
      },
      projects: {
        title: "Projects",
        ina_description:
          "Inventory and Sales Management System: Development of a comprehensive application for a fragrance business using React and Supabase. I implemented a scalable architecture for real-time stock management, customer registration, and sales tracking, prioritizing an intuitive and optimized interface for the business's operational efficiency.",
        catube_description:
          "CatTube: Streaming, E-commerce & Education. Development of a comprehensive video platform for creators using Node.js (Nest.js) and MySQL. I implemented a native online store, an educational module, and a custom discovery system, achieving a minimalist interface designed to centralize monetization, learning, and social interaction into a single, seamless experience.",
      },
      contact: {
        title: "Contact",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message!",
        check_fields: "Check the highlighted fields",
      },
    },
  },
  es: {
    translation: {
      header: {
        portfolio: "Portafolio",
        about: "Sobre mí",
        projects: "Proyectos",
        contact: "Contacto",
      },
      about: {
        title: "Sobre mí",
        name: "Genaro Duca",
        description:
          "Desarrollador Full Stack creando experiencias digitales de alto rendimiento con un enfoque en <0>estética minimalista</0> y <2>arquitectura moderna.</2>",
        explore_projects: "Proyectos",
        lets_chat: "Contacto",
      },
      background: {
        title: "TRAYECTORIA",
        p1: "Soy un Desarrollador Web Full Stack apasionado por construir soluciones digitales limpias, eficientes y escalables. Habiendo completado recientemente mi formación profesional, me concentro en la intersección de una arquitectura frontend moderna con React y una gestión backend utilizando NestJS (Node.js) y Supabase.",
        p2: "Actualmente estoy desarrollando un sistema de gestión personalizado para un negocio de fragancias, aplicando mis habilidades técnicas para resolver problemas logísticos del mundo real y optimizar los flujos de trabajo empresariales.",
      },
      tech_stack: {
        title: "Tecnologías",
        frontend: "Desarrollo Frontend",
        backend: "Desarrollo Backend",
        mobile: "Desarrollo Móvil",
        tools: "Herramientas",
      },
      projects: {
        title: "Proyectos",
        ina_description:
          "Sistema de Gestión de Inventario y Ventas Desarrollo de una aplicación integral para un emprendimiento de fragancias utilizando React y Supabase. Implementé una arquitectura escalable para el manejo de stock en tiempo real, registro de clientes y seguimiento de ventas, priorizando una interfaz intuitiva y optimizada para la eficiencia operativa del negocio.",
        catube_description:
          "CatTube: Streaming, E-commerce & Education Desarrollo de una plataforma de video integral para creadores utilizando Node.js (Nest.js) y MySQL. Implementé una tienda online nativa, un módulo educativo y un sistema de descubrimiento personalizado, logrando una interfaz minimalista diseñada para centralizar la monetización, el aprendizaje y la interacción social en una sola experiencia fluida.",
      },
      contact: {
        title: "Contacto",
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito!",
        error: "¡Error al enviar el mensaje!",
        check_fields: "Revisa los campos resaltados",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
