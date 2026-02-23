import {createContext} from "react";

interface ContextValueType {
    theme: "light" | "dark";
    changeTheme: ( theme: "light" | "dark") => void;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}
const defaultContextValue:ContextValueType = {
    theme:'light',
    changeTheme: (theme: string) => console.log(theme),
    searchTerm: "",
    setSearchTerm: () => {},
}

export const MyContext=createContext<ContextValueType>(defaultContextValue)
