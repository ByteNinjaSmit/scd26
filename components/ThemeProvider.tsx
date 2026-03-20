"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
    mounted: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const root = document.documentElement;
        root.classList.add("dark");
        root.classList.remove("light");
        localStorage.setItem("theme", "dark");
    }, []);

    return (
        <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => {}, mounted }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
