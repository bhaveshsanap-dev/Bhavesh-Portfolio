/**
 * Central portfolio data — edit this file to update the website.
 * All content is sourced from here so Bhavesh can update details
 * without touching component code.
 */

export const profile = {
  name: "Bhavesh",
  monogram: "𝕭𝖍𝖆𝖛𝖊𝖘𝖍",
  role: "Aspiring Software Developer",
  label: "BCA Student · Aspiring Software Developer",
  location: "Pune, Maharashtra, India",
  heroHeading: "Learning to build.\nBuilding to improve.",
  heroIntro:
    "I'm Bhavesh, a BCA student interested in programming, backend development, and creating useful software. I enjoy learning by building things, experimenting with code, and understanding how applications work behind the scenes.",
  about:
    "I'm Bhavesh, a final-year BCA student at Degree College of Physical Education, Amravati, with an interest in software development and building practical applications.\n\nI enjoy turning ideas into working projects and learning through hands-on experience. Currently, I'm strengthening my programming fundamentals in C, C++, and Python while exploring different areas of development. My UNO No Mercy multiplayer game project is one way I'm putting my learning into practice.\n\nOutside of coding, I'm a lawn tennis player who values discipline, consistency, and continuous improvement. I bring the same mindset to learning new technologies and developing my skills as a software developer.\n\nMy current focus is to build stronger projects, deepen my technical knowledge, and prepare for future opportunities in software development.",
  contactIntro:
    "I'm open to software development internships, collaborative projects, and opportunities to learn through real-world work.",
  /** Set these to real URLs/addresses when ready. Empty strings render editable placeholders. */
  email: "",
  github: "",
  linkedin: "",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Java", "Python"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Database",
    items: ["SQL", "Database Management Systems"],
  },
  {
    title: "Fundamentals & Tools",
    items: [
      "Object-Oriented Programming",
      "Data Structures",
      "Git",
      "GitHub",
    ],
  },
];

export const project = {
  title: "UNO No Mercy — Multiplayer Card Game",
  description:
    "A web-based multiplayer card game project inspired by UNO No Mercy. I'm developing it to explore game logic, interactive interfaces, real-time communication, and the challenges involved in building a multiplayer web application.",
  techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Socket.IO"],
  status: "In Progress" as const,
  /** Set to a real repository URL when available */
  githubUrl: "",
  /** Set to a live deployment URL when available */
  liveUrl: "",
  /** Set to a screenshot image path or URL when available */
  screenshot: "",
  implementedFeatures: [] as string[],
  plannedFeatures: [] as string[],
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Degree College of Physical Education, Amravati",
  status: "Final Year",
  expectedGraduation: "2027",
  subjects: [
    "C Programming",
    "C++ Programming",
    "Python Programming",
    "Database Management Systems",
    "Data Structures",
    "Web Development",
  ],
};

export const certification = {
  title: "C & C++ Programming Course",
  issuer: "Maharashtra Knowledge Corporation Limited (MKCL)",
  category: "Programming",
  credential: "Certificate details to be verified",
  status: "Completed" as const,
};

export const currentlyLearning = [
  "Programming fundamentals",
  "Java and Python development",
  "SQL and database concepts",
  "Backend development",
  "Practical software project development",
];
