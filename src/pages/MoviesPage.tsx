import {MoviesList} from "../components/ moviesList/MoviesList.tsx";
import {useContext, useState} from "react";
import {useMoviesList} from "../queries/films.queries.tsx";
import {MyContext} from "../context/MyContext.Provider.tsx";
import {GenreList} from "../components/GenreList.tsx";

import {Pagination} from "../components/pagination/Pagination.tsx";


export const MoviesPage = () => {
    const [page,setPage] = useState(1);
       const[genreId,setGenreId] = useState<number>(0);
    const { searchTerm } = useContext(MyContext)
    const { data } = useMoviesList({page, genreId, searchTerm})
    const films = data?.results;

    return (
        <div className={'flex  flex-col gap-8  items-center justify-center'}>
        <GenreList  genreId={ genreId}
                    setGenreId={ setGenreId} key={genreId} />

            {searchTerm && films && films.length === 0 && (
                <p className={'text-red-500'}>Nothing was found for your request.</p>
            )}

            {films && films.length > 0 && (
                <MoviesList films={films} />
            )}

            <Pagination
                page={page}
                totalPages={data?.total_pages ?? 1}
                onPageChange={setPage}
            />
        </div>
    );
};
