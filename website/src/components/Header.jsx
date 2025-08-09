import { FiHexagon } from "react-icons/fi";

const menu = [
  { label: "Projects", value: "projects" },
  { label: "Experience", value: "experience" },
  { label: "Skills", value: "skills" },
  { label: "Contact", value: "contact" },
];

const Header = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex justify-between items-center">
      <FiHexagon className="text-2xl text-accent" />
      <div className="flex gap-4 items-center">
        {menu.map((item) => (
          <button
            key={item.value}
            onClick={() => onFilterChange(item.value)}
            className={`tracking-wide text-sm md:text-base transition-colors ${
              activeFilter === item.value
                ? "text-accent underline"
                : "text-black dark:text-textPrimary hover:text-accent"
            }`}
          >
            {item.label}
          </button>
        ))}
        {activeFilter && (
          <button
            onClick={() => onFilterChange(null)}
            className="ml-4 text-xs md:text-sm text-accent underline"
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
