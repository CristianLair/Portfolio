export const writingEn = {
  menuTop: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    name: 'Cristian Lair',
    my: "I'm",
    title1: 'Backend Developer',
    title2: 'Mentor',
  },
  download: 'Download',
  about: {
    title: 'ABOUT',
    intro:
      'Backend developer, using Nodejs, GCP, Docker, relational and non-relational databases and languages ​​such as TypeScript, JavaScript and Golang.',
    subtitle: 'Backend Developer',
    birthdayTitle: 'Birthday: ',
    birthday: '19 october 1993',
    ageTitle: 'Age: ',
    age: '31',
    educationTitle: 'Education: ',
    education: 'University',
    cityTitle: 'City: ',
    city: 'Chaco, Argentina',
    emailTitle: 'Email: ',
    email: 'cristianlair@gmail.com',
    personalInfo:
      'Positive, enthusiastic and determined, I trust that hard work brings the best results',
  },
  skills: {
    title: 'SKILLS',
  },
  resume: {
    title: 'RESUME',
    education: {
      title: 'Education: ',
      1: {
        title: 'Full Stack Developer',
        period: '2022-2022',
        institution: 'Henry',
        description: 'JavaScript Immersive Bootcamp +700 hours in 4 months',
      },
      2: {
        title: 'Full Stack Developer',
        period: '2021-2021',
        institution: 'National University of the Northeast, Argentina',
      },
    },
    professionalExperiencie: {
      title: 'Experiencie IT: ',
      1: {
        title: "Backend Developer",
        period: "August 2022 - Present",
        institution: "Ligo - Lima, Peru.",
        description:
          "Backend B2C y B2B developer.",
      },
      2: {
        title: "Mentor",
        period: "January 2023 - Present",
        institution: "Henry - Buenos Aires, Argentina.",
        description1:
          "Corrector and student companion",
        
      },
    },
  },
  projects: {
    title: 'PROJECTS',
    projectsDetails: {
      category: 'Category: ',
      client: 'Client: ',
      date: 'Project Date: ',
    },
    Myprojects: [
      {
        id: 1,
        title: 'Pokemon App',
        category: 'Web',
        client: 'Henry',
        date: 'May, 2022',
        url: {
          title: 'Pokemon App',
          url: 'https://github.com/CristianLair/PokeAPI-henry',
        },
        description: {
          title: 'Description',
          content:
            'This is the first project I developed as a programmer, made with React and JavaScript, it was part of the Full Stack Developer course at Henry.',
        },
      },
      {
        id: 2,
        title: 'Countries App',
        category: 'App',
        client: 'Henry',
        date: 'Jun, 2022',
        url: {
          title: 'Countries App',
          url: 'https://github.com/CristianLair/Proyecto-CountriesHenry',
          
        },
        description: {
          title: 'Description',
          content:
            "Application developed with React, JavaScript, project carried out as a freelance during the Full Stack developer course, Henry",
        },
      },
      {
        id: 3,
        title: 'Marketplace - Wallaby',
        category: 'Web',
        client: 'Henry',
        date: 'July, 2022',
        url: {
          title: 'Wallaby - Web',
          title2: 'Wallaby - GitHub',
          url2: 'https://github.com/CristianLair/Henry-Backend-PF',
          url: 'https://wallabyapp.vercel.app/',
        },
        description: {
          title: 'Description',
          content:
            'This project consumes the best gifs from the Moralis api, which provides real NFTS and displays them, in which you can create, buy and sell NFTS. It also has the minting of contracts and the login with Metamask to later connect to the blockchain.',
        },
      },
    ],
  },
  contact: {
    title: 'CONTACT',
    location: {
      title: 'Location',
      info: 'Chaco, Argentina, CP 3500.',
    },
    email: {
      title: 'Email',
      info: 'cristianlair@gmail.com',
    },
    linkedin: {
      title: 'Linkedin',
      info: '/in/cristian-lair-developer/',
    },
    form: {
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      errorsInputs: {
        required: 'This field is required.',
        email: 'Enter a valid email address.',
        message: 'Message too short.',
        minLong: 'Must be at least 3 characters',
      },
      successMessage:
        'I have received your message, I will answer you shortly, thank you!',
      errorMessage: 'An error occurred, please try again later.',
    },
  },
  footer: {
    made: 'Made with',
    by: 'by',
    text: 'Thanks for your visit, I hope you liked it, greetings!',
  },
};

export default writingEn;
