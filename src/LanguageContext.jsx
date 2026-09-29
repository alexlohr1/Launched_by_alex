import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: "Home",
      work: "Work",
      services: "Services",
      process: "Process",
      about: "About",
      contact: "Contact",
      start: "Start a Project",
    },

    footer: {
      tagline: "DESIGN • DEVELOPMENT • BRANDING",
      backTop: "BACK TO TOP ↑",
    },

    marquee:
      "WEB DESIGN ✦ DEVELOPMENT ✦ BRANDING ✦ LOGOS ✦ MULTIMEDIA ✦ HOSTING ✦ WEB DESIGN ✦ DEVELOPMENT ✦ BRANDING ✦ LOGOS ✦ MULTIMEDIA ✦ HOSTING ✦",

    home: {
      available: "AVAILABLE FOR NEW PROJECTS",
      eyebrow: "WEB • BRAND • DIGITAL",
      hero1: "YOUR IDEA.",
      hero2: "LAUNCHED.",
      description:
        "Websites, brands, and digital experiences built to turn ambitious ideas into something people remember.",
      start: "Start a Project ↗",
      exploreWork: "Explore Our Work",
      scroll: "SCROLL TO EXPLORE",

      whatWeDo: "WHAT WE DO",
      statement1: "WE DON'T JUST BUILD",
      statement2: "WEBSITES.",
      statement3: "WE LAUNCH THEM.",

      capabilities: "01 / CAPABILITIES",
      everything1: "Everything you need",
      everything2: "to go live.",

      services: [
        {
          number: "01",
          title: "Web Design",
          description:
            "Digital experiences built around your business.",
        },
        {
          number: "02",
          title: "Development",
          description:
            "Fast, responsive websites built for the real world.",
        },
        {
          number: "03",
          title: "Branding",
          description:
            "Logos and identities designed to be remembered.",
        },
        {
          number: "04",
          title: "Multimedia",
          description:
            "Creative assets that keep your brand moving.",
        },
      ],

      exploreServices: "Explore All Services ↗",

      why: "WHY LAUNCHED?",
      notJust1: "NOT JUST",
      notJust2: "ANOTHER",
      notJust3: "WEBSITE.",

      benefits: [
        {
          number: "01",
          title: "BUILT FOR YOU",
          description:
            "Every project is shaped around your business' needs.",
        },
        {
          number: "02",
          title: "ONE PROCESS",
          description:
            "Strategy, design, branding, development, and launch all in one place.",
        },
        {
          number: "03",
          title: "SEAMLESS INTEGRATION",
          description:
            "Responsive experiences designed to function seamlessly on desktop, tablet, and mobile.",
        },
        {
          number: "04",
          title: "AFTER LAUNCH",
          description:
            "Hosting, maintenance, updates, and support to keep your website moving forward.",
        },
      ],

      aboutLabel: "02 / ABOUT",
      about1: "GOOD DESIGNS",
      about2: "SHOULD",
      about3: "DO SOMETHING.",

      aboutLead:
        "LAUNCHED by Alex is a digital studio focused on turning ideas into reality.",

      aboutText:
        "From a your first logo to a complete digital presence, every project combines thoughtful design, technology, and strategy.",

      values: [
        ["01", "DESIGN", "Direct the idea."],
        ["02", "BUILD", "Turn the concept into reality."],
        ["03", "LAUNCH", "Take off into the world."],
      ],

      meetTeam: "Meet the Team ↗",
      ourProcess: "Our Process",
      haveIdea: "HAVE AN IDEA?",
      lets: "LET'S",
      launchIt: "LAUNCH IT.",
    },

    work: {
      label: "SELECTED WORK",
      title1: "MADE TO",
      title2: "STAND OUT.",
      description:
        "Websites, identities, and digital experiences built with purpose.",

      projects: [
        {
          number: "01",
          name: "LAUNCHED BY ALEX",
          type: "WEB DESIGN / DEVELOPMENT / BRANDING",
          image: "/project-launched.jpg",
          url: "http://launchedbyalex.com/",
        },
        {
          number: "02",
          name: "AD ASTRA SCHOLARS",
          type: "WEB DESIGN / DEVELOPMENT",
          image: "/project-adastra.jpg",
          url: "https://www.adastrascholars.com/",
        },
        {
          number: "03",
          name: "HAIR SALON DEMO",
          type: "WEB DESIGN / DEVELOPMENT",
          image: "/project-salon.jpg",
          url: "https://cuts-color-style.vercel.app/",
        },
        {
          number: "04",
          name: "CAR MECHANIC DEMO",
          type: "WEB DESIGN / DEVELOPMENT",
          image: "/project-mechanic.jpg",
          url: "https://website-v4vm.vercel.app/",
        },
      ],

      comingSoon: "COMING SOON",
      next: "YOUR PROJECT COULD BE NEXT.",
      nextDescription:
        "Have something in mind? Let's build it.",
      start: "Start a Project ↗",
    },

    servicesPage: {
      label: "SERVICES",
      title1: "FROM IDEA",
      title2: "TO LAUNCH.",
      description:
        "Flexible options designed for businesses at every stage.",

      mostPopular: "MOST POPULAR",
      starting: "STARTING FROM",

      services: [
        {
          number: "01",
          title: "Website Design",
          price: "$750",
          description:
            "A complete, custom-built website for businesses that need a clean, polished digital presence.",
          features: [
            "Custom UI/UX Design",
            "Responsive Development",
            "Landing Pages",
            "Business Websites",
            "Portfolio Websites",
            "Mobile Optimization",
          ],
        },
        {
          number: "02",
          title: "Advanced Website Design",
          price: "$1,500",
          featured: true,
          description:
            "Custom websites with advanced functionality, interactions, and development tailored to your needs.",
          features: [
            "Everything in Website Design",
            "Custom Development",
            "Interactive Elements",
            "Advanced Animations",
            "Third-Party Integrations",
            "SEO Foundations",
            
          ],
        },
        {
          number: "03",
          title: "Brand Identity",
          price: "$750",
          description:
            "A cohesive visual identity designed to make your business recognizable.",
          features: [
            "Logo Design",
            "Color System",
            "Typography",
            "Brand Direction",
            "Brand Guidelines",
            "Social Assets",
          ],
        },
        {
          number: "04",
          title: "Creative + Multimedia",
          price: "$250",
          description:
            "Digital creative work that extends your brand beyond the website.",
          features: [
            "Digital Graphics",
            "Social Content",
            "Marketing Materials",
            "Motion Graphics",
            "Presentation Design",
            "Multimedia Assets",
          ],
        },
      ],

      ongoing: "ONGOING SUPPORT",
      keep1: "KEEP YOUR SITE",
      keep2: "IN ORBIT.",
      keepDescription:
        "Hosting, maintenance, updates, and support after launch.",

      recommended: "RECOMMENDED",
      month: "/ MONTH",
      getStarted: "GET STARTED ↗",

      memberships: [
        {
          name: "ESSENTIAL",
          price: "49",
          features: [
            "Managed Hosting",
            "SSL Security",
            "Routine Backups",
            "Software Updates",
            "Basic Support",
          ],
        },
        {
          name: "LAUNCH+",
          price: "99",
          featured: true,
          features: [
            "Everything in Essential",
            "Content Updates",
            "Performance Monitoring",
            "Priority Support",
            "Monthly Site Check",
          ],
        },
        {
          name: "PRO",
          price: "199",
          features: [
            "Everything in Launch+",
            "Up to 2 Hours of Site Updates / Month",
            "Monthly Analytics Review",
            "Priority Support",
            "Priority Scheduling",
          ],
        },
      ],

      unsure: "NOT SURE WHAT YOU NEED?",
      unsureDescription:
        "Tell us what you're trying to build. We'll figure out the right approach together.",
      talk: "Contact Us ↗",
    },

    process: {
      label: "THE PROCESS",
      title1: "FROM ZERO",
      title2: "TO LAUNCH.",
      description:
        "A clear process keeps every project moving in the right direction.",

      steps: [
        [
          "01",
          "DISCOVER",
          "We learn about your business, goals, audience, competition, and what success should look like.",
        ],
        [
          "02",
          "DIRECTION",
          "We establish the strategy, visual direction, structure, and priorities for the project.",
        ],
        [
          "03",
          "DESIGN",
          "The idea begins taking shape through layouts, typography, color, imagery, and interaction.",
        ],
        [
          "04",
          "BUILD",
          "Approved designs become a responsive, functional digital experience.",
        ],
        [
          "05",
          "TEST",
          "We test screens, interactions, performance, responsiveness, and the final user experience.",
        ],
        [
          "06",
          "LAUNCH",
          "Final checks are complete. The countdown ends and your new digital presence is ready to launch.",
        ],
      ],

      final: "FINAL SEQUENCE",
      launch: "LAUNCH",
      start: "Start Your Launch ↗",
    },

    about: {
      label: "ABOUT",
      title1: "BEHIND THE",
      title2: "LAUNCH.",
      description:
        "The people helping turn ideas into brands, websites, and digital experiences.",

      alexRole: "FOUNDER / DESIGNER / DEVELOPER",
      alexLead: "",
      alexText1:
        "LAUNCHED by Alex is an independent digital studio built around a simple idea: good design should be beautiful, functional, and purposeful.",
      alexText2:
        "Every project is approached as a collaboration, combining creative direction, design, development, and strategy.",
      workWithUs: "Work With Us ↗",

      team: "THE TEAM",
      people1: "PEOPLE BEHIND",
      people2: "THE LAUNCH.",

      salesRole: "SALES / CUSTOMER SUPPORT",

      jenny:
        "Helping clients find the right services, understand the process, and stay connected from the first conversation through launch.",

      debbie:
        "Supporting clients throughout their experience and helping make communication, project coordination, and ongoing support simple.",

      together: "LET'S WORK TOGETHER",
      ready: "READY TO START?",
      readyDescription:
        "Tell us what you're working on and let's see what we can create together.",
      start: "Start a Project ↗",
    },

    contact: {
      label: "CONTACT",
      title1: "LET'S BUILD",
      title2: "SOMETHING.",
      description:
        "Tell us where you are, where you're trying to go, and what you're looking to create.",

      name: "YOUR NAME",
      namePlaceholder: "Your name",
      email: "EMAIL",
      emailPlaceholder: "you@company.com",

      need: "WHAT DO YOU NEED?",
      chooseService: "Choose a service",

      serviceOptions: [
        "Website Design",
        "Website Design + Development",
        "Brand Identity",
        "Creative & Multimedia",
        "Hosting & Maintenance",
        "Something Else",
      ],

      budget: "ESTIMATED BUDGET",
      chooseBudget: "Choose your budget",

      budgetOptions: [
        "Under $1,000",
        "$1,000 – $2,500",
        "$2,500 – $5,000",
        "$5,000+",
        "I'm not sure yet",
      ],

      message: "TELL US ABOUT YOUR PROJECT",
      messagePlaceholder:
        "What are you looking to build?",

      send: "SEND PROJECT INQUIRY ↗",
      development:
        "The form is currently in development mode.",

      direct: "DIRECT CONTACT",
      phone: "PHONE",

      accepting: "Accepting new projects",
      booking:
        "Currently booking upcoming launches.",

      alert:
        "Form received locally. We'll connect this to your business email before launch.",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      work: "Proyectos",
      services: "Servicios",
      process: "Proceso",
      about: "Nosotros",
      contact: "Contacto",
      start: "Iniciar Proyecto",
    },

    footer: {
      tagline: "DISEÑO • DESARROLLO • MARCA",
      backTop: "VOLVER ARRIBA ↑",
    },

    marquee:
      "DISEÑO WEB ✦ DESARROLLO ✦ MARCA ✦ LOGOTIPOS ✦ MULTIMEDIA ✦ HOSTING ✦ DISEÑO WEB ✦ DESARROLLO ✦ MARCA ✦ LOGOTIPOS ✦ MULTIMEDIA ✦ HOSTING ✦",

    home: {
      available: "DISPONIBLES PARA NUEVOS PROYECTOS",
      eyebrow: "WEB • MARCA • DIGITAL",
      hero1: "TU IDEA.",
      hero2: "LANZADA.",
      description:
        "Sitios web, marcas y experiencias digitales creados para convertir ideas ambiciosas en algo memorable.",
      start: "Iniciar Proyecto ↗",
      exploreWork: "Explorar Nuestro Trabajo",
      scroll: "DESLIZA PARA EXPLORAR",

      whatWeDo: "LO QUE HACEMOS",
      statement1: "NO SOLO CREAMOS",
      statement2: "SITIOS WEB.",
      statement3: "LOS LANZAMOS.",

      capabilities: "01 / CAPACIDADES",
      everything1: "Todo lo que necesitas",
      everything2: "para lanzar.",

      services: [
        {
          number: "01",
          title: "Diseño Web",
          description:
            "Experiencias digitales creadas alrededor de tu negocio.",
        },
        {
          number: "02",
          title: "Desarrollo",
          description:
            "Sitios web rápidos y adaptables creados para el mundo real.",
        },
        {
          number: "03",
          title: "Marca",
          description:
            "Logotipos e identidades diseñados para ser recordados.",
        },
        {
          number: "04",
          title: "Multimedia",
          description:
            "Contenido creativo que mantiene tu marca en movimiento.",
        },
      ],

      exploreServices: "Explorar Todos los Servicios ↗",

      why: "¿POR QUÉ LAUNCHED?",
      notJust1: "NO SOLO",
      notJust2: "OTRO",
      notJust3: "SITIO WEB.",

      benefits: [
        {
          number: "01",
          title: "HECHO PARA TI",
          description:
            "Cada proyecto se adapta a las necesidades de tu negocio.",
        },
        {
          number: "02",
          title: "UN SOLO PROCESO",
          description:
            "Estrategia, diseño, marca, desarrollo y lanzamiento, todo en un solo lugar.",
        },
        {
          number: "03",
          title: "INTEGRACIÓN PERFECTA",
          description:
            "Experiencias adaptables diseñadas para funcionar perfectamente en computadora, tableta y móvil.",
        },
        {
          number: "04",
          title: "DESPUÉS DEL LANZAMIENTO",
          description:
            "Hosting, mantenimiento, actualizaciones y soporte para mantener tu sitio avanzando.",
        },
      ],

      aboutLabel: "02 / NOSOTROS",
      about1: "EL BUEN DISEÑO",
      about2: "DEBE",
      about3: "HACER ALGO.",

      aboutLead:
        "LAUNCHED by Alex es un estudio digital enfocado en convertir ideas en realidad.",

      aboutText:
        "Desde tu primer logotipo hasta una presencia digital completa, cada proyecto combina diseño, tecnología y estrategia.",

      values: [
        ["01", "DISEÑAR", "Darle dirección a la idea."],
        ["02", "CREAR", "Convertir el concepto en realidad."],
        ["03", "LANZAR", "Llevarlo al mundo."],
      ],

      meetTeam: "Conoce al Equipo ↗",
      ourProcess: "Nuestro Proceso",
      haveIdea: "¿TIENES UNA IDEA?",
      lets: "VAMOS A",
      launchIt: "LANZARLA.",
    },

    work: {
      label: "PROYECTOS SELECCIONADOS",
      title1: "HECHO PARA",
      title2: "DESTACAR.",
      description:
        "Sitios web, identidades y experiencias digitales creados con propósito.",

      projects: [
        {
          number: "01",
          name: "LAUNCHED BY ALEX",
          type: "DISEÑO WEB / DESARROLLO / MARCA",
          image: "/project-launched.jpg",
          url: "http://launchedbyalex.com/",
        },
        {
          number: "02",
          name: "AD ASTRA SCHOLARS",
          type: "DISEÑO WEB / DESARROLLO",
          image: "/project-adastra.jpg",
          url: "https://www.adastrascholars.com/",
        },
        {
          number: "03",
          name: "DEMO DE SALÓN",
          type: "DISEÑO WEB / DESARROLLO",
          image: "/project-salon.jpg",
          url: "https://cuts-color-style.vercel.app/",
        },
        {
          number: "04",
          name: "DEMO DE MECÁNICA",
          type: "DISEÑO WEB / DESARROLLO",
          image: "/project-mechanic.jpg",
          url: "https://website-v4vm.vercel.app/",
        },
      ],

      comingSoon: "PRÓXIMAMENTE",
      next: "TU PROYECTO PODRÍA SER EL PRÓXIMO.",
      nextDescription:
        "¿Tienes algo en mente? Hagámoslo realidad.",
      start: "Iniciar Proyecto ↗",
    },

    servicesPage: {
      label: "SERVICIOS",
      title1: "DE LA IDEA",
      title2: "AL LANZAMIENTO.",
      description:
        "Opciones flexibles diseñadas para negocios en cualquier etapa.",

      mostPopular: "MÁS POPULAR",
      starting: "DESDE",

      services: [
        {
          number: "01",
          title: "Diseño Web",
          price: "$750",
          description:
            "Un sitio web completo y personalizado para negocios que necesitan una presencia digital limpia y profesional.",
          features: [
            "Diseño UI/UX Personalizado",
            "Desarrollo Adaptable",
            "Landing Pages",
            "Sitios para Negocios",
            "Portafolios",
            "Optimización Móvil",
          ],
        },
        {
          number: "02",
          title: "Diseño Web Avanzado",
          price: "$1,500",
          featured: true,
          description:
            "Sitios web personalizados con funcionalidad avanzada, interacciones y desarrollo adaptado a tus necesidades.",
          features: [
            "Todo en Diseño Web",
            "Desarrollo Personalizado",
            "Elementos Interactivos",
            "Animaciones Avanzadas",
            "Integraciones con Terceros",
            "Fundamentos de SEO",
          ],
        },
        {
          number: "03",
          title: "Identidad de Marca",
          price: "$750",
          description:
            "Una identidad visual cohesiva diseñada para hacer que tu negocio sea reconocible.",
          features: [
            "Diseño de Logotipo",
            "Sistema de Colores",
            "Tipografía",
            "Dirección de Marca",
            "Guía de Marca",
            "Contenido para Redes",
          ],
        },
        {
          number: "04",
          title: "Creatividad + Multimedia",
          price: "$250",
          description:
            "Contenido digital creativo que lleva tu marca más allá del sitio web.",
          features: [
            "Gráficos Digitales",
            "Contenido Social",
            "Materiales de Marketing",
            "Motion Graphics",
            "Diseño de Presentaciones",
            "Contenido Multimedia",
          ],
        },
      ],

      ongoing: "SOPORTE CONTINUO",
      keep1: "MANTÉN TU SITIO",
      keep2: "EN ÓRBITA.",
      keepDescription:
        "Hosting, mantenimiento, actualizaciones y soporte después del lanzamiento.",

      recommended: "RECOMENDADO",
      month: "/ MES",
      getStarted: "COMENZAR ↗",

      memberships: [
        {
          name: "ESENCIAL",
          price: "49",
          features: [
            "Hosting Administrado",
            "Seguridad SSL",
            "Copias de Seguridad",
            "Actualizaciones de Software",
            "Soporte Básico",
          ],
        },
        {
          name: "LAUNCH+",
          price: "99",
          featured: true,
          features: [
            "Todo en Esencial",
            "Actualizaciones de Contenido",
            "Monitoreo de Rendimiento",
            "Soporte Prioritario",
            "Revisión Mensual del Sitio",
          ],
        },
        {
          name: "PRO",
          price: "199",
          features: [
            "Todo en Launch+",
            "Hasta 2 Horas de Actualizaciones al Mes",
            "Revisión Mensual de Analíticas",
            "Soporte Prioritario",
            "Programación Prioritaria",
          ],
        },
      ],

      unsure: "¿NO SABES QUÉ NECESITAS?",
      unsureDescription:
        "Cuéntanos qué quieres crear. Juntos encontraremos el enfoque adecuado.",
      talk: "Contáctanos ↗",
    },

    process: {
      label: "EL PROCESO",
      title1: "DESDE CERO",
      title2: "AL LANZAMIENTO.",
      description:
        "Un proceso claro mantiene cada proyecto avanzando en la dirección correcta.",

      steps: [
        [
          "01",
          "DESCUBRIR",
          "Conocemos tu negocio, objetivos, audiencia, competencia y cómo debería verse el éxito.",
        ],
        [
          "02",
          "DIRECCIÓN",
          "Definimos la estrategia, dirección visual, estructura y prioridades del proyecto.",
        ],
        [
          "03",
          "DISEÑO",
          "La idea comienza a tomar forma mediante diseños, tipografía, color, imágenes e interacción.",
        ],
        [
          "04",
          "DESARROLLO",
          "Los diseños aprobados se convierten en una experiencia digital adaptable y funcional.",
        ],
        [
          "05",
          "PRUEBAS",
          "Probamos pantallas, interacciones, rendimiento, adaptabilidad y la experiencia final del usuario.",
        ],
        [
          "06",
          "LANZAMIENTO",
          "Las revisiones finales están completas. La cuenta regresiva termina y tu nueva presencia digital está lista para lanzarse.",
        ],
      ],

      final: "SECUENCIA FINAL",
      launch: "LANZAMIENTO",
      start: "Inicia Tu Lanzamiento ↗",
    },

    about: {
      label: "NOSOTROS",
      title1: "DETRÁS DEL",
      title2: "LANZAMIENTO.",
      description:
        "Las personas que ayudan a convertir ideas en marcas, sitios web y experiencias digitales.",

      alexRole: "FUNDADOR / DISEÑADOR / DESARROLLADOR",
      alexLead: "",
      alexText1:
        "LAUNCHED by Alex es un estudio digital independiente basado en una idea simple: el buen diseño debe ser atractivo, funcional y tener un propósito.",
      alexText2:
        "Cada proyecto se desarrolla como una colaboración que combina dirección creativa, diseño, desarrollo y estrategia.",
      workWithUs: "Trabaja con Nosotros ↗",

      team: "EL EQUIPO",
      people1: "PERSONAS DETRÁS",
      people2: "DEL LANZAMIENTO.",

      salesRole: "VENTAS / ATENCIÓN AL CLIENTE",

      jenny:
        "Ayudando a los clientes a encontrar los servicios adecuados, entender el proceso y mantenerse conectados desde la primera conversación hasta el lanzamiento.",

      debbie:
        "Apoyando a los clientes durante toda su experiencia y haciendo que la comunicación, coordinación del proyecto y soporte continuo sean simples.",

      together: "TRABAJEMOS JUNTOS",
      ready: "¿LISTO PARA EMPEZAR?",
      readyDescription:
        "Cuéntanos en qué estás trabajando y veamos qué podemos crear juntos.",
      start: "Iniciar Proyecto ↗",
    },

    contact: {
      label: "CONTACTO",
      title1: "VAMOS A CREAR",
      title2: "ALGO.",
      description:
        "Cuéntanos dónde estás, hacia dónde quieres llegar y qué quieres crear.",

      name: "TU NOMBRE",
      namePlaceholder: "Tu nombre",
      email: "CORREO ELECTRÓNICO",
      emailPlaceholder: "tu@empresa.com",

      need: "¿QUÉ NECESITAS?",
      chooseService: "Selecciona un servicio",

      serviceOptions: [
        "Diseño Web",
        "Diseño Web Avanzado",
        "Identidad de Marca",
        "Creatividad y Multimedia",
        "Hosting y Mantenimiento",
        "Algo Diferente",
      ],

      budget: "PRESUPUESTO ESTIMADO",
      chooseBudget: "Selecciona tu presupuesto",

      budgetOptions: [
        "Menos de $1,000",
        "$1,000 – $2,500",
        "$2,500 – $5,000",
        "$5,000+",
        "Aún no estoy seguro",
      ],

      message: "CUÉNTANOS SOBRE TU PROYECTO",
      messagePlaceholder:
        "¿Qué estás buscando crear?",

      send: "ENVIAR SOLICITUD ↗",
      development:
        "El formulario está actualmente en modo de desarrollo.",

      direct: "CONTACTO DIRECTO",
      phone: "TELÉFONO",

      accepting: "Aceptando nuevos proyectos",
      booking:
        "Actualmente reservando próximos lanzamientos.",

      alert:
        "Formulario recibido localmente. Lo conectaremos a tu correo comercial antes del lanzamiento.",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("launched-language") || "en";
  });

  useEffect(() => {
    localStorage.setItem(
      "launched-language",
      language
    );

    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}