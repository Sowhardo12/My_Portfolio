import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [isDark, setIsDark] = useState(
        ()=>{
            const saved = localStorage.getItem("theme");
            if(saved) return saved === "dark";
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        });

        useEffect(
            ()=>{
                const root = document.documentElement;
                if(isDark){
                    root.classList.add("dark");
                    localStorage.setItem("theme","dakr");
                }else{
                    root.classList.remove("dark");
                    localStorage.setItem("theme","light");
                }
            },[isDark]);
            const toggleTheme = ()=>setIsDark(prev => !prev);
            return(
                <ThemeContext.Provider value={{isDark,toggleTheme}}>
                    {children}
                </ThemeContext.Provider>
            );
}