import Title from "../components/Title";
import ActivityRow from "../components/ActivityRow";

export default function Activities() {
    return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light text-text-dark dark:bg-background-dark dark:text-text-light">
            <Title title="Activities" />

            <div className="p-4 flex flex-col gap-4">

                <ActivityRow
                    name="Nature Walk"
                    date="April 22, 2026. 2 - 3 pm"
                    info="Lorem ipsum dolor sit amet."
                    image="NatureWalk.jpg"
                    meetingPoint="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    organizer="Lorem ipsum dolor sit."
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    spotsLeft={8}
                />

                <ActivityRow
                    name="Nature Walk"
                    date="April 24, 2026. 2 - 3 pm"
                    info="Lorem ipsum dolor sit amet."
                    image="NatureWalk.jpg"
                    meetingPoint="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    organizer="Lorem ipsum dolor sit."
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    spotsLeft={8}
                />

                <ActivityRow
                    name="Nature Walk"
                    date="April 30, 2026. 5 - 6 pm"
                    info="Lorem ipsum dolor sit amet."
                    image="NatureWalk.jpg"
                    meetingPoint="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    organizer="Lorem ipsum dolor sit."
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    spotsLeft={8}
                />

                <ActivityRow
                    name="Nature Walk"
                    date="May 5, 2026. 5 - 6 pm"
                    info="Lorem ipsum dolor sit amet."
                    image="NatureWalk.jpg"
                    meetingPoint="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    organizer="Lorem ipsum dolor sit."
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    spotsLeft={8}
                />

            </div>
        </div>
    );
}