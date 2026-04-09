export default function LeaderboardRow({
  rank,
  name,
  count,
  label = "species discovered",
  initials = "A",
}) {
  return (
    <div className="bg-home-card-light dark:bg-home-card-dark rounded-xl px-4 py-3 flex items-center gap-3">
      <span className="text-sm font-bold text-text-light dark:text-text-dark w-6 flex-shrink-0">
        {rank}.)
      </span>
      <div className="w-8 h-8 rounded-full bg-secondary-background-light dark:bg-secondary-background-dark flex items-center justify-center text-sm font-semibold text-text-light dark:text-text-dark flex-shrink-0">
        {initials}
      </div>
      <span className="flex-1 font-semibold text-sm text-text-light dark:text-text-dark">
        {name}
      </span>
      <span className="text-sm text-text-light dark:text-text-dark opacity-80">
        {count} {label}
      </span>
    </div>
  );
}
