import { FiHexagon, FiHome } from "react-icons/fi";

const menu = [
  { label: "Projects", value: "projects" },
  { label: "Experience", value: "experience" },
  { label: "Skills", value: "skills" },
  { label: "Contact", value: "contact" },
];

const Header = ({ activeFilter, onFilterChange }) => (
  <div className="flex justify-between items-center">
    <button onClick={() => onFilterChange(null)} aria-label="Home" className="">
      <FiHome className="text-base sm:text-xl" />
    </button>
    <div className="flex gap-2 md:gap-8 items-center">
      {menu.map((item) => (
        <button
          key={item.value}
          onClick={() => onFilterChange(item.value)}
          className={`tracking-wide text-xs leading-5 font-body md:text-sm transition-colors ${
            activeFilter === item.value
              ? "text-teal-400 underline"
              : "text-black dark:text-white hover:text-teal-400 dark:hover:text-teal-400"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
);

export default Header;
