import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, MapPinIcon, UserIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import AlertModal from "./AlertModal";

export default function ActivityRow({ name, date, info, image, location, organizer, meetingPoint, details, spotsLeft }) {
    const [expanded, setExpanded] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (!showAlert) return;

        const timer = setTimeout(() => setShowAlert(false), 1000);
        return () => clearTimeout(timer);
    }, [showAlert]);

    return (
        <>
            <div
                className="bg-home-card-light dark:bg-home-card-dark rounded-xl p-3 flex flex-col gap-2 cursor-pointer hover:brightness-95 dark:hover:brightness-110 transition-all"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="flex items-center justify-between">
                    <span className="font-semibold text-text-light dark:text-text-dark text-sm">{name}</span>
                    {expanded
                        ? <ChevronUpIcon className="w-4 h-4 text-text-light dark:text-text-dark opacity-60 shrink-0" />
                        : <ChevronDownIcon className="w-4 h-4 text-text-light dark:text-text-dark opacity-60 shrink-0" />
                    }
                </div>

                <div className="flex gap-3">
                    <div className="flex-1 text-xs text-text-light dark:text-text-dark opacity-80 leading-relaxed">
                        <div>{date}</div>
                        <div>{info}</div>
                    </div>
                    <div className="w-20 h-20 rounded-lg bg-secondary-background-light dark:bg-secondary-background-dark shrink-0 overflow-hidden">
                        {image
                            ? <img src={image} alt="activity" className="w-full h-full object-cover" />
                            : <div className="w-full h-full" />
                        }
                    </div>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-80 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                    <div className="flex flex-col gap-2 pt-2 border-t border-text-light dark:border-text-dark border-opacity-20">

                        {meetingPoint && (
                            <div className="flex items-start gap-2 text-xs text-text-light dark:text-text-dark">
                                <MapPinIcon className="w-4 h-4 shrink-0 opacity-70 mt-0.5" />
                                <div>
                                    <span className="font-semibold">Meeting Point: </span>
                                    <span className="opacity-80">{meetingPoint}</span>
                                </div>
                            </div>
                        )}

                        {organizer && (
                            <div className="flex items-start gap-2 text-xs text-text-light dark:text-text-dark">
                                <UserIcon className="w-4 h-4 shrink-0 opacity-70 mt-0.5" />
                                <div>
                                    <span className="font-semibold">Organizer: </span>
                                    <span className="opacity-80">{organizer}</span>
                                </div>
                            </div>
                        )}

                        {details && (
                            <div className="flex items-start gap-2 text-xs text-text-light dark:text-text-dark">
                                <ClipboardDocumentListIcon className="w-4 h-4 shrink-0 opacity-70 mt-0.5" />
                                <span className="opacity-80 leading-relaxed">{details}</span>
                            </div>
                        )}

                        {spotsLeft !== undefined && (
                            <div className="text-xs text-text-light dark:text-text-dark opacity-70">
                                <span className="font-semibold">{spotsLeft}</span> spots remaining
                            </div>
                        )}

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowAlert(true);
                            }}
                            className="mt-1 w-full py-1.5 rounded-full text-xs font-semibold bg-text-light dark:bg-text-dark text-background-light dark:text-background-dark hover:opacity-80 transition-opacity cursor-pointer"
                        >
                            RSVP
                        </button>
                    </div>
                </div>
            </div>

            <AlertModal
                isOpen={showAlert}
                text={`RSVP confirmed for ${name}.`}
            />
        </>
    );
}