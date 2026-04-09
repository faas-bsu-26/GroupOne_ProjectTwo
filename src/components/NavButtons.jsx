export default function NavButtons({ tabs, active, onSelect }) {
  return (
    <div className="flex items-center gap-2 p-3 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelect(tab)}
          className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors cursor-pointer
                        ${
                          active === tab
                            ? "bg-text-light dark:bg-text-dark text-background-light dark:text-background-dark border-text-light dark:border-text-dark"
                            : "bg-transparent border-text-light dark:border-text-dark text-text-light dark:text-text-dark hover:bg-secondary-background-light dark:hover:bg-secondary-background-dark"
                        }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
