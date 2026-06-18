import PortfolioProject from "../assets/portfolio-project.png";
import VillaBooking from "../assets/villa-booking.png";
import SalonBooking from "../assets/salon-booking.png";
import EcommerceProject from "../assets/ecommerce-project.png";

const projects = [
  {
    id: 1,

    title: "E-Commerce Web Application",

    description:
      "Full-stack e-commerce platform with role-based authentication, product catalog management, shopping cart, secure checkout, order tracking, and RESTful APIs built using Spring Boot. Integrated with a responsive React frontend using reusable components.",

    image: EcommerceProject,

    github:
      "https://github.com/Kanhaiya211/ecommerce_project",

    live:
      "",

    tech: [
      "React",
      "Spring Boot",
      "Java",
      "MySQL",
      "REST API",
      "JWT",
    ],
  },

  {
    id: 2,

    title: "Salon Booking SaaS",

    description:
      "Full-stack salon appointment booking platform with secure JWT authentication, role-based access (Customer, Salon Owner, Admin), appointment scheduling, salon and service management, and a responsive React frontend powered by Spring Boot and MySQL.",

    image: SalonBooking,

    github:
      "https://github.com/Kanhaiya211/salon-backend",

    live:
      "",

    tech: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "Java",
      "MySQL",
      "JWT",
      "REST API",
    ],
  },

  {
    id: 3,

    title: "Villa Booking Website",

    description:
      "Luxury villa booking platform featuring responsive UI, modern property cards, property filtering, booking workflow, and optimized frontend architecture for an enhanced user experience.",

    image: VillaBooking,

    github:
      "https://github.com/Kanhaiya211/stayaura-app",

    live:
      "https://stayaura-app.vercel.app",

    tech: [
      "React",
      "Java",
      "MySQL",
      "CSS",
    ],
  },

  {
    id: 4,

    title: "Portfolio Website",

    description:
      "Modern animated developer portfolio built using React, Vite, Framer Motion, and responsive UI principles. Includes project showcase, downloadable resume, smooth animations, and deployment on Vercel.",

    image: PortfolioProject,

    github:
      "https://github.com/Kanhaiya211/portfolio",

    live:
      "https://portfolio-lake-mu-zbbauykc77.vercel.app",

    tech: [
      "React",
      "Vite",
      "CSS",
      "Framer Motion",
    ],
  },
];

export default projects;