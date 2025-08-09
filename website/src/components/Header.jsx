import { FiHexagon, FiHome } from "react-icons/fi";

const menu = [
  { label: "Projects", value: "projects" },
  { label: "Experience", value: "experience" },
  { label: "Skills", value: "skills" },
  { label: "Contact", value: "contact" },
];

const Header = ({ activeFilter, onFilterChange }) => (
  <div className="flex justify-between items-center">
    <button
      onClick={() => onFilterChange(null)}
      aria-label="Home"
      className="text-accent"
    >
      <FiHome className="text-2xl" />
    </button>
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
    </div>
  </div>
);

export default Header;
