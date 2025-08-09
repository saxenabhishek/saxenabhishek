import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const links = [
    { name: "Email", url: "mailto:your.email@example.com" },
    { name: "GitHub", url: "https://github.com/saxenabhishek" },
    { name: "LinkedIn", url: "https://linkedin.com/in/saxenabhishek" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col justify-between"
    >
      <div>
        <h2 className="text-2xl font-heading font-bold text-accent1 mb-4">
          Contact
        </h2>
        <div className="space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-accent2 hover:text-accent1"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <p className="text-xs text-textSecondary mt-4">
        Based in Washington D.C.
      </p>
    </motion.div>
  );
};

export default Contact;
