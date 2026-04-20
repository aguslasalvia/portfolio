export const portfolio = {
  name: 'Agustin Lasalvia',
  title: 'Backend Developer',
  location: 'Montevideo - Uruguay',
  greeting: 'Hola, soy',
  description: "I'm a Junior Backend Developer with a passion for creating and solving problems. Ready for new adventures!",
  cvLink: '/Agustin Lasalvia 2025 CV.pdf',

  socials: {
    linkedin: 'https://www.linkedin.com/in/agustin-lasalvia/',
    github: 'https://github.com/AgusLasalvia',
    instagram: 'https://www.instagram.com/agustin.lasalvia/'
  },

  about: [
    "I'm a Junior Backend Developer with a passion for creating and solving problems, Ready for new adventures!",
    'I have experience building web applications with React, Node.js, and various backend technologies. I enjoy tackling complex challenges and continuously learning new tools and frameworks.',
    "Currently focused on expanding my skills in Go and building more full-stack applications."
  ],

  skills: [
    { name: 'TypeScript', projects: 'QUITEL 2023, SorvisLater, Recisaver App' },
    { name: 'Node.js', projects: 'QUITEL 2023, SorvisLater, Recisaver Server' },
    { name: 'React', projects: 'QUITEL 2023, Chemistry Net' },
    { name: 'C#', projects: 'Tambo, YourDelivery,Chemistry Net' },
    { name: 'Python', projects: '' },
    { name: 'MySQL', projects: 'Tambo, YourDelivery' },
    { name: 'Go', projects: 'Research Equipment Usage Log, UniWave' },
  ],

  experience: [
    {
      title: 'IT Technician',
      company: 'UDELAR',
      period: '2021 - Present',
      location: 'Montevideo - Uruguay',
      description: 'Properly configure and install the hardware and software on the relevant devices, and configure the software and drivers as necessary. Ensure proper maintenance and repair of all IT equipment and accessories, including routers and printers, etc.'
    },
    {
      title: 'Backend Developer',
      company: 'Freelance',
      period: '2023',
      location: 'Montevideo - Uruguay',
      description: 'Responsible for the design, development, implementation, and updating of various backend systems. Utilized development tools and programming languages such as Node.js for backend logic and MongoDB for data storage, including proper data validation.'
    }
  ],

  projects: [
    {
      title: 'QUITEL 2023',
      description: 'Conference management system for QUITEL 2023, featuring registration, schedule management, and abstract submissions.',
      tech: ['React', 'NodeJS', 'MongoDB', 'Typescript', 'Express.js'],
      github: 'https://github.com/AgusLasalvia/Congress-2023',
      demo: 'https://quitel.aguslasalvia.online/'
    },
    {
      title: 'SorvisLater',
      description: 'A new Ticket Tracker solution, created for Minecraft, but made for everything build in React and NodeJS.',
      tech: ['NodeJS', 'MySQL', 'Express', 'Typescript', 'React'],
      github: 'https://github.com/AgusLasalvia/SorviceLater',
      demo: 'https://sorvislater.netlify.app/login'
    },
    {
      title: 'Tambo',
      description: 'Dairy farm management system built with .NET, handling inventory, production, and sales tracking.',
      tech: ['C#', '.NET', 'MVC'],
      github: 'https://github.com/AgusLasalvia/Tambo',
      demo: 'https://tambo.onrender.com/'
    },
    {
      title: 'YourDelivery',
      description: 'Package delivery management system with real-time order tracking and restaurant integration.',
      tech: ['C#', '.NET', 'MVC', 'Entity Framework', 'CSS', 'HTML'],
      github: 'https://github.com/AgusLasalvia/YourDelivery',
      demo: 'https://yourdelivery.aguslasalvia.online/'
    },
    {
      title: 'Research Equipment Usage Log',
      description: 'WebApp for a Research Equipment Usage Log to store the usage and condition of a list of lab equipment',
      tech: ['HTML', 'CSS', 'JavaScript', 'Go', 'Gin', 'Bootstrap', 'SQLite', 'Linux'],
      github: 'https://github.com/AgusLasalvia/bitacora-cefi-go',
      demo: ''
    },
    {
      title: 'UniWave',
      description: 'A social network designed for Uruguayan university students to connect, share posts, and interact within an academic community.',
      tech: ['React Native', 'Expo', 'Typescript', 'Go', 'JWT', 'Firebase', 'MinIO'],
      github: 'https://github.com/AgusLasalvia/uniwave-social-media',
      demo: 'https://uniwave.aguslasalvia.online'
    },
    {
      title: "Chemistry Net",
      description: "A solution for the landing page of uruguayan University of Chemistry - UDELAR, it's a CMS basic solution using ASP.NET and React. Implementing Clean Architecture and for the UI, I used the opencode LLM model, that way I can focused on the entire backend",
      tech: ['HTML', 'CSS', 'ASP.NET', 'C#', 'Entity Framework', 'SQLite'],
      github: 'https://github.com/aguslasalvia/chemistry-net',
      demo: 'https://fq.aguslasalvia.online'
    }
  ],

  contact: {
    text: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    email: 'contact@aguslasalvia.online'
  }
};
