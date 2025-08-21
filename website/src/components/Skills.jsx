import skillsData from "./../data/skills.json";

const hueClasses = [
  "inset-ring-teal-500/20",
  "inset-ring-sky-500/20",
  "inset-ring-amber-500/20",
  "inset-ring-violet-500/20",
  "inset-ring-emerald-500/20",
  "inset-ring-rose-500/20",
];

const Skills = () => {
  const groups = skillsData;

  const chips = groups.flatMap((g, gi) =>
    g.skills.map((skill) => ({ skill, gi, group: g.title }))
  );

  return (
    <section>
      <h2 className="text-2xl leading-9 tracking-wide font-heading pb-4">
        Skills
      </h2>

      <div className="flex flex-wrap gap-1 justify-center">
        {chips.map(({ skill, gi, group }) => {
          const hue = hueClasses[gi % hueClasses.length];
          return (
            <span
              key={`${group}-${skill}`}
              className={`relative group px-2 py-1 rounded-lg
                          text-[11px] md:text-xs leading-4 tracking-[0.5px] ${hue}
                          select-none cursor-default inset-ring-2`}
              title={group} // native fallback
              tabIndex={0}
            >
              {skill}

              {/* minimal custom tooltip */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2
                           whitespace-nowrap rounded px-2 py-0.5 text-[10px] leading-4
                           bg-white/90 text-neutral-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                           group-focus-visible:opacity-100 group-focus-visible:scale-100
                           transition z-10"
              >
                {group}
              </span>
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
