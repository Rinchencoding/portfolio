// Skills Section Logos
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logos
import nhdclLogo from "./assets/company_logo/nhdcl.png";
import blLogo from "./assets/company_logo/bl.png";

// Education Section Logos
import gcitLogo from "./assets/education_logo/gcit.png";
import nangkorLogo from "./assets/education_logo/nangkor.png";
import mcsLogo from "./assets/education_logo/mcs.png";

// Project Section Logos
import drukcraftLogo from "./assets/work_logo/drukcraft.png";
import yoloLogo from "./assets/work_logo/yolo.png";
import gyalsungLogo from "./assets/work_logo/nhdcl.png";

// Certificate Logos
import geminiCertificate from "./assets/certificate_photo/gemini_certificate.png";
import awsCertificate from "./assets/certificate_photo/aws.png";
import cyberCertificate from "./assets/certificate_photo/Cybersecurity.png";
import designCertificate from "./assets/certificate_photo/UX.png";
import pythonCertificate from "./assets/certificate_photo/python.png";
import pythonCertificate2 from "./assets/certificate_photo/python2.png";
import pythonCertificate3 from "./assets/certificate_photo/python3.png";
import pythonCertificate4 from "./assets/certificate_photo/python4.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React.js", logo: reactjsLogo },
      { name: "Next.js", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", logo: springbootLogo },
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: nhdclLogo,
    role: "Fullstack Developer",
    company: "NHDCL",
    date: "April 2025 - Present",
    desc: "Developed dynamic and scalable web applications using Microservice architecture, handling both frontend and backend. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Spring Boot",
      "Microservice Architecture",
    ],
  },
  {
    id: 1,
    img: blLogo,
    role: "Founding Partner",
    company: "Bhutan Launchpad Center",
    date: "March 18 - 20, 2026",
    desc: "A smart logistics mobile application designed to streamline delivery operations and enhance customer experience. The app enables real-time order tracking, efficient route management, and seamless communication between customers and service providers.",
    skills: [
      "Designing",
      "Wireframing",
      "Communication",
      "MVP Development",
      "Problem Handling",
      "Startup Management",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: gcitLogo,
    school: "Gyalpozhing College of Information Technology, Thimphu",
    date: "2022 - Present",
    grade: "CGPA: N/A",
    desc: "Pursuing Bachelor of Computer Science (Full Stack Development). Learned front-end and back-end technologies, databases, software engineering principles, and developed full-stack projects. Actively participated in workshops and technical events for practical experience.",
    degree: "Bachelor of Computer Science - BCS",
  },
  {
    id: 1,
    img: nangkorLogo,
    school: "Nangkor Central School, Pemagatshel",
    date: "2018 - 2021",
    grade: "70%",
    desc: "Completed Higher Secondary School education, focusing on Science subjects and foundational computing knowledge.",
    degree: "Higher Secondary School (XII), Science",
  },
  {
    id: 2,
    img: mcsLogo,
    school: "Minjiwoong Central School, Samdrup Jongkhar",
    date: "2014 - 2017",
    grade: "78%",
    desc: "Completed middle school education with focus on Physics, Chemistry, Mathematics, and Economics.",
    degree: "Middle School (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "DrukCraft",
    description: "An eCommerce website where users can buy national and international products.",
    image: drukcraftLogo,
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "API"],
    github: "https://github.com/RinchenDrukcraft/DrukCraftFrontend.git",
  },
  {
    id: 1,
    title: "Yolo Bhutan",
    description: "Full-stack eCommerce platform connecting local artisans with global customers.",
    image: yoloLogo,
    tags: ["React.js", "Node.js", "MongoDB", "TypeScript", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Anup-gurung/yoloFrontend.git",
  },
  {
    id: 2,
    title: "Gyalsung Academy Web Application",
    description: "React-based web app for managing Gyalsung Academy. Smooth experience and intuitive design for academy management.",
    image: gyalsungLogo,
    tags: ["React.js", "API", "HTML", "CSS", "JavaScript"],
    webapp: "https://nhdcl-frontend.onrender.com/",
  },
];

export const certificates = [
  {
    id: 0,
    title: "AWS - Cloud Computing",
    issuer: "AWS",
    date: "2024",
    link: "https://www.credly.com/badges/34110bbd-b49f-42e7-bee2-5d8f22c93ee7/linked_in_profile",
    thumbnail: awsCertificate,
  },
  {
    id: 1,
    title: "Gemini Certified",
    issuer: "Google",
    date: "December 28, 2025",
    link: "https://edu.google.accredible.com/234fd33d-2623-4eac-888b-c7d60220d50d#acc.bXne0tRk",
    thumbnail: geminiCertificate,
  },
  {
    id: 2,
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "December 28, 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/T7F2UIPHC0MF",
    thumbnail: cyberCertificate,
  },
  {
    id: 3,
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    date: "December 28, 2025",
    link: "https://coursera.org/share/e60dc924e703d5f439e40c7cfb635e5f",
    thumbnail: designCertificate,
  },
  {
    id: 4,
    title: "Crash Course on Python",
    issuer: "Google",
    date: "December 28, 2025",
    link: "https://coursera.org/share/4dafd52780f639af97f8a3cebb75e30f",
    thumbnail: pythonCertificate,
  },
  {
    id: 5,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "March 25, 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/6ZWWM46MZTIU",
    thumbnail: pythonCertificate2,
  },
  {
    id: 6,
    title: "Using Python to Interact with the Operating System",
    issuer: "Google",
    date: "March 25, 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/D6BY2DKWDWCJ",
    thumbnail: pythonCertificate3,
  },
  {
    id: 7,
    title: "Automating Real-World Tasks with Python",
    issuer: "Google",
    date: "March 31, 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/LL0MG0QMYOBA",
    thumbnail: pythonCertificate4,
  },
];