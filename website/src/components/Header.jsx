const menu = [
  { label: "Projects", value: "projects" },
  { label: "Experience", value: "experience" },
  { label: "Skills", value: "skills" },
  { label: "Contact", value: "contact" },
];

const Header = ({ activeFilter, onFilterChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary/80 backdrop-blur z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <span className="font-heading font-bold text-xl text-accent1">AS</span>
        <div className="flex gap-4 items-center">
          {menu.map((item) => (
            <button
              key={item.value}
              onClick={() => onFilterChange(item.value)}
              className={`tracking-wide text-sm md:text-base transition-colors ${
                activeFilter === item.value
                  ? "text-accent2"
                  : "text-textPrimary hover:text-accent2"
              }`}
            >
              {item.label}
            </button>
          ))}
          {activeFilter && (
            <button
              onClick={() => onFilterChange(null)}
              className="ml-4 text-xs md:text-sm text-accent1 underline"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
