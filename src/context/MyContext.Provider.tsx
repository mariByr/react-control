import {createContext} from "react";

interface ContextValueType {
    theme: "light" | "dark";
    changeTheme: ( theme: "light" | "dark") => void;
   }

const defaultContextValue:ContextValueType = {
    theme:'light',
    changeTheme: (theme: string) => console.log(theme),
}

export const MyContext=createContext<ContextValueType>(defaultContextValue)
