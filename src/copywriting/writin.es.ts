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
    title1: "Ingeniero",
    title2: "Desarrollador Full Stack",
  },
  download: "Descargar",
  about: {
    title: "SOBRE MI",
    intro:
      "Graduado de la Universidad Tecnológica Nacional como desarrollador Full Stack, desarrollo aplicaciones React tambien desarrollo APIs con Express.js & Node.js usando TypeScript o JavaScript. Soy un apasionado en la lógica y en el constante aprendizaje de nuevas tecnologías.",
    subtitle: "Full Stack Developer ",
    birthdayTitle: "Cumpleaños: ",
    birthday: "19 Octubre 1993",
    ageTitle: "Edad: ",
    age: "28",
    educationTitle: "Educación: ",
    education: "Universitario",
    cityTitle: "Ciudad: ",
    city: "Resistencia, Argentina",
    emailTitle: "Correo: ",
    email: "cristianlair@gmail.com",
    personalInfo:
      "Filosofía de vida siempre positivo, entusiasta y decidido, confío en que el trabajo duro brinda los mejores resultados"
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
      title: "Freelance: ",
      1: {
        title: "Freelance",
        period: "Jul 2021 - Jul 2022",
        institution: "Freelance - Chaco, Argentina.",
        description:
          "Freelance application development.",
      },
      2: {
        title: "Apex américa",
        period: "Dic 2019 - Mar 2020",
        institution: "Empresa privada - Argentina.",
        description1:
          "Servicio tecnico para fibercorp.",
        
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
        title: "Countries App ",
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
            "Aplicacion desarrollada con React , JavaScript, proyecto realizado de manera freelance durante el curso de desarollador Full Stack, Henry.",
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
