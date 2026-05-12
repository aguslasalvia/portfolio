export const portfolio = {
  name: 'Agustin Lasalvia',
  title: 'Backend Developer',
  location: 'Montevideo, Uruguay',
  greeting: 'Hola, soy',
  description: "Junior Backend Developer focused on building reliable systems. Currently expanding into the frontend world, one component at a time.",
  cvLink: '/Agustin_Lasalvia_CV.pdf',

  socials: {
    linkedin: 'https://www.linkedin.com/in/agustin-lasalvia/',
    github: 'https://github.com/AgusLasalvia',
    instagram: 'https://www.instagram.com/agustin.lasalvia/'
  },

  about: [
    "I'm a Junior Backend Developer with a passion for building and solving problems. I enjoy designing systems that are clean, reliable, and maintainable.",
    'My experience spans web applications built with Node.js, Go, and .NET. I like tackling complex backend challenges and continuously learning new tools.',
    "Currently focused on expanding my skills in Go and exploring more of the frontend ecosystem — building full-stack projects along the way.",
    "Above all, I'm driven by a constant desire to keep learning. Especially in an era shaped by AI, I believe staying curious and adaptable is just as important as any technical skill.",
  ],

  skills: {
    backend: [
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'Go' },
      { name: 'C# / .NET' },
      { name: 'Python' },
      { name: 'Express.js' },
    ],
    frontend: [
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Astro' },
      { name: 'HTML & CSS' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
    ],
    tools: [
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'SQLite' },
      { name: 'Git' },
      { name: 'Linux' },
      { name: 'Firebase' },
    ],
  },

  experience: [
    {
      title: 'IT Technician',
      company: 'UDELAR',
      period: '2021 – Present',
      location: 'Montevideo, Uruguay',
      description: 'Configure and install hardware and software on university devices. Ensure proper maintenance and repair of all IT equipment and accessories, including routers and printers. Additionally developed specific internal web services for the university using Go and Node.js.'
    },
    // {
    //   title: 'Full Stack Junior Developer',
    //   company: 'Freelance',
    //   period: '2026 – Present',
    //   location: 'Montevideo, Uruguay',
    //   description: 'Developing a landing page for a startup focused on pharmaceutical research and drug development. Responsible for the full frontend using Astro, React, TypeScript, and Tailwind CSS, and the backend mail service built in Go. Also in charge of network management and advising on domain configuration and mail routing.'
    // },
    {
      title: 'Backend Developer',
      company: 'Freelance',
      period: '2023',
      location: 'Montevideo, Uruguay',
      description: 'Designed, developed, and deployed backend systems using Node.js and MongoDB, including data validation, REST API design, and production deployments.'
    }
  ],

  projects: [
    {
      title: 'UniWave',
      description: 'A social network for Uruguayan university students to connect, share posts, and interact within an academic community.',
      tech: ['React Native', 'Expo', 'TypeScript', 'Go', 'JWT', 'Firebase', 'MinIO'],
      github: 'https://github.com/AgusLasalvia/uniwave-social-media',
      demo: 'https://uniwave.aguslasalvia.online'
    },
    {
      title: 'Chemistry Net',
      description: 'CMS for the Uruguayan Faculty of Chemistry (UDELAR), built with Clean Architecture and ASP.NET, using an LLM for the UI so I could focus entirely on the backend.',
      tech: ['ASP.NET', 'C#', 'Entity Framework', 'SQLite', 'HTML', 'CSS'],
      github: 'https://github.com/aguslasalvia/chemistry-net',
      demo: 'https://fq.aguslasalvia.online'
    },
    {
      title: 'QUITEL 2023',
      description: 'Conference management system featuring registration, schedule management, and abstract submissions.',
      tech: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express.js'],
      github: 'https://github.com/AgusLasalvia/Congress-2023',
      demo: 'https://quitel.aguslasalvia.online/'
    },
    {
      title: 'SorvisLater',
      description: 'A ticket tracker built originally for Minecraft, but flexible enough for any context.',
      tech: ['Node.js', 'MySQL', 'Express', 'TypeScript', 'React'],
      github: 'https://github.com/AgusLasalvia/SorviceLater',
      demo: 'https://sorvislater.netlify.app/login'
    },
    {
      title: 'YourDelivery',
      description: 'Package delivery management system with real-time order tracking and restaurant integration.',
      tech: ['C#', '.NET', 'MVC', 'Entity Framework', 'CSS', 'HTML'],
      github: 'https://github.com/AgusLasalvia/YourDelivery',
      demo: 'https://yourdelivery.aguslasalvia.online/'
    },
    {
      title: 'Tambo',
      description: 'Dairy farm management system handling inventory, production tracking, and sales.',
      tech: ['C#', '.NET', 'MVC'],
      github: 'https://github.com/AgusLasalvia/Tambo',
      demo: 'https://tambo.onrender.com/'
    },
    {
      title: 'Research Equipment Usage Log',
      description: 'Web app to track the usage and condition of laboratory equipment for a research center.',
      tech: ['Go', 'Gin', 'SQLite', 'Bootstrap', 'HTML', 'CSS', 'Linux'],
      github: 'https://github.com/AgusLasalvia/bitacora-cefi-go',
      demo: ''
    },
  ],

  contact: {
    text: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    email: 'contact@aguslasalvia.online'
  }
};
