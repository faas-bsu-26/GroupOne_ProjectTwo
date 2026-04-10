import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const menuItems = [
        { label: "Home", action: () => navigate("/") },
        { label: "Activities", action: () => navigate("/activities") },
        { label: "Community", action: () => navigate("/community") },
        { label: "Groups", action: () => navigate("/groups") },
        { label: "Log", action: () => navigate("/log") },
    ];

    // Theme toggle logic
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    const toggleTheme = () => {
        if (typeof window !== 'undefined') {
            document.documentElement.classList.toggle('dark');
            setIsDark(document.documentElement.classList.contains('dark'));
        }
        setIsOpen(false);
    };

    return (
        <div className="relative flex items-center h-full" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                title="Open menu"
                className="group cursor-pointer"
            >
                <Bars3Icon className="h-8 w-8 text-text-light dark:text-text-dark group-hover:text-text-hover-light group-hover:dark:text-text-hover-dark transition-colors"/>
            </button>
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-secondary-background-light dark:bg-secondary-background-dark border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
                    {menuItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => {
                                setIsOpen(false);
                                item.action();
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-text-light dark:text-text-dark cursor-pointer transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-text-light dark:text-text-dark cursor-pointer transition-colors border-t border-text-dark dark:border-text-light"
                    >
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            )}
        </div>
    );
}