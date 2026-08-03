export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
  imageAlt: string;
};

export type CodeProject = {
  title: string;
  category: string;
  status: string;
  description: string;
  features: string[];
  tags: string[];
  url: string;
};

export const portfolio = {
  name: "Kunal Shrestha",
  initials: "KS",
  role: "Full-Stack Developer",
  location: "Nepal",
  email: "kunalshrestha377@gmail.com",
  availability: "Open to full-stack opportunities",
  currentlyExploring: "scalable full-stack architecture",
  intro:
    "I’m Kunal Shrestha, a full stack developer who turns ideas into responsive web applications that are ready for production. My work covers polished user interfaces, secure APIs, and scalable database architecture. I use Next.js, React, TypeScript, Node.js, Express.js, MongoDB, and Payload CMS to build fast, reliable applications that are easy to use and maintain.",
  resumeUrl: "/Kunal-Shrestha-Resume.pdf",
  about: [
    "I build scalable web applications using Next.js, React, TypeScript, Node.js, Express.js, MongoDB, and Payload CMS.",
    "My work includes REST API development, JWT authentication, headless CMS integration, reusable UI components, and dependable loading and error states. I enjoy taking a feature from database design through to a polished responsive interface.",
    "I currently work as a Junior Web Developer at Arksh Group, following three months there as a Web Developer Intern. Through these roles, I have contributed across the full development lifecycle and built three websites from scratch: Sulux Centre, Arksh Group, and Sulux Hour. Each project involved turning business requirements into responsive, production-ready digital experiences.",
  ],
  marquee: [
    "Next.js",
    "React & TypeScript",
    "Node.js & Express",
    "MongoDB",
    "Payload CMS",
  ],
  stats: [
    { value: "Full", label: "Stack development focus" },
    { value: "03", label: "Websites built from scratch" },
    { value: "02", label: "Websites currently live" },
    { value: "02", label: "Featured technical repositories" },
  ],
  projects: [
    {
      title: "Sulux Centre",
      category: "Luxury e-commerce",
      year: "Live",
      description:
        "Designed and developed a premium e-commerce experience from scratch for one of Nepal’s established luxury watch retailers. The platform brings together curated collections, detailed product pages, limited editions, promotional pricing, showroom information, service-centre content, and a responsive online-shopping journey.",
      tags: ["E-commerce", "Product catalog", "Luxury retail", "Responsive UI"],
      url: "https://suluxcentre.com/",
      image: "/projects/sulux-centre.jpg",
      imageAlt: "Sulux Centre luxury watch website homepage",
    },
    {
      title: "Arksh Group",
      category: "Corporate website",
      year: "Live",
      description:
        "Built a complete corporate website from scratch for a diversified Nepalese business group. The site organizes the company’s history, leadership, business verticals, services, involvements, news, blogs, gallery, careers, and contact information into a clear and responsive digital presence.",
      tags: [
        "Full-stack",
        "Corporate platform",
        "Content architecture",
        "Responsive UI",
      ],
      url: "https://arkshgroup.com/",
      image: "/projects/arksh-group.png",
      imageAlt: "Arksh Group website homepage",
    },
    {
      title: "Sulux Hour",
      category: "Luxury e-commerce",
      year: "Preview deployment",
      description:
        "Created a modern retail website from scratch around the idea of accessible luxury. The responsive storefront brings watches, signature fragrances, and designer eyewear into one consistent shopping experience, with clear category navigation, product discovery, brand storytelling, service information, and direct customer-contact options.",
      tags: [
        "E-commerce",
        "Multi-category retail",
        "Responsive UI",
        "In deployment",
      ],
      url: "https://sulux-hour-client.vercel.app/",
      image: "/projects/sulux-hour.png",
      imageAlt: "Sulux Hour e-commerce website homepage",
    },
  ] satisfies Project[],
  otherProjects: [
    {
      title: "Real-Time Chat App",
      category: "Full-stack application",
      status: "Source available",
      description:
        "A complete real-time group chat application with separate TypeScript frontend and backend codebases. It demonstrates authentication, structured API design, persistent data, asynchronous client state, and live communication between connected users.",
      features: [
        "Created user registration and login flows with JWT access tokens and protected frontend routes.",
        "Built user profile APIs for listing users, viewing profiles, editing account details, and deleting an account.",
        "Implemented a shared group room with instant two-way messaging through Socket.IO.",
        "Persisted messages in MongoDB and added paginated message-history retrieval through the REST API.",
        "Tracked connected users and broadcast online/offline presence with live user and message statistics.",
        "Added schema-based validation, authentication middleware, centralized error handling, and environment validation.",
        "Managed server data with TanStack Query and built forms using Formik and Zod.",
      ],
      tags: [
        "React 19",
        "TypeScript",
        "Socket.IO",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "TanStack Query",
        "Material UI",
      ],
      url: "https://github.com/Zhaskii/Chat-App",
    },
    {
      title: "Property Dashboard",
      category: "MERN application",
      status: "Source available",
      description:
        "A full-stack property listing and favourites-management system. The application separates the React client from a modular Express backend and gives authenticated users a responsive way to explore properties and maintain a personal shortlist.",
      features: [
        "Implemented JWT-based registration, login, and authenticated access to user-specific data.",
        "Built a property catalogue that loads available listings from the Express and MongoDB backend.",
        "Created add-to-favourites, favourites-list, and remove-from-favourites API workflows.",
        "Updated favourite state instantly in the interface without requiring a full page reload.",
        "Kept property creation behind the backend API to prevent unauthorized public submissions.",
        "Organized the server into controllers, models, middleware, routes, and reusable business logic.",
        "Connected the typed React client to the API with Axios and added toast-based user feedback.",
      ],
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Axios",
      ],
      url: "https://github.com/Zhaskii/Tech-Task",
    },
  ] satisfies CodeProject[],
  experience: [
    {
      period: "Feb 2026 — Current",
      role: "Junior Web Developer",
      company: "Arksh Group",
      summary: [
        "Build and maintain full-stack applications with Next.js, React, TypeScript, Node.js, Express.js, and MongoDB.",
        "Turn business requirements into responsive interfaces, reusable components, REST APIs, and database-driven features.",
        "Configure Payload CMS content workflows while improving application performance and maintainability.",
      ],
    },
    {
      period: "Nov 2025 — Feb 2026",
      role: "Web Developer Intern",
      company: "Arksh Group",
      summary: [
        "Built and refined responsive React interfaces for web applications across different screen sizes.",
        "Integrated Node.js and Express REST APIs with MongoDB-backed features and dependable UI states.",
        "Fixed bugs and collaborated on frontend-backend tasks through Git and GitHub workflows.",
      ],
    },
  ],
  experienceIntro:
    "Each role has strengthened how I approach real projects, from understanding requirements and building responsive interfaces to connecting APIs, managing content, and improving production applications.",
  skillsIntro:
    "I work across the application stack, covering responsive interfaces, state management, APIs, authentication, CMS configuration, and databases.",
  skills: [
    {
      category: "Frontend",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Payload CMS",
        "REST APIs",
        "JWT",
        "bcrypt",
      ],
    },
    {
      category: "Database & Data",
      items: [
        "MongoDB",
        "Mongoose",
        "Axios",
        "React Query",
        "CRUD",
        "async/await",
      ],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code", "npm", "Figma"],
    },
  ],
  education: [
    {
      period: "2022 — Present",
      title: "BIT (Hons)",
      institution: "Phoenix College of Management",
      details: "Maitidevi, Lalitpur",
    },
    {
      period: "February 2025",
      title: "MERN Stack Development Course",
      institution: "Broadways Infosys",
      details: "MongoDB, Express.js, React, Node.js, and REST APIs",
    },
    {
      period: "April 2024",
      title: "Web Design Course",
      institution: "Broadways Infosys",
      details: "HTML, CSS, JavaScript, Figma, and responsive design",
    },
  ],
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/kunal-shrestha-b37aa7263/",
    },
    { label: "GitHub", url: "https://github.com/Zhaskii" },
  ],
};
