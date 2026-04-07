import Title from "../components/Title";

export default function Home() {
	return (
		<div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light text-text-dark dark:bg-background-dark dark:text-text-light">
			<Title title="Home" />
		</div>
	);
}
