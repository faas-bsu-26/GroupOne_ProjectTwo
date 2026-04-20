import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import ScanCamera from "../components/ScanCamera";

const PLANT_IMAGE = `${import.meta.env.BASE_URL}plant.jpg`;

export default function Scan() {
    const [scanned, setScanned] = useState(false);
    const [type, setType] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(null);
    const [isConfirmed, setIsConfirmed] = useState(false); 
    const navigate = useNavigate();

    const handleClick = () => {
        if (!type || !inputValue) {
            setError("Please select a type and enter a description.");
            return;
        }

        setError(null);
        setIsConfirmed(true);

        setTimeout(() => {
            navigate('/log');
        }, 1500);
    }
    
    useEffect(() => {
        setScanned(false);
        setIsConfirmed(false);
    }, []);

    if (scanned) {
        return (
            <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
                <Title title="Scan" />
                <div className="rounded-xl pt-7 p-10 mt-5 m-15 flex flex-col gap-2 max-w-sm mx-auto bg-log-card-light dark:bg-log-card-dark">
                    
                    {isConfirmed ? (
                        <div className="flex flex-col items-center justify-center py-10 animate-in fade-in zoom-in duration-300">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold text-green-600 dark:text-green-400">Log Saved!</h2>
                            <p className="text-sm opacity-70 mt-2">Redirecting to your log...</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-center items-center">
                                <div className="w-55 h-55 rounded-lg shrink-0 overflow-hidden flex justify-center items-center bg-secondary-background-light dark:bg-secondary-background-dark">
                                    <img src={PLANT_IMAGE} alt="scanned image" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <div className="flex flex-col items-center w-full gap-2">
                                    <select
                                        className="border-2 border-gray-300 px-4 py-1 rounded-full shadow-sm focus:outline-none focus:ring-2 transition-all w-36 text-center text-sm bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark cursor-pointer"
                                        value={type}
                                        onChange={e => setType(e.target.value)}
                                    >
                                        {type === "" && <option value="" disabled>Type</option>}
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
                                        onClick={handleClick}
                                    >
                                        Log
                                    </button>

                                    <p className={`text-xs w-64 text-center min-h-4 ${error ? "text-red-500" : "invisible"}`}>
                                        {error || "placeholder"}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        )
    }
    
    return (
        <div className="mx-auto min-h-screen flex flex-col max-w-100 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            <Title title="Scan" />
      
            <div className="bg-primary-bg">
                <ScanCamera image={PLANT_IMAGE} />
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