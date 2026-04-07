import { HomeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function HomeButton() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleHomeClick}
      title="Go to Home"
      className="group cursor-pointer"
    >
      <HomeIcon
        className="h-8 w-8 text-text-light dark:text-text-dark group-hover:text-text-hover-light group-hover:dark:text-text-hover-dark transition-colors"
      />
    </button>
  );
}