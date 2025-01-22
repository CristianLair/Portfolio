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
    title1: 'Engineer',
    title2: 'Developer',
  },
  download: 'Download',
  about: {
    title: 'ABOUT',
    intro:
      'Graduated from the National Technological University as a Full Stack developer, I develop React applications as well as APIs with Express.js & Node.js using TypeScript or JavaScript. I am passionate about logic and constantly learning new technologies.',
    subtitle: 'Full Stack Developer',
    birthdayTitle: 'Birthday: ',
    birthday: '19 october 1993',
    ageTitle: 'Age: ',
    age: '28',
    educationTitle: 'Education: ',
    education: 'University',
    cityTitle: 'City: ',
    city: 'Chaco, Argentina',
    emailTitle: 'Email: ',
    email: 'cristianlair@gmail.com',
    personalInfo:
      'Philosophy of life always positive, enthusiastic and determined, I trust that hard work brings the best results',
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
      title: 'Professional Experiencie: ',
      1: {
        title: 'Freelance',
        period: 'July 2021 - July 2022',
        institution: 'Freelance - Chaco, Argentina.',
        description:
          ' Developed front-end applications for e-commerce (Android & Ios)',
      },
      2: {
        title: 'Apex américa',
        period: 'DEC 2019 - Mar 2020',
        institution: 'State private - Argentina.',
        description1:
          'Technical service for fibercorp.',
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
