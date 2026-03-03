
import './App.css'
import {HeaderComponent} from "./components/ header/HeaderComponent.tsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import { MyContext } from './context/MyContext.Provider.tsx';
import {Footer} from "./footer/Footer.tsx";

function App() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };
  return (
    <div className={`app ${theme}`}>
        <MyContext.Provider value={{
            theme:theme,
            changeTheme: (newTheme) => setTheme(newTheme),
            searchTerm: searchTerm,
            setSearchTerm: setSearchTerm,

        }}>
           <HeaderComponent  theme={theme} toggleTheme={toggleTheme}/>
            <main><Outlet/></main>
        </MyContext.Provider>

<Footer/>

    </div>
  )
}

export default App
