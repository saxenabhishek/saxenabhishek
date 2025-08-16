import { motion, AnimatePresence } from "framer-motion";
import About from "./About.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ExperienceCard from "./ExperienceCard.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import Header from "./Header.jsx";
import SectionCard from "./SectionCard.jsx";
import SummaryCard from "./SummaryCard.jsx";
import ProfileCard from "./ProfileCard.jsx";
import ModeToggleCard from "./ModeToggleCard.jsx";
import FidgetCard from "./FidgetCard.jsx";
import projectsData from "../data/projects.json";
import experienceData from "../data/experience.json";

const BentoGrid = ({ filter, onFilterChange, mode, toggleMode }) => {
  const projectCards = projectsData.projects.map((project, i) => ({
    id: `project-${i}`,
    component: (
      <ProjectCard project={project} expanded={filter === "projects"} />
    ),
    tags: ["projects"],
  }));

  const experienceCards = experienceData.experiences.map((exp, i) => ({
    id: `exp-${i}`,
    component: <ExperienceCard experience={exp} />,
    tags: ["experience"],
  }));

  const sectionClassName = "lg:col-span-2";

  const headerCard = {
    id: "header",
    component: <Header activeFilter={filter} onFilterChange={onFilterChange} />,
    tags: ["header"],
    className: "md:col-span-2 lg:col-span-4 sticky top-0 z-10",
  };

  const cards = [
    {
      id: "profile",
      component: <ProfileCard />,
      tags: ["intro"],
      className: "row-span-2 p-0",
    },
    {
      id: "mode",
      component: <ModeToggleCard mode={mode} toggleMode={toggleMode} />,
      tags: ["utility"],
      className: "row-span-1",
    },
    {
      id: "about",
      component: <About />,
      tags: ["intro"],
      className: "md:col-span-2 lg:col-span-2",
    },
    {
      id: "summary",
      component: <SummaryCard />,
      tags: ["intro"],
      className: "lg:col-span-2",
    },

    {
      id: "whimsy",
      component: <FidgetCard />,
      tags: ["intro"],
      className: "row-span-1",
    },
    {
      id: "experience-header",
      component: <SectionCard title="Experience" />,
      tags: ["experience"],
      className: sectionClassName,
    },
    ...experienceCards,
    {
      id: "projects-header",
      component: <SectionCard title="Projects" />,
      tags: ["projects"],
      className: sectionClassName,
    },
    ...projectCards,
    {
      id: "education",
      component: <Education expanded={filter === "experience"} />,
      tags: ["experience"],
    },
    { id: "skills", component: <Skills />, tags: ["skills"] },
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
    <AnimatePresence>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
        {sortedCards.map((card) => {
          const isActive = !filter || card.tags.includes(filter);
          return (
            <motion.div
              layoutId={card.id}
              key={card.id}
              className={`bg-white/60 dark:bg-primary/40 backdrop-blur-md border border-black/20 dark:border-white/20 rounded-xl p-6 flex flex-col justify-center ${
                card.className || ""
              } ${
                filter && card.tags.includes(filter)
                  ? "sm:col-span-2 lg:col-span-4"
                  : ""
              } ${filter && !isActive ? "opacity-20" : ""}`}
            >
              {card.component}
            </motion.div>
          );
        })}
      </div>
    </AnimatePresence>
  );
};

export default BentoGrid;
