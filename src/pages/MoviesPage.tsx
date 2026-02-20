import {MoviesList} from "../components/ moviesList/MoviesList.tsx";
import {useContext, useState} from "react";
import {useMoviesList} from "../queries/films.queries.tsx";
import {MyContext} from "../context/MyContext.Provider.tsx";
import {GenreList} from "../components/GenreList.tsx";

export const MoviesPage = () => {
    const [page] = useState(1);
    const[genreId,setGenreId] = useState<number | undefined>(undefined);
    const { searchTerm } = useContext(MyContext)
    const { data } = useMoviesList({page, genreId, searchTerm})

    return (
        <div>
        <GenreList setGenreId={setGenreId} key={genreId} />
        <MoviesList films={data?.films ?? []} />
        </div>
    );
};
