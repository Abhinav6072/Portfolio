// ==========================================
// NAVIGATION
// ==========================================
export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// ==========================================
// HERO STATS
// ==========================================
export const heroStats = [
  { label: "Projects Built", value: 15, suffix: "+", icon: "🚀" },
  { label: "Technologies", value: 20, suffix: "+", icon: "⚡" },
  { label: "Problems Solved", value: 100, suffix: "+", icon: "🧠" },
];

// ==========================================
// TYPING ANIMATION ROLES
// ==========================================
export const typingRoles = [
  "Full Stack Engineer",
  "MERN Stack Developer",
  "React Specialist",
  "Node.js Architect",
  "API Developer",
  "UI/UX Craftsman",
  "Problem Solver",
];

// ==========================================
// PROJECTS
// ==========================================
export const projects = [
  {
    id: "smart-elearning",
    title: "Smart E-Learning Platform",
    tagline: "Next-gen education powered by modern web tech",
    description:
      "A comprehensive full-stack e-learning platform enabling students to enroll in courses, watch video lectures, take quizzes, and track progress — all in real-time.",
    problem:
      "Traditional e-learning platforms lack personalization, real-time progress tracking, and engaging UI that keeps learners motivated.",
    solution:
      "Built a MERN stack platform with role-based access (student/instructor/admin), real-time progress tracking, video streaming, and interactive quizzes.",
    features: [
      "JWT-based authentication with role-based access control",
      "Course creation and management for instructors",
      "Video lecture streaming with progress tracking",
      "Interactive quizzes with instant grading",
      "Student dashboard with analytics",
      "Payment integration for premium courses",
      "Real-time notifications",
      "Responsive design for all devices",
    ],
    architecture:
      "React frontend with Context API for state management, Node.js/Express REST API backend, MongoDB with Mongoose for data modeling, JWT for auth, Cloudinary for media storage.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
      "Redux",
    ],
    role: "Full Stack Developer — designed system architecture, built REST APIs, created React components, and deployed on cloud.",
    futureImprovements: [
      "AI-powered course recommendations",
      "Live video sessions with WebRTC",
      "Mobile app with React Native",
      "Gamification with badges and leaderboards",
    ],
    category: "fullstack",
    githubUrl: "https://github.com/Abhinav6072",
    liveUrl: "#",
    image: "/projects/elearning.png",
    gradient: "from-cyan-500 to-blue-600",
    featured: true,
  },
  {
    id: "doctor-appointment",
    title: "Doctor Appointment System",
    tagline: "Streamlining healthcare with smart booking",
    description:
      "A full-stack healthcare application allowing patients to book appointments, doctors to manage schedules, and admins to oversee the entire platform.",
    problem:
      "Manual appointment booking in healthcare is time-consuming, error-prone, and lacks transparency for patients about doctor availability.",
    solution:
      "Developed a three-tier web app with patient, doctor, and admin panels — enabling online booking, real-time availability, and appointment management.",
    features: [
      "Multi-role authentication (Patient/Doctor/Admin)",
      "Doctor search and filtering by specialty",
      "Real-time appointment booking calendar",
      "Email notifications for confirmations",
      "Doctor profile management",
      "Admin dashboard with analytics",
      "Appointment history and records",
      "Payment gateway integration",
    ],
    architecture:
      "MERN stack with three separate dashboards, MongoDB for data persistence, Express REST APIs, React with React Router for navigation.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Nodemailer",
      "Tailwind CSS",
      "Razorpay",
    ],
    role: "Full Stack Developer — led end-to-end development from database design to UI implementation.",
    futureImprovements: [
      "Telemedicine with video consultations",
      "AI symptom checker",
      "Medical records management",
      "Multi-language support",
    ],
    category: "fullstack",
    githubUrl: "https://github.com/Abhinav6072",
    liveUrl: "#",
    image: "/projects/doctor.png",
    gradient: "from-purple-500 to-pink-600",
    featured: true,
  },
  {
    id: "leetcode-clone",
    title: "LeetCode Clone",
    tagline: "Practice DSA with a premium coding environment",
    description:
      "A feature-rich competitive programming platform where users can solve DSA problems, run code in multiple languages, and track their progress.",
    problem:
      "Existing coding platforms can be overwhelming for beginners and lack the clean, distraction-free environment needed for focused problem-solving practice.",
    solution:
      "Built a LeetCode-like platform with a Monaco code editor, real-time code execution, test case validation, and a curated problem set.",
    features: [
      "Monaco Editor for a VS Code-like experience",
      "Multi-language code execution (JavaScript, Python, C++)",
      "Problem difficulty filtering (Easy/Medium/Hard)",
      "Real-time code testing with custom inputs",
      "User progress tracking and streak system",
      "Discussion boards for each problem",
      "Time and space complexity display",
      "Editorial solutions",
    ],
    architecture:
      "React with Monaco Editor, Node.js backend with sandboxed code execution, MongoDB for problems and user data, Judge0 API for compilation.",
    techStack: [
      "React",
      "Monaco Editor",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Judge0 API",
      "Socket.io",
    ],
    role: "Full Stack Developer — architected the sandboxed code execution system and built the complete frontend experience.",
    futureImprovements: [
      "AI-powered hints using OpenAI API",
      "Real-time collaborative coding",
      "Contest mode with live leaderboard",
      "Interview simulation mode",
    ],
    category: "fullstack",
    githubUrl: "https://github.com/Abhinav6072",
    liveUrl: "#",
    image: "/projects/leetcode.png",
    gradient: "from-emerald-500 to-teal-600",
    featured: true,
  },
  {
    id: "ai-project",
    title: "AI-Powered App",
    tagline: "The future is being built — coming soon",
    description:
      "An exciting AI-powered application currently in development. Leveraging modern ML APIs and the latest in web technology to solve real-world problems intelligently.",
    problem:
      "Complex tasks that require human intelligence can now be automated with AI, but most tools are inaccessible to everyday users.",
    solution:
      "Building an AI-native web application with a beautiful interface that makes powerful AI capabilities accessible to everyone.",
    features: [
      "OpenAI / Gemini API integration",
      "Natural language processing",
      "Intelligent recommendations",
      "Real-time AI responses",
      "Beautiful futuristic UI",
      "Production-ready architecture",
    ],
    architecture:
      "React + TypeScript frontend, Node.js backend, OpenAI API integration, streaming responses, vector database for context.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "OpenAI API",
      "Vector DB",
      "Framer Motion",
      "MongoDB",
    ],
    role: "Full Stack Developer & AI Integration Specialist",
    futureImprovements: [
      "Multi-modal AI capabilities",
      "Custom fine-tuned models",
      "Mobile application",
    ],
    category: "ai",
    githubUrl: "https://github.com/Abhinav6072",
    liveUrl: "#",
    image: "/projects/ai.png",
    gradient: "from-orange-500 to-red-600",
    featured: false,
  },
];

// ==========================================
// SKILLS
// ==========================================
export const skills = [
  // Frontend
  {
    name: "React.js",
    icon: "SiReact",
    level: 90,
    category: "frontend",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: "SiTypescript",
    level: 80,
    category: "frontend",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: "SiJavascript",
    level: 92,
    category: "frontend",
    color: "#F7DF1E",
  },
  {
    name: "Next.js",
    icon: "SiNextdotjs",
    level: 75,
    category: "frontend",
    color: "#FFFFFF",
  },
  {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    level: 88,
    category: "frontend",
    color: "#06B6D4",
  },
  {
    name: "HTML5",
    icon: "SiHtml5",
    level: 95,
    category: "frontend",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: "SiCss",
    level: 90,
    category: "frontend",
    color: "#1572B6",
  },
  {
    name: "Redux",
    icon: "SiRedux",
    level: 78,
    category: "frontend",
    color: "#764ABC",
  },
  {
    name: "Framer Motion",
    icon: "SiFramer",
    level: 75,
    category: "frontend",
    color: "#FF0055",
  },

  // Backend
  {
    name: "Node.js",
    icon: "SiNodedotjs",
    level: 88,
    category: "backend",
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: "SiExpress",
    level: 88,
    category: "backend",
    color: "#FFFFFF",
  },
  {
    name: "REST APIs",
    icon: "SiPostman",
    level: 90,
    category: "backend",
    color: "#FF6C37",
  },
  {
    name: "JWT Auth",
    icon: "SiJsonwebtokens",
    level: 85,
    category: "backend",
    color: "#D63AFF",
  },
  {
    name: "Socket.io",
    icon: "SiSocketdotio",
    level: 72,
    category: "backend",
    color: "#010101",
  },

  // Database
  {
    name: "MongoDB",
    icon: "SiMongodb",
    level: 88,
    category: "database",
    color: "#47A248",
  },
  {
    name: "Mongoose",
    icon: "SiMongoose",
    level: 85,
    category: "database",
    color: "#880000",
  },
  {
    name: "MySQL",
    icon: "SiMysql",
    level: 72,
    category: "database",
    color: "#4479A1",
  },
  {
    name: "Firebase",
    icon: "SiFirebase",
    level: 70,
    category: "database",
    color: "#FFCA28",
  },

  // Cloud & DevOps
  {
    name: "Git",
    icon: "SiGit",
    level: 88,
    category: "devops",
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: "SiGithub",
    level: 90,
    category: "devops",
    color: "#FFFFFF",
  },
  {
    name: "Docker",
    icon: "SiDocker",
    level: 65,
    category: "devops",
    color: "#2496ED",
  },
  {
    name: "Vercel",
    icon: "SiVercel",
    level: 82,
    category: "cloud",
    color: "#FFFFFF",
  },
  {
    name: "Render",
    icon: "SiRender",
    level: 78,
    category: "cloud",
    color: "#46E3B7",
  },
  {
    name: "AWS",
    icon: "SiAmazonwebservices",
    level: 55,
    category: "cloud",
    color: "#FF9900",
  },

  // Tools
  {
    name: "VS Code",
    icon: "SiVisualstudiocode",
    level: 95,
    category: "tools",
    color: "#007ACC",
  },
  {
    name: "Postman",
    icon: "SiPostman",
    level: 88,
    category: "tools",
    color: "#FF6C37",
  },
  {
    name: "Figma",
    icon: "SiFigma",
    level: 68,
    category: "tools",
    color: "#F24E1E",
  },
  {
    name: "npm",
    icon: "SiNpm",
    level: 90,
    category: "tools",
    color: "#CB3837",
  },

  // Languages
  {
    name: "JavaScript",
    icon: "SiJavascript",
    level: 92,
    category: "languages",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: "SiTypescript",
    level: 80,
    category: "languages",
    color: "#3178C6",
  },
  {
    name: "Python",
    icon: "SiPython",
    level: 65,
    category: "languages",
    color: "#3776AB",
  },
  {
    name: "C++",
    icon: "SiCplusplus",
    level: 60,
    category: "languages",
    color: "#00599C",
  },
  {
    name: "SQL",
    icon: "SiMysql",
    level: 72,
    category: "languages",
    color: "#4479A1",
  },
];

// ==========================================
// EXPERIENCE
// ==========================================
export const experiences = [
  {
    id: "mindseekers",
    company: "Mindseekers Technologies",
    role: "Software Engineer Intern",
    type: "Internship",
    period: "Jul 2024 – Sep 2024",
    location: "India (Remote)",
    description:
      "Contributed to building full-stack web applications in an agile environment, working with the MERN stack to deliver production-ready features.",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express.js, improving response time by 30%",
      "Built responsive React.js components integrated with backend APIs for seamless user experiences",
      "Designed and optimized MongoDB database schemas for efficient data storage and retrieval",
      "Implemented JWT-based authentication and role-based access control for secure user management",
      "Collaborated with cross-functional teams using Git/GitHub for version control and code reviews",
      "Wrote clean, maintainable code following best practices and SOLID principles",
      "Participated in daily standups, sprint planning, and retrospectives in Agile workflow",
      "Debugged and resolved production issues, ensuring 99% uptime for critical services",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Git",
      "REST APIs",
      "Tailwind CSS",
    ],
    color: "#06B6D4",
  },
];

// ==========================================
// EDUCATION
// ==========================================
export const education = [
  {
    id: "galgotias",
    institution: "Galgotias University",
    degree: "Bachelor of Computer Applications",
    field: "Computer Applications",
    period: "2022 – 2025",
    achievements: [
      "Focused on Data Structures, Algorithms, and Web Technologies",
      "Developed multiple full-stack projects as part of coursework",
      "Active member of the coding club and tech community",
      "Continuously upskilled through online courses and certifications",
    ],
    icon: "🎓",
    color: "#A855F7",
  },
];

// ==========================================
// ACHIEVEMENTS
// ==========================================
export const achievements = [
  {
    id: "leetcode",
    title: "LeetCode Problem Solver",
    platform: "LeetCode",
    description:
      "Consistently solving algorithmic challenges to sharpen DSA skills and coding interview readiness.",
    metric: "100+ Problems",
    icon: "SiLeetcode",
    color: "#FFA116",
    link: "https://leetcode.com",
  },
  {
    id: "hackerrank",
    title: "HackerRank Certified",
    platform: "HackerRank",
    description:
      "Earned certifications in JavaScript and Problem Solving, demonstrating proficiency in core CS concepts.",
    metric: "5-Star Rating",
    icon: "SiHackerrank",
    color: "#00EA64",
    link: "https://hackerrank.com",
  },
  {
    id: "learning",
    title: "Continuous Learner",
    platform: "Self-Learning",
    description:
      "Committed to staying current with modern web development trends, frameworks, and best practices.",
    metric: "20+ Courses",
    icon: "📚",
    color: "#3B82F6",
  },
  {
    id: "modern-dev",
    title: "Modern Dev Practitioner",
    platform: "Industry Standards",
    description:
      "Following modern development practices including CI/CD, clean architecture, and agile methodologies.",
    metric: "Best Practices",
    icon: "⚡",
    color: "#06B6D4",
  },
  {
    id: "problem-solving",
    title: "Problem Solving Excellence",
    platform: "Multiple Platforms",
    description:
      "Track record of solving complex technical problems across competitive programming platforms.",
    metric: "Top 20%",
    icon: "🏆",
    color: "#F97316",
  },
];

// ==========================================
// SERVICES
// ==========================================
export const services = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Building pixel-perfect, responsive UIs with React.js, animations, and modern design systems.",
    features: [
      "React.js / Next.js",
      "Responsive Design",
      "Framer Motion Animations",
      "Component Libraries",
    ],
    icon: "🖥️",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Scalable, secure server-side applications with Node.js and Express.js architecture.",
    features: [
      "Node.js / Express.js",
      "MVC Architecture",
      "Middleware Development",
      "Error Handling",
    ],
    icon: "⚙️",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "api",
    title: "REST API Development",
    description:
      "Designing and building clean, well-documented RESTful APIs following industry best practices.",
    features: [
      "RESTful Design",
      "API Documentation",
      "Versioning",
      "Rate Limiting",
    ],
    icon: "🔌",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "auth",
    title: "Authentication Systems",
    description:
      "Implementing secure authentication with JWT, OAuth, sessions, and role-based access control.",
    features: ["JWT Authentication", "OAuth 2.0", "RBAC", "Session Management"],
    icon: "🔐",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "database",
    title: "Database Design",
    description:
      "Architecting efficient database schemas and optimizing queries for maximum performance.",
    features: [
      "MongoDB / SQL",
      "Schema Design",
      "Query Optimization",
      "Indexing",
    ],
    icon: "🗄️",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Analyzing and optimizing web applications for speed, scalability, and excellent user experience.",
    features: [
      "Code Splitting",
      "Caching Strategies",
      "Lazy Loading",
      "Bundle Optimization",
    ],
    icon: "⚡",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: "deployment",
    title: "Deployment & DevOps",
    description:
      "Setting up CI/CD pipelines and deploying applications to cloud platforms reliably.",
    features: [
      "Vercel / Render",
      "Docker Basics",
      "Environment Setup",
      "CI/CD Pipelines",
    ],
    icon: "🚀",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "End-to-end product development from ideation to deployment with the complete MERN stack.",
    features: [
      "MERN Stack",
      "System Design",
      "Code Reviews",
      "Technical Consulting",
    ],
    icon: "💻",
    gradient: "from-pink-500 to-purple-600",
  },
];

// ==========================================
// CERTIFICATES
// ==========================================
export const certificates = [
  {
    id: "js-cert",
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "2024",
    icon: "SiHackerrank",
    color: "#00EA64",
  },
  {
    id: "react-cert",
    title: "React Developer",
    issuer: "Self-Learning",
    date: "2024",
    icon: "SiReact",
    color: "#61DAFB",
  },
  {
    id: "node-cert",
    title: "Node.js Fundamentals",
    issuer: "Udemy",
    date: "2023",
    icon: "SiNodedotjs",
    color: "#339933",
  },
  {
    id: "mongo-cert",
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    date: "2023",
    icon: "SiMongodb",
    color: "#47A248",
  },
];

// ==========================================
// TECH ICONS (for floating display)
// ==========================================
export const techIcons = [
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
  { name: "Express", icon: "SiExpress", color: "#FFFFFF" },
  { name: "Tailwind", icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
  { name: "Docker", icon: "SiDocker", color: "#2496ED" },
  { name: "Next.js", icon: "SiNextdotjs", color: "#FFFFFF" },
  { name: "Vercel", icon: "SiVercel", color: "#FFFFFF" },
  { name: "GitHub", icon: "SiGithub", color: "#FFFFFF" },
];
