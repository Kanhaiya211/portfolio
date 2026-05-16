import { motion } from "framer-motion";
import Resume from "../assets/resume.pdf";
import Profile from "../assets/profile.png";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="intro">Hi I am</p>

        <h3>Kanhaiya Dhongade</h3>

        <h1>
          Software<br /> Developer
        </h1>

        <div className="social-icons">

          <a
            href="https://github.com/Kanhaiya211"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kanhaiya-dhongade-544b4b2a3"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>



        </div>
        <p className="hero-description">
          Passionate software developer focused on building
          modern, responsive, and user-friendly web
          applications using React, Java, and modern web
          technologies.
        </p>

        <br />
        <br />
        <div className="hero-buttons">
          <button className="primary-btn">Hire Me</button>

          <a
            href={Resume}
            download="Kanhaiya_Dhongade_Resume.pdf"
          >
            <button className="secondary-btn">
              Download CV
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="circle"></div>

        <img
          src={Profile}
          alt="Kanhaiya"
        />
      </motion.div>

    </section>
  );
}

export default Hero;