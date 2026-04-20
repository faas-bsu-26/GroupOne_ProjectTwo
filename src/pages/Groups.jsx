import { useState } from "react";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import NavButtons from "../components/NavButtons";
import DiscoveryRow from "../components/DiscoveryRow";
import LeaderboardRow from "../components/LeaderboardRow";
import GoalRow from "../components/GoalRow";

const GROUP_TABS = ["Discoveries", "Leaderboard", "Weekly Goals"];

const groupsData = [
    {
        id: 1,
        name: "Group 1",
        members: 4,
        discoveries: [
            { name: "Alex", action: "Found a plant", date: "Apr 8, 2026 · 10:24am", info: "text", likes: 1, comments: 2, initials: "A", image: "plant.jpg" },
            { name: "Jordan", action: "Found a plant", date: "Apr 7, 2026 · 2:10pm", info: "Text", likes: 2, comments: 1, initials: "J", image: "plant.jpg" },
            { name: "Sam", action: "Found a plant", date: "Apr 7, 2026 · 9:05am", info: "Text", likes: 0, comments: 0, initials: "S", image: "plant.jpg" },
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
            { name: "Morgan", action: "Found an animal", date: "Apr 8, 2026 · 8:30am", info: "Great blue heron at the pond", likes: 4, comments: 3, initials: "M", image: "animal.jpg" },
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

function decodeGroupParam(value) {
    if (!value) return "";
    try {
        return decodeURIComponent(value);
    } catch {
        return "";
    }
}

function GroupDetail({ group }) {
    const [tab, setTab] = useState("Discoveries");

    return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light text-text-dark dark:bg-background-dark dark:text-text-light">
            <Title title={group.name} />
            <NavButtons tabs={GROUP_TABS} active={tab} onSelect={setTab} />

            <div className="flex flex-col gap-3 px-3 pb-6">
                {tab === "Discoveries" && group.discoveries.map((d, i) => (
                    <DiscoveryRow key={i} {...d} />
                ))}
                {tab === "Leaderboard" && group.leaderboard.map((l) => (
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
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const groupParam = searchParams.get("group");
    const selectedGroupName = decodeGroupParam(groupParam);
    const selectedGroup = groupsData.find((group) => group.name === selectedGroupName) || null;

    if (selectedGroup) {
        return <GroupDetail group={selectedGroup} />;
    }

    return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light text-text-dark dark:bg-background-dark dark:text-text-light">
            <Title title="Groups" />

            <div className="flex flex-col gap-3 px-3 py-4">
                {groupsData.map((group) => (
                    <button
                        key={group.id}
                        onClick={() => navigate(`/groups?group=${encodeURIComponent(group.name)}`)}
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