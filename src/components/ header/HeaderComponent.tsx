

import {Link, useLocation, useSearchParams} from "react-router-dom";
import React from "react";
import'./headerComponent.css'
import {UserComponent} from "../user/UserComponent.tsx";

interface HeaderComponentProps {
    theme?: "light" | "dark"
    toggleTheme:() => void;
}
export const HeaderComponent = ({theme,toggleTheme}: HeaderComponentProps) => {
    const [params, setParams] = useSearchParams();
    const searchTerm= params.get("search") || "";
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        const value = e.target.value;

        setParams((prev: URLSearchParams) => {

            if (value) {
                prev.set("search", value);
                prev.delete("genre");
            } else {
                prev.delete("search");
            }

            prev.set("page", "1");

            return prev;

        });

    };
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
                    onChange={handleSearch}
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
