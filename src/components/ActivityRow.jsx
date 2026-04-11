
export default function ActivityRow({ name, date, info, image }) {
    return (
        <div className="bg-home-card-light dark:bg-home-card-dark rounded-xl p-3 flex flex-col gap-2">
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-text-light dark:text-text-dark text-sm">{name}</span>
                </div>
            </div>

            <div className="flex gap-3">
                
                <div className="flex-1 text-xs text-text-light dark:text-text-dark opacity-80 leading-relaxed">
                    <div>{date}</div>
                    <div>{info}</div>
                </div>
               
                <div className="w-20 h-20 rounded-lg bg-secondary-background-light dark:bg-secondary-background-dark flex-shrink-0 overflow-hidden">
                    {image
                        ? <img src={image} alt="activity" className="w-full h-full object-cover" />
                        : <div className="w-full h-full" />
                    }
                </div>
            </div>
        </div>
    );
}