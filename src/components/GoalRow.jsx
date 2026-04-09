import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function GoalRow({ goalText, current, total }) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  return (
    <div className="bg-home-card-light dark:bg-home-card-dark rounded-xl p-4 flex items-center gap-4">
      <div className="flex-1">
        <p className="font-semibold text-sm text-text-light dark:text-text-dark mb-2">
          {goalText}
        </p>
        <p className="text-xs text-text-light dark:text-text-dark opacity-70 mb-1">
          Progress:
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-text-light dark:text-text-dark opacity-70 w-8 flex-shrink-0">
            {current}/{total}
          </span>
          <div className="flex-1 h-3 bg-secondary-background-light dark:bg-secondary-background-dark rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-400 dark:bg-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
      <div className="w-12 h-12 rounded-lg border-2 border-text-light dark:border-text-dark flex items-center justify-center flex-shrink-0">
        <MagnifyingGlassIcon className="w-7 h-7 text-text-light dark:text-text-dark" />
      </div>
    </div>
  );
}
