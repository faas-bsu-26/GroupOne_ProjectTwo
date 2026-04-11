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
                info="A walk threw nature."
                image="NatureWalk.jpg"

                />

                <ActivityRow
                name="Nature Walk"
                date="April 22, 2026. 2 - 3 pm"
                info="A walk through nature."
                image="NatureWalk.jpg"
                />
            </div>
        </div>

      
    );
}
