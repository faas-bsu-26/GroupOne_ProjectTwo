import Title from "../components/Title";
import ScanCamera from "../components/ScanCamera";

export default function Scan() {
    return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light text-text-dark dark:bg-background-dark dark:text-text-light">
            <Title title="Scan" />
      
            <div className="flex-1 bg-primary-bg">
                <ScanCamera image={"/plant.jpg"} />
            </div>
      
            <div className="bg-primary-bg pb-4 flex justify-center">
                <button onClick={null} className="relative w-24 h-24 flex items-center justify-center active:scale-95 transition-transform group">
                    <div className="absolute w-20 h-20 rounded-full bg-white border border-black"></div>
                    <div className="absolute w-16 h-16 rounded-full bg-white group-hover:bg-neutral-300 group-active:bg-neutral-300 border border-black transition-colors"></div>
                </button>
            </div>
        </div>
    );
}
