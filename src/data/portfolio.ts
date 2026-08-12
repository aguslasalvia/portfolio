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
      title: 'FQ Mock',
      slug: 'fq-mock',
      latest: true,
      image: '/projects/fq.png',
      description: 'Mock redesign of the Facultad de Química (UDELAR) website as a CMS, letting admins manage news, events, and pages instead of relying on static content. Backend built by me; frontend built with Claude Code under my supervision.',
      longDescription: "An educational mock project reimagining UDELAR's Facultad de Química homepage as a proper CMS, similar in spirit to Drupal. Built with Clean Architecture in ASP.NET Core 8 and C#, split into Domain, Application, Infrastructure, and Web projects, with Entity Framework Core for persistence — SQLite was the engine chosen for its versatility, though EF Core means swapping in another database engine (SQL Server, PostgreSQL, etc.) would require no changes to the application logic. Authenticated admins manage news, events, academic announcements, and standalone routable pages, with group-scoped permissions controlling who can see and edit what — non-admin users only reach resources tied to their own group. The public-facing site mirrors a real faculty homepage: landing page, content feed, dynamic `/:slug` pages, and a contact map via Leaflet. I built the backend by hand, focusing on the Clean Architecture layering and domain logic, while the React 19 + TypeScript frontend (Vite, React Router 7, Tailwind CSS v4) was built with Claude Code under my supervision. Deliberately kept without test coverage or migrations, as a simplified learning exercise rather than a production system.",
      tech: ['C#', '.NET', 'Entity Framework', 'SQLite', 'Clean Architecture', 'React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS'],
      github: 'https://github.com/AgusLasalvia/chemistry-net',
      demo: 'https://fq.aguslasalvia.online'
    },
    {
      title: 'Ravenkod',
      slug: 'ravenkod',
      image: '/projects/ravenkod.png',
      description: 'Landing page for Ravenkod, a custom software studio building web, mobile, and desktop solutions. Features a Norse-forge inspired dark design with runic details and animated sections.',
      longDescription: 'The landing page for Ravenkod, a custom software studio I co-run that builds web, mobile, and desktop solutions. The single-page site walks through services, workflow, what sets the studio apart, the team, and contact, wrapped in a dark, Norse-forge inspired identity with runic details and an animated code window in the hero. Built with React 19, TypeScript, and Vite, with React Router handling navigation and a modular component structure — layouts, navbar, reusable section cards — that keeps the codebase easy to extend as the studio grows.',
      tech: ['React', 'TypeScript', 'Vite', 'CSS', 'React Router', 'Bun'],
      github: 'https://github.com/aguslasalvia/ravenkod.com',
      demo: 'https://ravenkod-com.vercel.app'
    },
    {
      title: 'DashCord',
      slug: 'dashcord',
      image: '/projects/dashcord.png',
      description: 'Cross-platform desktop app for managing YouTube playlists — search songs, build playlists, and play them back — backed by a local FastAPI + MongoDB server, with optional integration into a custom <a href="https://github.com/AgusLasalvia/discord-bot" target="_blank" rel="noopener">Discord music bot</a> I built.',
      longDescription: 'A cross-platform desktop app for searching YouTube, building playlists, and playing them back locally, packaged with Tauri v2 around a React 19 + TypeScript client so it stays lightweight on Windows, macOS, and Linux. It talks to a FastAPI + MongoDB backend handling auth (JWT) and playlist persistence, and optionally plugs into a custom <a href="https://github.com/AgusLasalvia/discord-bot" target="_blank" rel="noopener">Discord music bot</a> I built, so the same playlists can be queued straight into a voice channel. GitHub Actions builds and publishes releases for all three desktop platforms automatically.',
      tech: ['React', 'TypeScript', 'Tauri', 'Redux Toolkit', 'FastAPI', 'Python', 'MongoDB', 'JWT', 'Bun'],
      github: 'https://github.com/AgusLasalvia/DashCord',
      demo: 'https://dashcord.aguslasalvia.online'
    },
    {
      title: 'QUITEL 2023',
      slug: 'quitel',
      image: '/projects/quitel.png',
      description: 'Conference management system featuring registration, schedule management, and abstract submissions. Visually redesigned based on a design by <a href="https://www.linkedin.com/in/joaquingomezleites/" target="_blank" rel="noopener">Joaquín Gómez</a>, with this new iteration refined by Claude Fable, while I focused on the backend.',
      longDescription: 'Registration platform for the XLVI International Congress of Theoretical Chemists of Latin Expression, built with UDELAR\'s Bioinformatics department. It covers the full attendee journey — pre-registration, full registration for confirmed participants and guests, and an abstract/poster submission flow the organizing committee uses to review academic work. The Node.js + Express backend sits on MongoDB, chosen deliberately over a relational database so the schema could flex around the varied shapes conference registrations and submissions tend to take. Frontend originally designed by <a href="https://www.linkedin.com/in/joaquingomezleites/" target="_blank" rel="noopener">Joaquín Gómez</a>, with this iteration refined by Claude Fable, while I focused on the backend.',
      tech: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express.js', 'Bun'],
      github: 'https://github.com/AgusLasalvia/Congress-2023',
      demo: 'https://quitel.aguslasalvia.online/'
    },
    {
      title: 'SorvisLater',
      slug: 'sorvislater',
      image: '/projects/sorvis.png',
      description: 'A ticketing system for IT support teams, inspired by my own experience working in IT support. It\'s a simplified example built for learning purposes — far from the maturity of the tools actually used in the industry today. Originally built with Express, later upgraded to NestJS. UI based on a design by <a href="https://www.linkedin.com/in/joaquingomezleites/" target="_blank" rel="noopener">Joaquín Gómez</a>.',
      longDescription: 'A ServiceNow-style ticketing system for IT support desks, inspired by my own time working in IT support and the workflows I saw agents rely on day to day. Tickets carry status, priority, urgency, and impact; agents and admins handle assignment; and a knowledge base surfaces solutions to recurring problems. It\'s meant as a learning project rather than a production tool — a simplified take on the concept, well short of what platforms like ServiceNow, Jira Service Management, or Zendesk actually offer today. The backend started in Express with MySQL and was later migrated to NestJS with TypeORM and SQLite, which is now the recommended version since it needs no external database setup to run locally. UI based on a design by <a href="https://www.linkedin.com/in/joaquingomezleites/" target="_blank" rel="noopener">Joaquín Gómez</a>.',
      tech: ['Node.js', 'SQLite', 'NestJS', 'TypeScript', 'React', 'Bun'],
      github: 'https://github.com/aguslasalvia/sorvicelater',
      demo: 'https://later.aguslasalvia.online/'
    },
    {
      title: 'Research Equipment Usage Log',
      slug: 'research-equipment-usage-log',
      image: '/projects/bitacora.png',
      description: 'Web app to track the usage and condition of laboratory equipment for a research center.',
      longDescription: "Built for CeFI (Centro de Formación e Investigación) at UDELAR to track who used which piece of lab equipment, when, and in what condition. Supports quick record entry, per-record detail views, a full chronological table, and search by date, user, or equipment. Per the client's requirement, it runs fully offline inside the facility with no server dependency beyond the local Go binary — CSS and JavaScript are deliberately embedded directly in the HTML templates instead of served as separate static assets, keeping deployment down to a single binary plus a local SQLite file.",
      tech: ['Go', 'Gin', 'SQLite', 'Bootstrap', 'HTML', 'CSS', 'Linux'],
      github: 'https://github.com/AgusLasalvia/bitacora-cefi-go',
      demo: ''
    },
    {
      title: 'YourDelivery',
      slug: 'yourdelivery',
      image: '/projects/delivery.png',
      description: 'Package tracking and delivery management system with real-time order tracking. I was in charge of both the backend and the frontend, marking my first full hands-on experience with the frontend world.',
      longDescription: 'A nationwide package tracking and delivery management platform with distinct views for administrators, employees, and customers. Shipments move through IN_PROCESS and COMPLETED states, employees log stage-by-stage comments as a package moves through the network, and the system automatically flags whether urgent 24-hour deliveries are on track to meet their SLA. Built end to end — backend and frontend, my first hands-on frontend work — with C#, ASP.NET MVC, and SQL Server, structured into clean layers (Core, DTO, Presentation) to keep business logic separate from delivery mechanics.',
      tech: ['C#', '.NET', 'MVC', 'Entity Framework', 'SQL Server', 'CSS', 'HTML', 'JWT'],
      github: 'https://github.com/AgusLasalvia/YourDelivery',
      demo: 'https://yourdelivery.aguslasalvia.online/'
    },
    {
      title: 'UniWave',
      slug: 'uniwave',
      image: '/projects/uniwave.png',
      description: 'A social network for Uruguayan university students to connect, share posts, and interact within an academic community.',
      longDescription: "A social network built to help Uruguayan university students connect across institutions, share posts, and find people with shared interests. The mobile app is React Native with Expo; the backend is Go with Gin, backed by PostgreSQL through GORM — with schema migrations run automatically on startup — and MinIO for self-hosted image storage. Auth is JWT-based with bcrypt password hashing and email activation sent through Gmail, and the backend's dependencies (Postgres, MinIO) run through Docker Compose for local development, though the API itself runs natively without containers.",
      tech: ['React Native', 'Expo', 'TypeScript', 'Go', 'JWT', 'Firebase', 'MinIO', 'Bun'],
      github: 'https://github.com/AgusLasalvia/uniwave-social-media',
      demo: 'https://uniwave.aguslasalvia.online'
    },
    {
      title: 'Tambo',
      slug: 'tambo',
      image: '/projects/tambo.png',
      description: 'Staff and livestock management system that tracks whether each animal has been vaccinated, and lets a foreman assign tasks to farmhands and review their task history.',
      longDescription: 'A livestock and staff management app built as a final project for Programming 2 at Universidad ORT, together with Facundo Colombi. Lets a foreman register cattle, manage farmhands, and assign and track tasks per employee. Built with C# and .NET using MVC with Razor views, keeping business logic in a dedicated domain layer separate from the web layer. The UI sits on top of Bootstrap 5 with a custom green-toned design system — glassmorphism dashboard tiles, gradient table headers, status badges, and full-screen pastoral hero imagery on the auth screens.',
      tech: ['C#', '.NET', 'MVC', 'HTML', 'CSS'],
      github: 'https://github.com/AgusLasalvia/Tambo',
      demo: 'https://tambo.onrender.com/'
    },
    {
      title: 'MemeWars',
      slug: 'memewars',
      image: '/projects/memewars.png',
      description: 'App to create rooms where users upload memes and vote for their favorites, with a per-room ranking. Go backend, React frontend served by the same binary.',
      longDescription: 'An app for creating rooms where users upload memes and vote on their favorites, with a live ranking per room. The backend is Go with Gin and GORM over SQLite, exposing a REST API for rooms, users, memes, and votes, with uploaded images stored on disk and served statically. The frontend is a React 19 + TypeScript SPA built with Vite, using React Router for navigation between the entry, lobby, room, and ranking pages. The frontend build is bundled straight into the Go binary at build time, so the whole app — API and UI — ships and runs as a single self-contained executable.',
      tech: ['Go', 'Gin', 'GORM', 'SQLite', 'React', 'TypeScript', 'Vite', 'React Router', 'Bun'],
      github: 'https://github.com/aguslasalvia/memewars',
      demo: 'https://memewars.aguslasalvia.online'
    },
  ],

  contact: {
    text: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    email: 'contact@aguslasalvia.online'
  }
};

// Derived from the data above so components always match its real shape —
// if a field is renamed or removed in `portfolio` above, these update automatically.
export type Project = (typeof portfolio.projects)[number];
export type ExperienceEntry = (typeof portfolio.experience)[number];
