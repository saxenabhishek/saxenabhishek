import { motion, AnimatePresence } from "motion/react";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import Header from "./Header.jsx";
import SummaryCard from "./SummaryCard.jsx";
import ProfileCard from "./ProfileCard.jsx";
import ModeToggleCard from "./ModeToggleCard.jsx";
import projectsData from "../data/projects.json";
import experienceData from "../data/experience.json";
import ExperienceCardHolder from "./ExperienceCardHolder.jsx";
import ProjectCardHolder from "./ProjectCardHolder.jsx";

const BentoGrid = ({ filter, onFilterChange, mode, toggleMode }) => {
  const headerCard = {
    id: "header",
    component: <Header activeFilter={filter} onFilterChange={onFilterChange} />,
    tags: ["header"],
    className: "col-span-1 md:col-span-3 lg:col-span-5 sticky top-2 z-10",
  };

  const cards = [
    {
      id: "about",
      component: <About />,
      tags: ["intro"],
      className: "md:col-span-2",
    },
    {
      id: "profile",
      component: <ProfileCard />,
      tags: ["intro"],
      className: "p-[0px] ",
    },
    {
      id: "mode",
      component: <ModeToggleCard mode={mode} toggleMode={toggleMode} />,
      tags: ["utility"],
      className: "",
    },
    { id: "skills", component: <Skills />, tags: ["skills"] },

    {
      id: "summary",
      component: <SummaryCard />,
      tags: ["intro"],
      className: "",
    },
    {
      id: "experience",
      component: (
        <ExperienceCardHolder
          experienceData={experienceData}
          expanded={filter === "experience"}
          onFilterChange={onFilterChange}
          mode={mode}
        />
      ),
      tags: ["experience"],
      className: "md:row-span-2 lg:col-span-2",
    },
    {
      id: "education",
      component: (
        <Education
          expanded={filter === "experience"}
          onFilterChange={onFilterChange}
          mode={mode}
        />
      ),
      tags: ["experience"],
      className: "lg:col-span-2",
    },
    {
      id: "projects-header",
      component: (
        <ProjectCardHolder
          projectData={projectsData}
          expanded={filter === "projects"}
          onFilterChange={onFilterChange}
          mode={mode}
        />
      ),
      tags: ["projects"],
      className: "lg:col-span-2",
    },
    { id: "contact", component: <Contact />, tags: ["contact"] },
  ];

  const sortedCards = filter
    ? cards.sort((a, b) => {
        const aMatch = a.tags.includes(filter);
        const bMatch = b.tags.includes(filter);
        return aMatch === bMatch ? 0 : aMatch ? -1 : 1;
      })
    : cards;

  sortedCards.unshift(headerCard);
  return (
    <motion.div className="grid gap-4 grid-flow-dense grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {sortedCards.map((card) => {
        const isActive =
          !filter || card.tags.includes(filter) || card.tags.includes("header");
        return (
          <motion.div
            layoutId={card.id}
            key={card.id}
            className={`${
              card.className || ""
            } p-4 justify-center dark:border-white/50 border-black/50 border rounded-lg backdrop-blur-md  ${
              filter && !isActive ? "opacity-20" : ""
            } ${
              filter && card.tags.includes(filter)
                ? "md:col-span-3 lg:col-span-5"
                : ""
            }
            `}
          >
            {card.component}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default BentoGrid;
