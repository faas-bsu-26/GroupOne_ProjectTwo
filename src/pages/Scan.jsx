import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import ScanCamera from "../components/ScanCamera";

export default function Scan() {
    const [scanned, setScanned] = useState(false);
    const [type, setType] = useState("plant");
    const [inputValue, setInputValue] = useState("");
    const naviagte = useNavigate();

    useEffect(() => {
        setScanned(false);
    }, []);

    if (scanned) {
        return (
            <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
                <Title title="Scan" />
                <div className="rounded-xl pt-7 p-10 mt-5 m-15 flex flex-col gap-2 max-w-sm mx-auto bg-log-card-light dark:bg-log-card-dark">
                    <div className="flex justify-center items-center">
                        <div className="w-55 h-55 rounded-lg shrink-0 overflow-hidden flex justify-center items-center bg-secondary-background-light dark:bg-secondary-background-dark">
                            <img src={"./plant.jpg"} alt="scanned image" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="flex flex-col items-center w-full gap-2">
                            <select
                                className="border-2 border-gray-300 px-4 py-1 rounded-full shadow-sm focus:outline-none focus:ring-2 transition-all w-36 text-center text-sm bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark cursor-pointer"
                                value={type}
                                onChange={e => setType(e.target.value)}
                            >
                                <option value="plant">Plant</option>
                                <option value="animal">Animal</option>
                            </select>
                            <input
                                type="text"
                                className="mt-2 border-2 border-gray-300 rounded-full px-4 py-1 w-64 text-sm focus:outline-none focus:ring-2 transition-all bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                                placeholder="Description"
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                            />
                            <button
                                className="mt-2 w-64 py-2 rounded-full font-semibold shadow hover:opacity-90 transition-colors text-sm bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark cursor-pointer"
                                type="button"
                                onClick={() => naviagte('/log')}
                            >
                                Log
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            <Title title="Scan" />
      
            <div className="bg-primary-bg">
                <ScanCamera image={"/plant.jpg"} />
            </div>
      
            <div className="bg-primary-bg pt-1 pb-4 flex justify-center">
                <button onClick={() => setScanned(true)} className="relative w-24 h-24 flex items-center justify-center active:scale-95 transition-transform group cursor-pointer">
                    <div className="absolute w-20 h-20 rounded-full bg-white border border-black"></div>
                    <div className="absolute w-16 h-16 rounded-full bg-white group-hover:bg-neutral-300 group-active:bg-neutral-300 border border-black transition-colors"></div>
                </button>
            </div>
        </div>
    );
}
