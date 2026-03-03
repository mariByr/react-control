import {useContext} from "react";
import {Link, useLocation} from "react-router-dom";
import {MyContext} from "../../context/MyContext.Provider.tsx";
import'./headerComponent.css'
import {UserComponent} from "../user/UserComponent.tsx";


interface HeaderComponentProps {
    theme?: "light" | "dark"
    toggleTheme:() => void;
}

export const HeaderComponent = ({theme,toggleTheme}: HeaderComponentProps) => {
    const {searchTerm, setSearchTerm} = useContext(MyContext);
    const location = useLocation();

    // перевіряємо сторінку
    const isMoviesPage = location.pathname === "/";
    const isDetailsPage = location.pathname.includes("/movies/");

    return (
        <header>

            {/* ЛОГО  */}
            <Link to="/">

                <h2 className={'logo'}>Movie Rock App</h2>
            </Link>

            {/*інпут для пошуку*/}
            {isMoviesPage && (
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            )}

            {isDetailsPage && (<span>Detail information</span>)}

            {/*перемикач теми*/}
            <button className={'theme-toggle'} onClick={toggleTheme}>
                {theme === "light" ? "🌙" : "☀️"}
            </button>
            <UserComponent name={'MARY'}
            />
        </header>
    );
};
