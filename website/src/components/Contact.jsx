import React from "react";
import { motion } from "motion/react";
import { FiMail, FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

const Contact = () => {
  const links = [
    { name: "Email", url: "mailto:abhishekkumar.saxena@gwu.edu", icon: FiMail },
    { name: "GitHub", url: "https://github.com/saxenabhishek", icon: FiGithub },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/saxenabhishek",
      icon: FiLinkedin,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col justify-between"
    >
      <div>
        <h2 className="text-2xl leading-9 pb-4 font-heading tracking-wide">
          Contact
        </h2>
        <div className="space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2  underline"
            >
              <link.icon />
              <span>{link.name} ↗</span>
            </a>
          ))}
        </div>
      </div>
      <p className="text-xs text-neutral-700 dark:text-text-secondary mt-4">
        Made with <FiHeart className="inline-block" /> by Abhishek Saxena
      </p>
    </motion.div>
  );
};

export default Contact;
