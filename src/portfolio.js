import momecoImage from "./assets/bg-momeco.png";
import aquaImage from "./assets/bg-aqua.png";
import medicalImage from "./assets/bg-medical.png";

const header = {
  title: "JanR",
}

const about = {
  name: "Robie Laguda",
  role: "Full-Stack Developer",
  resume: "/resume_jan_robie_laguda.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/jan-robie-laguda-2b21a4198/",
    github: "https://github.com/roviee",
  },
};

const projects = [
  {
    image: momecoImage,
    name: "MOMECOPH",
    description:
      "A full-featured e-commerce platform focused on eco-friendly beauty products. Implemented product and inventory management, admin controls for stock and transaction monitoring, and integrated machine learning to analyze customer reviews for actionable insights and service improvement.",
    stack: ["Vue.JS", "Laravel", "MySQL", "Bootstrap"],
    sourceCode: "https://github.com/roviee/MOMECOPH",
    livePreview: "https://momecoph.onrender.com/",
  },
  {
    image: aquaImage,
    name: "ShopAqua",
    description:
      "A full-stack shopping system that allows users to browse products, manage carts, and place orders through a responsive. It includes a RESTful API, secure data flow, and a dedicated admin dashboard for inventory and order management.",
    stack: ["MongoDB", "Express.JS", "Vue.JS", "Node.JS", "Bootstrap"],
    sourceCode: "https://github.com/roviee/Water-System",
    livePreview: "https://shopaqua.onrender.com",
  },
  {
    image: medicalImage,
    name: "Medical Inventory Management (Backend)",
    description:
      "A backend system for managing medical items, categories, inventory, and suppliers. Built using Spring Boot, this RESTful API helps efficiently organize medical stock, handle item categories, and manage suppliers.",
    stack: ["Java", "Spring Boot", "MySQL"],
    sourceCode: "https://github.com/roviee/springboot-medical-inventory",
    livePreview:
      "https://github.com/roviee/springboot-medical-inventory?tab=readme-ov-file#-example-request-add-medical-item",
  },
];

const skills = [
  {name: "JavaScript", file: "javascript.svg" },
  { name: "Java", file: "java.svg" },
  { name: "PHP", file: "php.svg" },
  { name: "Python", file: "python.svg" },
  { name: "HTML", file: "html5.svg" },
  { name: "CSS", file: "css3.svg" },
  { name: "Bootstrap", file: "bootstrap.svg" },
  { name: "Tailwind CSS", file: "tailwindcss.svg" },
  { name: "Vue.js", file: "vue.svg" },
  { name: "React", file: "react.svg" },
  { name: "Node.js", file: "node-js.svg" },
  { name: "Express.js", file: "express-js.svg" },
  { name: "Laravel", file: "laravel.svg" },
  { name: "Spring Boot", file: "spring-boot.svg" },
  { name: "MySQL", file: "mysql.svg" },
  { name: "MongoDB", file: "mongodb.svg" },
  { name: "Git", file: "git.svg" },
  { name: "Postman", file: "postman.svg" },
];

const experience = [
  {
    role: "Front End Web Developer Intern",
    company: "Integratr Corporation",
    duration: "Feb 2025 - May 2025",
    description: [
      "Assisted in developing two company websites with responsive layouts using Vue.js and Bootstrap.",
      "Contributed to a responsive E-Government system frontend.",
      "Collaborated with teams using Git/GitHub, Figma, and ClickUp during sprint planning and daily stand-ups.",
    ],
  },
  {
    role: "ShopAqua - E-Commerce Platform",
    company: "Freelance Full-Stack Developer",
    duration: "Jan 2025 - Apr 2025",
    description: [
      "Build and deployed a e-commerce platform with product browsing, cart, checkout. and admin management features.",
      "Implemented user authentication and RESTful APIs for a smooth and secure experience.",
      "Collaborated closely with clients to gather requirement, iterate based on feedback, and deploy.",
    ],
  }
];

const contact = {
  email: "robie192002@gmail.com",
  phone: "+63 9556549219",
}

export {header, about, projects, skills, experience, contact};
