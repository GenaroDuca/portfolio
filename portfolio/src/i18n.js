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
        p1: "I am a Full Stack Web Developer passionate about building clean, efficient, and scalable digital solutions. Having recently completed my professional training, I focus on the intersection of modern frontend architecture with React and robust backend management using and Supabase.",
        p2: "I am currently developing a personal finance management system to optimize the control of expenses, income, and savings. Its objective is to offer a fluid and efficient experience that allows users to have total control over their finances for free and without restrictions.",
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
        opencourt_description:
          "OpenCourt is a comprehensive web application designed for the management, organization, and automated booking of tennis court slots. The system efficiently solves the challenge of handling fixed and recurring schedules through an optimized database architecture, ensuring real-time availability and preventing booking conflicts.",
        misfinanzas_description:
          "My Finances is a web application designed to help you track your expenses, income, and savings. Its goal is to provide a seamless and efficient experience that allows users to have complete control over their finances, free of charge.",
        ducaagrimensura_description:
          "Duca Agrimensura is a professional web application designed to streamline land surveying and cadastral management processes. The system facilitates the organization of projects, documentation, and client information, providing a robust platform for surveying professionals to manage their work efficiently and reliably.",
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
        p2: "Actualmente estoy desarrollando un sistema de gestión de finanzas personales para optimizar el control de gastos, ingresos y ahorro. Su objetivo es ofrecer una experiencia fluida y eficiente que permita a los usuarios tener un control total sobre sus finanzas de forma gratuita y libre.",
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
        opencourt_description:
          "OpenCourt es una aplicación web integral diseñada para la gestión, organización y reserva automatizada de turnos de tenis. El sistema resuelve de manera eficiente la problemática de los turnos fijos y recurrentes mediante un diseño de arquitectura de base de datos optimizado, garantizando la disponibilidad en tiempo real y previniendo la superposición de horarios.",
        misfinanzas_description:
          "Mis Finanzas es una aplicación web destinada al control de gastos, ingresos y ahorros. Su objetivo es ofrecer una experiencia fluida y eficiente que permita a los usuarios tener un control total sobre sus finanzas de forma gratuita y libre.",
        ducaagrimensura_description:
          "A professional, minimalist landing page designed for a land surveying firm. Focused on conversion and clean user experience, it showcases technical services dynamically.",
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
