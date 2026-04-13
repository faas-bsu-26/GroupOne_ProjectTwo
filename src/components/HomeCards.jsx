export default function HomeCard({ name, info, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`bg-home-card-light dark:bg-home-card-dark rounded-xl p-3 flex flex-col gap-2
            ${onClick ? "cursor-pointer hover:opacity-80 transition" : ""}`}
        >
            <div className="flex items-center justify-between">
                <span className="font-semibold text-text-light dark:text-text-dark text-sm">
                    {name}
                </span>
            </div>

            <div className="text-xs text-text-light dark:text-text-dark opacity-80 leading-relaxed">
                {info}
            </div>
        </div>
    );
}