import Title from "../components/Title";
import HomeCard from "../components/HomeCards";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light text-text-dark dark:bg-background-dark dark:text-text-light">
            <Title title="Home" />

            <div className="p-4 flex flex-col gap-4">

                <HomeCard
                    name="About"
                    info="Log your finds, discover your community, and find fun activities today!"
                />

                <HomeCard
                    name="Log"
                    info="View your discovery log"
                    onClick={() => navigate("/log")}
                />

                <HomeCard
                    name="Community"
                    info="See what others are doing"
                    onClick={() => navigate("/community")}
                />

                <HomeCard
                    name="Activities"
                    info="Browse activities"
                    onClick={() => navigate("/activities")}
                />

            </div>
        </div>
		
	);
}
