import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import logo from "../assets/logo.svg";
import { FaTwitterSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: delay },
  },
});

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="mx-2 w-10"
          src={logo}
          alt=""
        />
      </div>
      <motion.div
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="m-8 flex items-center justify-center gap-4"
      >
        <motion.a
          variants={container(0)}
          initial="hidden"
          animate="visible"
          href="https://www.linkedin.com/in/riteshghodela/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaLinkedin />
        </motion.a>
        <motion.a
          variants={container(0)}
          initial="hidden"
          animate="visible"
          href="https://www.instagram.com/solowebhq/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </motion.a>

        <motion.a
          variants={container(0)}
          initial="hidden"
          animate="visible"
          href="https://www.facebook.com/ritesh.ghodela.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </motion.a>

        <motion.a
          variants={container(0)}
          initial="hidden"
          animate="visible"
          href="https://x.com/RITESHGHODELA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare />
        </motion.a>

        <motion.a
          variants={container(0)}
          initial="hidden"
          animate="visible"
          href="https://github.com/RiteshGhodela"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
