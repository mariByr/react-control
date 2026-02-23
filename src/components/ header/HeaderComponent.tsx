import {useContext} from "react";
import {useLocation} from "react-router-dom";
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
            <h2>Movie App</h2>

            {/*інпут для пошуку*/}
            {isMoviesPage && (
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            )}

            {/* На DetailsPage можна показати кнопку назад */}
            {isDetailsPage && (
                <span style={{fontSize: "14px", opacity: 0.7}}>
          Details Page
        </span>
            )}

            {/*перемикач теми*/}
            <button className={'theme-togle'} onClick={toggleTheme}>
                {theme === "light" ? "🌙" : "☀️"}
            </button>
            <UserComponent name={'MARY'}
            />
        </header>
    );
};
