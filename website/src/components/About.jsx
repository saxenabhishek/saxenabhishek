import { motion } from "motion/react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const About = () => {
  const links = [
    { name: "Email", url: "mailto:abhishekkumar.saxena@gwu.edu", icon: FiMail },
    { name: "GitHub", url: "https://github.com/saxenabhishek", icon: FiGithub },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/saxenabhishek",
      icon: FiLinkedin,
    },
  ];
  const btnClassName =
    "flex items-center rounded-full px-4 py-2 text-xs leading-4 sm:text-sm sm:leading-5";
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="h-full flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl sm:text-6xl sm:leading-16 leading-10 font-heading capitalize pb-4 text-center">
        Abhishek Saxena
      </h1>
      <p className="text-lg sm:text-xl sm:leading-7 leading-7 font-body pb-4">
        Hi, I'm a Software Engineer
      </p>
      <div className="flex items-center justify-around space-x-5">
        <a
          href="mailto:abhishekkumar.saxena@gwu.edu"
          target="_blank"
          rel="noopener noreferrer"
          className={"bg-teal-400 text-black " + btnClassName}
        >
          <FiMail className="mr-2" />
          Email
        </a>
        <a
          href="https://linkedin.com/in/saxenabhishek"
          target="_blank"
          rel="noopener noreferrer"
          className={"border border-white/50 " + btnClassName}
        >
          <FiLinkedin className="mr-2 text-xs" />
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
};

export default About;
