import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        portfolio: "Duca Soluciones Web",
        about: "About Me",
        projects: "Projects",
        services: "Services",
        contact: "Contact",
        message: "Tailor-made solutions to take your business to the next level",
        badge: "Premium Development"
      },
      about: {
        title: "About Me",
        name: "Genaro Duca",
        description:
          "Full Stack Web Developer. <br> I specialize in creating custom web systems, integrating modern architecture with a user-centric design.",
        services: "My Services",
        lets_chat: "Contact me",
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
        expand: "Fullscreen",
        ina_description:
          "Inventory and Sales Management System: Development of a comprehensive application for a fragrance business using React and Supabase. I implemented a scalable architecture for real-time stock management, customer registration, and sales tracking, prioritizing an intuitive and optimized interface for the business's operational efficiency.",
        catube_description:
          "CatTube: Streaming, E-commerce & Education. Development of a comprehensive video platform for creators using Node.js (Nest.js) and MySQL. I implemented a native online store, an educational module, and a custom discovery system, achieving a minimalist interface designed to centralize monetization, learning, and social interaction into a single, seamless experience.",
        opencourt_description:
          "OpenCourt is a comprehensive web application designed for the management, organization, and automated booking of tennis court slots. The system efficiently solves the challenge of handling fixed and recurring schedules through an optimized database architecture, ensuring real-time availability and preventing booking conflicts.",
        misfinanzas_description:
          "My Finances is a web application designed to help you track your expenses, income, and savings. Its goal is to provide a seamless and efficient experience that allows users to have complete control over their finances, free of charge.",
        ducaagrimensura_description:
          "A professional, minimalist landing page designed for a land surveying firm. Focused on conversion and clean user experience, it showcases technical services dynamically.",
      },

      services: {
        title: "Services",
        subtitle: "Professional web development tailored to your business needs, with optimized performance and premium design.",
        currency: "Currency",
        ars: "ARS ($)",
        usd: "USD ($)",
        ideal: "Ideal for:",
        cta: "Inquire",
        complexity: "Complexity",
        duration: "Delivery Time",
        weeks: "weeks",
        weeks_plural: "weeks",
        a_convenir: "To quote",
        items: {
          landing: {
            title: "Landing Page",
            description: "A single-page website focused on a single objective (e.g. promoting a special offer, capturing leads, or presenting a new service). It is direct, minimalist, and designed to convert visitors into clients.",
            ideal: "Marketing campaigns, launches, or businesses seeking absolute simplicity.",
            price_ars: "$350,000 - $600,000 ARS",
            price_usd: "$350 - $600 USD"
          },
          catalog: {
            title: "Online Catalog",
            description: "A digital space where customers can view all of your products, read descriptions, view photos, and check prices. Includes a button to place orders or make inquiries directly via WhatsApp.",
            ideal: "Businesses with many products that want to streamline customer service and stop answering the same questions repeatedly.",
            price_ars: "$600,000 - $1,200,000 ARS",
            price_usd: "$600 - $1,200 USD"
          },
          ecommerce: {
            title: "E-commerce",
            description: "A complete sales solution. Includes a shopping cart, real-time inventory management, shipping calculator, and integrated payment gateway (Mercado Pago). The customer pays, and the order is registered automatically.",
            ideal: "Businesses that want to sell 24/7 and automate the entire process from purchase to payment confirmation.",
            price_ars: "$1,500,000 - $4,000,000+ ARS",
            price_usd: "$1,500 - $4,000+ USD"
          },
          custom: {
            title: "Custom Web",
            description: "Development of specific functionalities that do not exist in standard solutions. This can include appointment booking systems, complex admin panels, loyalty programs, or internal tools for your business.",
            ideal: "Ventures that need a unique technical tool to optimize their logistics, administration, or user experience.",
            price_ars: "To quote according to requirements (from $2,000,000 ARS)",
            price_usd: "To quote according to requirements (from $2,000 USD)"
          }
        }
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
      footer: {
        brand_subtitle: "Professional Web Development",
        slogan: "Tailor-made solutions to take your business to the next level.",
        links_title: "QUICK LINKS",
        links: {
          home: "Home",
          about: "About Me",
          services: "Services",
          contact: "Contact"
        },
        contact_title: "CONTACT",
        location: "Buenos Aires, Argentina",
        rights: "© 2026 Duca Soluciones Web. All rights reserved."
      },
    },
  },
  es: {
    translation: {
      header: {
        portfolio: "Duca Soluciones Web",
        about: "Sobre mí",
        projects: "Proyectos",
        services: "Servicios",
        contact: "Contacto",
        message:"Soluciones a medida para llevar tu negocio al siguiente nivel.",
        badge: "Desarrollo Premium"
      },
      about: {
        title: "Sobre mí",
        name: "Genaro Duca",
        description:
          "Desarrollador Web Full Stack. <br> Me especializo en crear sistemas web a medida, integrando arquitectura moderna con un diseño enfocado en la experiencia de usuario.",
        services: "Mis Servicios",
        lets_chat: "Contáctame",
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
        expand: "Pantalla completa",
        ina_description:
          "Sistema de gestión de inventario y ventas desarrollado a medida. Es una aplicación integral para un emprendimiento de fragancias utilizando React y Supabase. Implementé una arquitectura escalable para el manejo de stock en tiempo real, registro de clientes y de ventas, priorizando una interfaz intuitiva y optimizada para la eficiencia operativa del negocio.",
        catube_description:
          "CatTube: Streaming, e-commerce & education desarrollo de una plataforma de video integral para creadores utilizando Node.js (Nest.js) y MySQL. Implementé una tienda online nativa, un módulo educativo y un sistema de descubrimiento personalizado, logrando una interfaz minimalista diseñada para centralizar la monetización, el aprendizaje y la interacción social en una sola experiencia fluida.",
        opencourt_description:
          "OpenCourt es una aplicación web integral diseñada para la gestión, organización y reserva automatizada de turnos de tenis. El sistema resuelve de manera eficiente la problemática de los turnos fijos y recurrentes mediante un diseño de arquitectura de base de datos optimizado, garantizando la disponibilidad en tiempo real y previniendo la superposición de horarios.",
        misfinanzas_description:
          "Mis Finanzas es una aplicación web destinada al control de gastos, ingresos y ahorros. Su objetivo es ofrecer una experiencia fluida y eficiente que permita a los usuarios tener un control total sobre sus finanzas de forma gratuita y libre.",
        ducaagrimensura_description:
          "Diseño web minimalista de alto impacto para agrimensura, centrado en la conversión del usuario y en la presentación dinámica de soluciones técnicas.",
      },

      services: {
        title: "Servicios",
        subtitle: "Desarrollo web profesional adaptado a las necesidades de tu negocio, con rendimiento optimizado y diseño premium.",
        currency: "Moneda",
        ars: "ARS ($)",
        usd: "USD ($)",
        ideal: "Ideal para:",
        cta: "Consultar",
        complexity: "Complejidad",
        duration: "Tiempo estimado",
        weeks: "semanas",
        weeks_plural: "semanas",
        a_convenir: "A convenir",
        items: {
          landing: {
            title: "Landing Page",
            description: "Es una página única, enfocada en un solo objetivo (por ejemplo: promocionar una oferta especial, captar contactos o presentar un nuevo servicio). Es directa, minimalista y diseñada para convertir visitantes en clientes.",
            ideal: "Campañas de marketing, lanzamientos o negocios que quieren simplicidad absoluta.",
            price_ars: "$350.000 - $600.000 ARS",
            price_usd: "$350 - $600 USD"
          },
          catalog: {
            title: "Catálogo Online",
            description: "Un espacio digital donde el cliente puede ver todos los productos, leer descripciones, ver fotos y consultar precios. Incluye un botón para realizar el pedido o consulta directamente por WhatsApp.",
            ideal: "Negocios con muchos productos que quieren agilizar la atención al cliente.",
            price_ars: "$600.000 - $1.200.000 ARS",
            price_usd: "$600 - $1,200 USD"
          },
          ecommerce: {
            title: "E-commerce",
            description: "Una solución completa de ventas. Incluye carrito de compras, gestión de inventario en tiempo real, cálculo de envíos y pasarela de pagos integrada (Mercado Pago). El cliente paga y el pedido queda registrado automáticamente.",
            ideal: "Negocios que quieren vender las 24 horas y automatizar el proceso completo desde la compra hasta la confirmación de pago.",
            price_ars: "$1.500.000 - $4.000.000+ ARS",
            price_usd: "$1,500 - $4,000+ USD"
          },
          custom: {
            title: "Web a Medida",
            description: "Desarrollo de funcionalidades específicas que no existen en el estándar. Esto puede incluir sistemas de gestión de turnos, paneles de administración complejos, sistemas de fidelización o herramientas internas para el negocio.",
            ideal: "Emprendimientos que necesitan una herramienta técnica única para optimizar su logística, administración o experiencia de usuario.",
            price_ars: "A cotizar según requerimientos (desde $2.000.000 ARS)",
            price_usd: "A cotizar según requerimientos (desde $2.000 USD)"
          }
        }
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
      footer: {
        brand_subtitle: "Desarrollo Web Profesional",
        slogan: "Soluciones a medida para llevar tu negocio al siguiente nivel.",
        links_title: "ENLACES RÁPIDOS",
        links: {
          home: "Inicio",
          about: "Sobre Mí",
          services: "Servicios",
          contact: "Contacto"
        },
        contact_title: "CONTACTO",
        location: "Buenos Aires, Argentina",
        rights: "© 2026 Duca Soluciones Web. Todos los derechos reservados."
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
