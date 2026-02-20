
import './App.css'
import {HeaderComponent} from "./components/ header/HeaderComponent.tsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import { MyContext } from './context/MyContext.Provider.tsx';

function App() {
    const [themeColor,setThemeColor]=useState<string>('light');
    const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div>
        <MyContext.Provider value={{
            theme:themeColor,
            changeTheme:(theme: string) => setThemeColor(theme),
            searchTerm: searchTerm,
            setSearchTerm: setSearchTerm,

        }}>
            <HeaderComponent />
            <Outlet/>
        </MyContext.Provider>



    </div>
  )
}

export default App
