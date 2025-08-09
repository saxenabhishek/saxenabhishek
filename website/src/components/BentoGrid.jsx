import React from "react";
import { motion } from "framer-motion";
import Intro from "./Intro.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ExperienceCard from "./ExperienceCard.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import projectsData from "../data/projects.json";
import experienceData from "../data/experience.json";

const BentoGrid = ({ filter }) => {
  const projectCards = projectsData.projects.map((project, i) => ({
    id: `project-${i}`,
    component: <ProjectCard project={project} expanded={filter === "projects"} />,
    tags: ["projects"],
  }));

  const experienceCards = experienceData.experiences.map((exp, i) => ({
    id: `exp-${i}`,
    component: <ExperienceCard experience={exp} expanded={filter === "experience"} />,
    tags: ["experience"],
  }));

  const cards = [
    { id: "intro", component: <Intro />, tags: ["intro"], className: "md:col-span-2" },
    ...projectCards,
    ...experienceCards,
    {
      id: "education",
      component: <Education expanded={filter === "experience"} />,
      tags: ["experience"],
    },
    { id: "skills", component: <Skills />, tags: ["skills"] },
    { id: "contact", component: <Contact />, tags: ["contact"] },
  ];

  const sortedCards = filter
    ? [...cards].sort((a, b) => {
        const aMatch = a.tags.includes(filter);
        const bMatch = b.tags.includes(filter);
        return aMatch === bMatch ? 0 : aMatch ? -1 : 1;
      })
    : cards;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
      {sortedCards.map((card) => {
        const isActive = !filter || card.tags.includes(filter);
        return (
          <motion.div
            layout
            key={card.id}
            className={`bg-primary/50 rounded-2xl p-6 flex flex-col justify-center ${
              card.className || ""
            } ${
              filter && card.tags.includes(filter)
                ? "md:col-span-2 lg:col-span-3"
                : ""
            } ${filter && !isActive ? "opacity-20" : ""}`}
          >
            {card.component}
          </motion.div>
        );
      })}
    </div>
  );
};

export default BentoGrid;
