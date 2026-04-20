import { HandThumbUpIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export default function DiscoveryRow({ name, action, date, info, likes, comments, initials = "A", image }) {
    return (
        <div className="bg-home-card-light dark:bg-home-card-dark rounded-xl p-3 flex flex-col gap-2">
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-background-light dark:bg-secondary-background-dark flex items-center justify-center text-sm font-semibold text-text-light dark:text-text-dark">
                        {initials}
                    </div>
                    <span className="font-semibold text-text-light dark:text-text-dark text-sm">{name}</span>
                </div>
                <span className="text-sm font-medium text-text-light dark:text-text-dark">{action}</span>
            </div>

            <div className="flex gap-3">
                
                <div className="flex-1 text-xs text-text-light dark:text-text-dark opacity-80 leading-relaxed">
                    <div>{date}</div>
                    <div>{info}</div>
                </div>
               
                <div className="w-20 h-20 rounded-lg bg-secondary-background-light dark:bg-secondary-background-dark shrink-0 overflow-hidden">
                    {image
                        ? <img src={image} alt="discovery" className="w-full h-full object-cover" />
                        : <div className="w-full h-full" />
                    }
                </div>
            </div>

            
            <div className="flex items-center gap-3 pt-1">
                <button className="flex items-center gap-1 text-text-light dark:text-text-dark opacity-70 hover:opacity-100 transition-opacity">
                    <HandThumbUpIcon className="w-4 h-4" />
                    <span className="text-xs">{likes ?? 0}</span>
                </button>
                <button className="flex items-center gap-1 text-text-light dark:text-text-dark opacity-70 hover:opacity-100 transition-opacity">
                    <ChatBubbleLeftIcon className="w-4 h-4" />
                    <span className="text-xs">{comments ?? 0}</span>
                </button>
            </div>
        </div>
    );
}