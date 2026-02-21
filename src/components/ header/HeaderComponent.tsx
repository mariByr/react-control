import { useContext } from "react";
import { useLocation } from "react-router-dom";
import {MyContext} from "../../context/MyContext.Provider.tsx";


export const HeaderComponent = () => {
    const { searchTerm, setSearchTerm } = useContext(MyContext);
    const location = useLocation();

    // перевіряємо сторінку
    const isMoviesPage = location.pathname === "/";
    const isDetailsPage = location.pathname.includes("/movies/");

    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid #ccc"
        }}>

            {/* ЛОГО (завжди показуємо) */}
            <h2>Movie App</h2>

            {/* УМОВНИЙ РЕНДЕРИНГ */}
            {isMoviesPage && (
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: "8px 12px",
                        width: "250px",
                        borderRadius: "8px",
                        border: "1px solid gray"
                    }}
                />
            )}

            {/* На DetailsPage можна показати кнопку назад */}
            {isDetailsPage && (
                <span style={{ fontSize: "14px", opacity: 0.7 }}>
          Details Page
        </span>
            )}

        </header>
    );
};
