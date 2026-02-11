import { LampDesk, Coffee } from "lucide-react";
import { useState,useEffect } from "react";
import { cn } from "../lib/utils";
export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

 useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme==="dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
}, []);
    const toggleTheme = () => {

        if (!isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }   
    };

    return (
            
            <button onClick={toggleTheme}
            
            className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
            >

                {isDarkMode ? (
                    <Coffee className="h-6 w-6 text-yellow-600 dark:text-yellow-400  hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                ) : (
                    <LampDesk className="h-6 w-6 text-blue-800 dark:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(156,163,175,0.8)]" />
                )}
            </button>
 
    );
}