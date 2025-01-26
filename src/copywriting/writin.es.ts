export const writingES = {
  menuTop: {
    home: "Inicio",
    about: "Sobre mi",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    name: "Cristian Lair",
    my: "Soy",
    title1: "Desarrollador Backend",
    title2: "Mentor",
  },
  download: "Descargar",
  about: {
    title: "SOBRE MI",
    intro:
      "Desarrollador Backend, utilizando Nodejs,GCP,Docker, bases de datos relacionales y no relacionales y lenguajes como TypeScript, JavaScript y Golang.",
    subtitle: "Backend Developer ",
    birthdayTitle: "Cumpleaños: ",
    birthday: "19 Octubre 1993",
    ageTitle: "Edad: ",
    age: "31",
    educationTitle: "Educación: ",
    education: "Universitario",
    cityTitle: "Ciudad: ",
    city: "Resistencia, Argentina",
    emailTitle: "Correo: ",
    email: "cristianlair@gmail.com",
    personalInfo:
      "Siempre positivo, entusiasta y decidido, confío en que el trabajo duro brinda los mejores resultados"
  },
  skills: {
    title: "HABILIDADES",
  },
  resume: {
    title: "CURRICULUM",
    education: {
      title: "Educación: ",
      1: {
        title: "Full Stack Developer",
        period: "2022-2022",
        institution: "Henry",
        description: "Bootcamp intensivo de JavaScript, +700 horas en 4 meses.",
      },
      2: {
        title: "Desarrollador web Full Stack",
        period: "2021-2021",
        institution: "Universidad tecnológica Nacional, Argentina",
      },
    },
    professionalExperiencie: {
      title: "Experiencia IT: ",
      1: {
        title: "Backend Developer",
        period: "Agosto 2022 - Actualidad",
        institution: "Ligo - Lima, Peru.",
        description:
          "Backend B2C y B2B developer.",
      },
      2: {
        title: "Mentor",
        period: "Enero 2023 - Actualidad",
        institution: "Henry - Buenos Aires,Argentina.",
        description1:
          "Corrector y acompañante de estudiantes.",
        
      },
    },
  },
  projects: {
    title: "PROYECTOS",
    projectsDetails: {
      category: "Categoria: ",
      client: "Cliente: ",
      date: "Fecha del Proyecto: ",
    },
    Myprojects: [
      {
        id: 1,
        title: "Pokemon App",
        category: "Web",
        client: "Henry",
        date: "Mayo, 2022",
        url: {
          title: "App pokemons",
          url: "https://github.com/CristianLair/PokeAPI-henry",
        },
        description: {
          title: "Descripción",
          content:
            "Este es el primer proyecto que desarrollé como programador, realizado con React y JavaScript, formó parte del curso Full Stack Developer en Henry.",
        },
      },
      {
        id: 2,
        title: "Countries App",
        category: "App",
        client: "Henry",
        date: "Junio, 2022",
        url: {
          title: "App Countries",
          url:
            "https://github.com/CristianLair/Proyecto-CountriesHenry",
          
        },
        description: {
          title: "Descripción",
          content:
            "Aplicacion desarrollada con React , JavaScript, proyecto realizado de manera freelance",
        },
      },
      {
        id: 3,
        title: "Marketplace - NFTS",
        category: "Web",
        client: "Henry",
        date: "Julio, 2020",
        url: {
          title: "Wallaby - Web",
          title2: "Wallaby - GitHub",
          url2: "https://github.com/CristianLair/Henry-Backend-PF",
          url: "https://wallabyapp.vercel.app/",
        },
        description: {
          title: "Descripción",
          content:
            "Este proyecto consume los mejores gif de la api de Moralis, las cuales brinda NFTS realesy los muestra, en la cual podes crear, comprar y vender NFTS. Tambien cuenta con la acuñación de contratos y el logín con Metamask para conectarte posteriormente a la blockchain",
        },
      },
    ],
  },
  contact: {
    title: "CONTACTO",
    location: {
      title: "Locación",
      info: "Chaco, Argentina, CP 3500.",
    },
    email: {
      title: "Email",
      info: "cristianlair@gmail.com",
    },
    linkedin: {
      title: "Linkedin",
      info: "/in/cristian-lair-developer/",
    },
    form: {
      name: "Tu Nombre",
      email: "Tu Correo",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar Mensaje",
      errorsInputs: {
        required: "Este campo es requerido.",
        email: "Ingrese un correo valido.",
        message: "Mensaje demasiado corto.",
        minLong: "Debe tener 3 caracteres como mínimo",
      },
      successMessage:
        "He recivido tu mensaje, te contestaré en breve, gracias!",
      errorMessage: "Ocurrio un error, por favor inténtelo mas tarde.",
    },
  },
  footer: {
    made: "Hecho con",
    by: "por",
    text: "Gracias por tu visita, espero que te haya gustado, saludos!",
  },
};

export default writingES;
