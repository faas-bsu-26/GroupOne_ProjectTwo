import { useState } from "react";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import Title from "../components/Title";
import NavButtons from "../components/NavButtons";
import DiscoveryRow from "../components/DiscoveryRow";
import LeaderboardRow from "../components/LeaderboardRow";
import GoalRow from "../components/GoalRow";

const GROUP_TABS = ["Group Discoveries", "Group Leaderboard", "Weekly Goals"];

const groupsData = [
    {
        id: 1,
        name: "Group 1",
        members: 4,
        discoveries: [
            { name: "Alex", action: "Found a plant", date: "Apr 8, 2026 · 10:24am", info: "text", likes: 1, comments: 2, initials: "A", image: "/plant.jpg" },
            { name: "Jordan", action: "Found a plant", date: "Apr 7, 2026 · 2:10pm", info: "Text", likes: 2, comments: 1, initials: "J", image: "/plant.jpg" },
            { name: "Sam", action: "Found a plant", date: "Apr 7, 2026 · 9:05am", info: "Text", likes: 0, comments: 0, initials: "S", image: "/plant.jpg" },
        ],
        leaderboard: [
            { rank: 1, name: "Alex", count: 14, initials: "A" },
            { rank: 2, name: "Jordan", count: 12, initials: "J" },
            { rank: 3, name: "Sam", count: 10, initials: "S" },
            { rank: 4, name: "Bob", count: 8, initials: "C" },
        ],
        goals: [
            { goalText: "Find 5 new plants", current: 3, total: 5 },
            { goalText: "Find 2 new animals", current: 1, total: 2 },
            { goalText: "Make 10 discoveries", current: 8, total: 10 },
        ],
    },
    {
        id: 2,
        name: "Group 2",
        members: 3,
        discoveries: [
            { name: "Morgan", action: "Found an animal", date: "Apr 8, 2026 · 8:30am", info: "Great blue heron at the pond", likes: 4, comments: 3, initials: "M" },
        ],
        leaderboard: [
            { rank: 1, name: "Morgan", count: 11, initials: "M" },
            { rank: 2, name: "John", count: 7, initials: "R" },
            { rank: 3, name: "Drew", count: 5, initials: "D" },
        ],
        goals: [
            { goalText: "Find 5 new plants", current: 1, total: 5 },
            { goalText: "Find 2 new animals", current: 2, total: 2 },
            { goalText: "Make 10 discoveries", current: 4, total: 10 },
        ],
    },
];

function GroupDetail({ group, onBack }) {
    const [tab, setTab] = useState("Group Discoveries");

    return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light text-text-dark dark:bg-background-dark dark:text-text-light">

            <div className="flex items-center justify-between p-2 border-b border-text-light dark:border-text-dark">
                <button
                    onClick={onBack}
                    className="text-sm font-medium px-3 py-1.5 rounded-full border border-text-light dark:border-text-dark text-text-light dark:text-text-dark hover:bg-secondary-background-light dark:hover:bg-secondary-background-dark transition-colors cursor-pointer"
                >
                    ← Groups
                </button>
                <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">{group.name}</h1>
                <span className="text-sm text-text-light dark:text-text-dark opacity-50 w-16 text-right">{group.members} members</span>
            </div>

            <NavButtons tabs={GROUP_TABS} active={tab} onSelect={setTab} />

            <div className="flex flex-col gap-3 px-3 pb-6">
                {tab === "Group Discoveries" && group.discoveries.map((d, i) => (
                    <DiscoveryRow key={i} {...d} />
                ))}
                {tab === "Group Leaderboard" && group.leaderboard.map((l) => (
                    <LeaderboardRow key={l.rank} {...l} />
                ))}
                {tab === "Weekly Goals" && group.goals.map((g, i) => (
                    <GoalRow key={i} {...g} />
                ))}
            </div>
        </div>
    );
}

export default function Groups() {
    const [selectedGroup, setSelectedGroup] = useState(null);

    if (selectedGroup) {
        return <GroupDetail group={selectedGroup} onBack={() => setSelectedGroup(null)} />;
    }

    return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light text-text-dark dark:bg-background-dark dark:text-text-light">
            <Title title="Groups" />

            <div className="flex flex-col gap-3 px-3 py-4">
                {groupsData.map((group) => (
                    <button
                        key={group.id}
                        onClick={() => setSelectedGroup(group)}
                        className="bg-home-card-light dark:bg-home-card-dark rounded-xl px-5 py-4 flex items-center justify-between hover:brightness-95 dark:hover:brightness-110 transition-all cursor-pointer text-left"
                    >
                        <div>
                            <p className="font-semibold text-text-light dark:text-text-dark">{group.name}</p>
                            <p className="text-sm text-text-light dark:text-text-dark opacity-70">{group.members} members</p>
                        </div>
                        <PencilSquareIcon className="w-5 h-5 text-text-light dark:text-text-dark opacity-70" />
                    </button>
                ))}

                <button className="bg-home-card-light dark:bg-home-card-dark rounded-xl px-5 py-4 flex items-center gap-3 hover:brightness-95 dark:hover:brightness-110 transition-all cursor-pointer">
                    <PlusIcon className="w-5 h-5 text-text-light dark:text-text-dark" />
                    <span className="font-semibold text-text-light dark:text-text-dark">Create New Group</span>
                </button>
            </div>
        </div>
    );
}