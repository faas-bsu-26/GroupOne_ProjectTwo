import HomeButton from "./HomeButton";
import MenuDropdown from "./MenuDropdown";

export default function Title({ title }) {
    return (
        <div className="flex items-center justify-between p-3 border-b border-text-light dark:border-text-dark">
            <HomeButton />
            <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">{title}</h1>
            <MenuDropdown />
        </div>
    );
}