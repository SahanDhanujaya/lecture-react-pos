/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from "react";

// 1st step create context
export const ThemeContext = createContext({theme: "light", toggleTheme: () => {}});

// 2nd step create provider
export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

