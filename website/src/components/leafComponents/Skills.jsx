import skillsData from "../../data/skills.json";

const Skills = () => {
  const groups = skillsData;

  const chip =
    "bg-teal-300/10 px-2 py-1 rounded-lg text-[11px] md:text-xs leading-4 tracking-wider font-light";

  return (
    <>
      <h1 className="text-2xl leading-9 tracking-wide font-heading pb-4 text-left">
        Skills
      </h1>

      <div className="grid grid-cols-2 gap-2 last:col-span-3">
        {groups.map((group) => (
          <article key={group.title} aria-labelledby={`skills-${group.title}`}>
            <h2
              id={`skills-${group.title}`}
              className="text-sm md:text-base tracking-normal leading-4 md:leading-6 pb-1"
            >
              {group.title}
            </h2>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={`${group.title}-${skill}`} className={chip}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Skills;
