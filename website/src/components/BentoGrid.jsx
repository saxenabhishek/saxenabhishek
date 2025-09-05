import { LayoutGroup, motion } from "motion/react";
import About from "./About.jsx";
import Skills from "./leafComponents/Skills.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import Header from "./Header.jsx";
import SummaryCard from "./leafComponents/SummaryCard.jsx";
import ProfileCard from "./ProfileCard.jsx";
import ExperienceCardHolder from "./ExperienceCardHolder.jsx";
import ProjectCardHolder from "./ProjectCardHolder.jsx";

const BentoGrid = ({ filter, onFilterChange, mode, toggleMode }) => {
  const headerCard = {
    id: "header",
    component: (
      <Header
        activeFilter={filter}
        onFilterChange={onFilterChange}
        mode={mode}
        toggleMode={toggleMode}
      />
    ),
    tags: ["header"],
    className:
      "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 sticky top-2 z-10 shadow-sm bg-blend-hue  backdrop-blur-md py-2",
  };

  const cards = [
    {
      id: "about",
      component: <About />,
      tags: ["intro"],
      className: "md:col-span-2   backdrop-blur-3xl",
    },
    {
      id: "profile",
      component: <></>,
      tags: ["intro"],
      className:
        "bg-[url(/Profile-edited.webp)] w-2xs mx-auto sm:w-auto sm:m-0 bg-teal-50 dark:bg-green-50 transition-colors bg-center bg-cover bg-origin-border bg-no-repeat min-h-96 ",
    },
    {
      id: "skills",
      component: <Skills />,
      tags: ["skills"],
      className: "sm:col-span-2",
    },
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
          expanded={filter === "experience"}
          onFilterChange={onFilterChange}
          mode={mode}
        />
      ),
      tags: ["experience"],
      className: "sm:row-span-2 md:col-span-2 lg:col-span-2",
    },
    {
      id: "education",
      component: (
        <Education
          expanded={filter === "education"}
          onFilterChange={onFilterChange}
          mode={mode}
        />
      ),
      tags: ["education"],
      className: "md:col-span-2",
    },
    {
      id: "projects-header",
      component: (
        <ProjectCardHolder
          expanded={filter === "projects"}
          onFilterChange={onFilterChange}
          mode={mode}
        />
      ),
      tags: ["projects"],
      className: "md:col-span-2",
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
    <>
      {sortedCards.map((card) => {
        const isActive =
          !filter || card.tags.includes(filter) || card.tags.includes("header");
        return (
          <motion.article
            layout="scale"
            style={{ borderRadius: "8px" }}
            layoutId={card.id}
            key={card.id}
            className={`${
              card.className || ""
            } p-4 justify-center dark:border-white/50 border-black/50 border overflow-clip ${
              filter && !isActive
                ? "opacity-20 dark:opacity-20 "
                : "opacity-100 "
            } ${
              filter && card.tags.includes(filter)
                ? "md:col-span-3 lg:col-span-5 "
                : ""
            }`}
          >
            {card.component}
          </motion.article>
        );
      })}
    </>
  );
};

export default BentoGrid;
