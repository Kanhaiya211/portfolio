import PortfolioProject from "../assets/portfolio-project.png";
import VillaBooking from "../assets/villa-booking.png";

const projects = [

  {
    id: 1,

    title: "Portfolio Website",

    description:
      "Modern animated developer portfolio built using React, Vite, Framer Motion, and responsive UI principles. Includes project showcase, live routing, downloadable resume, and deployment on Vercel.",

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

  {
    id: 2,

    title: "Villa Booking Website",

    description:
      "Luxury villa booking platform with responsive UI, modern property cards, filtering features, booking system concepts, and optimized frontend architecture.",

    image: VillaBooking,

    github:
      "https://github.com/Kanhaiya211/stayaura-app",

    live:
      "https://stayaura-app.vercel.app",

    tech: [
      "React",
      "Java",
      "Mysql",
      
    ],
  },

];

export default projects;