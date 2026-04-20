import { useState } from "react";
import Title from "../components/Title";
import NavButtons from "../components/NavButtons";
import DiscoveryRow from "../components/DiscoveryRow";
import LeaderboardRow from "../components/LeaderboardRow";
import GoalRow from "../components/GoalRow";

const TABS = ["Discoveries", "Leaderboard", "Weekly Goals"];
const PLANT_IMAGE = `${import.meta.env.BASE_URL}plant.jpg`;

const discoveries = [
    { name: "Alex", action: "Found a plant", date: "Apr 8, 2026 · 10:24am", info: "Text", likes: 5, comments: 5, initials: "A", image: PLANT_IMAGE },
    { name: "Jordan", action: "Found a plant", date: "Apr 8, 2026 · 9:10am", info: "Text", likes: 5, comments: 5, initials: "J", image: PLANT_IMAGE },
    { name: "Sam", action: "Found a plant", date: "Apr 7, 2026 · 3:45pm", info: "Text", likes: 3, comments: 2, initials: "S", image: PLANT_IMAGE },
];

const leaderboard = [
    { rank: 1, name: "Alex", count: 34, initials: "A" },
    { rank: 2, name: "Jordan", count: 30, initials: "J" },
    { rank: 3, name: "Sam", count: 25, initials: "S" },
    { rank: 4, name: "Bob", count: 20, initials: "C" },
    { rank: 5, name: "Morgan", count: 19, initials: "M" },
];

const goals = [
    { goalText: "Find 5 new plants", current: 3, total: 5 },
    { goalText: "Find 2 new animals", current: 1, total: 2 },
    { goalText: "Make 10 discoveries", current: 8, total: 10 },
];

export default function Community() {
    const [tab, setTab] = useState("Discoveries");

    return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light text-text-dark dark:bg-background-dark dark:text-text-light">
            <Title title="Community" />
            <NavButtons tabs={TABS} active={tab} onSelect={setTab} />

            <div className="flex flex-col gap-3 px-3 pb-6">
                {tab === "Discoveries" && discoveries.map((d, i) => (
                    <DiscoveryRow key={i} {...d} />
                ))}

                {tab === "Leaderboard" && leaderboard.map((l) => (
                    <LeaderboardRow key={l.rank} {...l} />
                ))}

                {tab === "Weekly Goals" && goals.map((g, i) => (
                    <GoalRow key={i} {...g} />
                ))}
            </div>
        </div>
    );
}