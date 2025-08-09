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
    component: (
      <ExperienceCard experience={exp} expanded={filter === "experience"} />
    ),
    tags: ["experience"],
  }));

  const cards = [
    {
      id: "header",
      component: <Header activeFilter={filter} onFilterChange={onFilterChange} />,
      tags: ["header"],
      className: "md:col-span-2 lg:col-span-3",
    },
    {
      id: "about",
      component: <About />,
      tags: ["intro"],
      className: "md:col-span-2",
    },
    { id: "profile", component: <ProfileCard />, tags: ["intro"] },
    { id: "summary", component: <SummaryCard />, tags: ["intro"] },
    { id: "whimsy", component: <FidgetCard />, tags: ["intro"] },
    { id: "projects-header", component: <SectionCard title="Projects" />, tags: ["projects"] },
    ...projectCards,
    { id: "experience-header", component: <SectionCard title="Experience" />, tags: ["experience"] },
    ...experienceCards,
    {
      id: "education",
      component: <Education expanded={filter === "experience"} />,
      tags: ["experience"],
    },
    { id: "skills", component: <Skills />, tags: ["skills"] },
    { id: "contact", component: <Contact />, tags: ["contact"] },
    { id: "mode", component: <ModeToggleCard mode={mode} toggleMode={toggleMode} />, tags: ["utility"] },
  ];

  const sortedCards = filter
    ? [...cards].sort((a, b) => {
        const aMatch = a.tags.includes(filter);
        const bMatch = b.tags.includes(filter);
        return aMatch === bMatch ? 0 : aMatch ? -1 : 1;
      })
    : cards;

  return (
    <AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {sortedCards.map((card) => {
          const isActive = !filter || card.tags.includes(filter);
          return (
            <motion.div
              layoutId={card.id}
              key={card.id}
              className={`bg-white dark:bg-primary/20 shadow-lg ring-1 ring-black/5 rounded-xl p-6 flex flex-col justify-center ${
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
    </AnimatePresence>
  );
};

export default BentoGrid;
