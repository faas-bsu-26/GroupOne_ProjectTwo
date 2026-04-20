import { useState } from "react";
import Title from "../components/Title";
import NavButtons from "../components/NavButtons";
import DiscoveryRow from "../components/DiscoveryRow";
import GoalRow from "../components/GoalRow";
import { useNavigate } from "react-router-dom";

const TABS = ["Discoveries", "Goals", "Scan"];

const discoveries = [
    { name: "Alex", action: "Found a plant", date: "Apr 8, 2026 · 10:24am", info: "Text", likes: 5, comments: 7, initials: "A", image: "plant.jpg" },
    { name: "Alex", action: "Found a plant", date: "Apr 9, 2026 · 10:25am", info: "Text", likes: 6, comments: 6, initials: "A", image: "plant.jpg" },
    { name: "Alex", action: "Found a plant", date: "Apr 10, 2026 · 10:26am", info: "Text", likes: 7, comments: 5, initials: "A", image: "plant.jpg" },

];

const goals = [
    { goalText: "Find 5 new plants", current: 3, total: 5 },
    { goalText: "Find 2 new animals", current: 1, total: 2 },
    { goalText: "Make 10 discoveries", current: 8, total: 10 },
];

export default function Log() {
    const [tab, setTab] = useState("Discoveries");
    const navigate = useNavigate();

    return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light text-text-dark dark:bg-background-dark dark:text-text-light">
            <Title title="Log" />
            <NavButtons tabs={TABS} active={tab} onSelect={setTab} />

            {tab === "Scan" && (
                navigate("/scan")
            )}

            <div className="flex flex-col gap-3 px-3 pb-6">
                {tab === "Discoveries" && discoveries.map((d, i) => (
                    <DiscoveryRow key={i} {...d} />
                ))}

                {tab === "Goals" && goals.map((g, i) => (
                    <GoalRow key={i} {...g} />
                ))}
            </div>
        </div>
    );
}
