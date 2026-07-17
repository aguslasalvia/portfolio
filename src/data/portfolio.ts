export const portfolio = {
  name: 'Agustin Lasalvia',
  title: 'Software Developer',
  location: 'Montevideo, Uruguay',
  greeting: 'Hola, soy',
  description: "Software Developer with a strong backend foundation, currently expanding into the frontend world and growing comfortable on both sides of the stack.",
  cvLink: '/Agustin_Lasalvia_CV.pdf',

  socials: {
    linkedin: 'https://www.linkedin.com/in/agustin-lasalvia/',
    github: 'https://github.com/AgusLasalvia',
    instagram: 'https://www.instagram.com/agustin.lasalvia/'
  },

  about: [
    "I'm a Software Developer with a passion for building and solving problems. I enjoy designing systems that are clean, reliable, and maintainable.",
    'My experience spans web applications built with Node.js, Go, .NET, and Python. I like tackling complex backend challenges and continuously learning new tools.',
    "Currently expanding into the frontend world — building full-stack projects and growing comfortable on both sides of the stack.",
    "Above all, I'm driven by a constant desire to keep learning. Especially in an era shaped by AI, I believe staying curious and adaptable is just as important as any technical skill.",
  ],

  skills: {
    backend: [
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'Go' },
      { name: 'C# / .NET' },
      { name: 'Python' },
    ],
    frontend: [
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Astro' },
      { name: 'HTML & CSS' },

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
      period: '2023 – 2024',
      location: 'Montevideo, Uruguay',
      description: 'Designed, developed, and deployed backend systems using Node.js and MongoDB, including data validation, REST API design, and production deployments. Also designed and implemented a program to dynamically generate XML quiz files containing various question types for the Moodle learning platform using Python, in collaboration with UDELAR Chemistry departments.'
    }
  ],

  projects: [
    {
      title: 'Ravenkod',
      image: '/projects/ravenkod.png',
      description: 'Landing page for Ravenkod, a custom software studio building web, mobile, and desktop solutions. Features a Norse-forge inspired dark design with runic details and animated sections.',
      tech: ['React', 'TypeScript', 'Vite', 'CSS', 'React Router'],
      github: 'https://github.com/aguslasalvia/ravenkod.com',
      demo: 'https://ravenkod-com.vercel.app'
    },
    {
      title: 'QUITEL 2023',
      image: '/projects/quitel.png',
      description: 'Conference management system featuring registration, schedule management, and abstract submissions. Visually redesigned based on a design by <a href="https://www.linkedin.com/in/joaquingomezleites/" target="_blank" rel="noopener">Joaquín Gómez</a>, with this new iteration refined by Claude Fable, while I focused on the backend.',
      tech: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express.js'],
      github: 'https://github.com/AgusLasalvia/Congress-2023',
      demo: 'https://quitel.aguslasalvia.online/'
    },
    {
      title: 'SorvisLater',
      image: '/projects/sorvis.png',
      description: 'A solution originally created to help game server administrators — specifically Minecraft in this case — manage issue reports. Originally built with Express, later upgraded to NestJS. UI based on a design by <a href="https://www.linkedin.com/in/joaquingomezleites/" target="_blank" rel="noopener">Joaquín Gómez</a>.',
      tech: ['Node.js', 'SQLite', 'NestJS', 'TypeScript', 'React'],
      github: 'https://github.com/aguslasalvia/sorvicelater',
      demo: 'https://later.aguslasalvia.online/'
    },
    {
      title: 'Research Equipment Usage Log',
      image: '/projects/bitacora.png',
      description: 'Web app to track the usage and condition of laboratory equipment for a research center.',
      tech: ['Go', 'Gin', 'SQLite', 'Bootstrap', 'HTML', 'CSS', 'Linux'],
      github: 'https://github.com/AgusLasalvia/bitacora-cefi-go',
      demo: ''
    },
    {
      title: 'YourDelivery',
      image: '/projects/delivery.png',
      description: 'Package tracking and delivery management system with real-time order tracking. I was in charge of both the backend and the frontend, marking my first full hands-on experience with the frontend world.',
      tech: ['C#', '.NET', 'MVC', 'Entity Framework', 'SQL Server', 'CSS', 'HTML', 'JWT'],
      github: 'https://github.com/AgusLasalvia/YourDelivery',
      demo: 'https://yourdelivery.aguslasalvia.online/'
    },
    {
      title: 'UniWave',
      image: '/projects/uniwave.png',
      description: 'A social network for Uruguayan university students to connect, share posts, and interact within an academic community.',
      tech: ['React Native', 'Expo', 'TypeScript', 'Go', 'JWT', 'Firebase', 'MinIO'],
      github: 'https://github.com/AgusLasalvia/uniwave-social-media',
      demo: 'https://uniwave.aguslasalvia.online'
    },
    {
      title: 'Tambo',
      image: '/projects/tambo.png',
      description: 'Staff and livestock management system that tracks whether each animal has been vaccinated, and lets a foreman assign tasks to farmhands and review their task history.',
      tech: ['C#', '.NET', 'MVC', 'HTML', 'CSS'],
      github: 'https://github.com/AgusLasalvia/Tambo',
      demo: 'https://tambo.onrender.com/'
    },
  ],

  contact: {
    text: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    email: 'contact@aguslasalvia.online'
  }
};
