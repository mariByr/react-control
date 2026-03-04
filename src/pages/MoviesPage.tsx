import {MoviesList} from "../components/ moviesList/MoviesList.tsx";

import {useMoviesList} from "../queries/films.queries.tsx";

import {GenreList} from "../components/GenreList.tsx";

import {Pagination} from "../components/pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";


export const MoviesPage = () => {
    const [params,setParams] = useSearchParams();

    const page = Number(params.get("page")) || 1;
    const genreId = Number(params.get("genre")) || 0;
    const searchTerm = params.get("search") || "";

    const { data,isLoading, isError } = useMoviesList({page, genreId, searchTerm})
    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error loading movies</div>;

    const films = data?.results;

    return (
        <div className={'flex  flex-col gap-8  items-center justify-center'}>
            <GenreList
                genreId={genreId}
                onGenreChange={(id:number) =>
                    setParams(prev => {
                        prev.set("genre", String(id));
                        prev.set("page", "1");
                        prev.delete("search");
                        return prev;
                    })
                }
            />

            {searchTerm && films && films.length === 0 && (
                <p className={'text-red-500'}>Nothing was found for your request.</p>
            )}

            {films && films.length > 0 && (
                <MoviesList films={films} />
            )}

            <Pagination
                page={page}
                totalPages={data?.total_pages ?? 1}
                onPageChange={(newPage:number) =>
                    setParams(prev => {
                        prev.set("page", String(newPage));
                        return prev;
                    })
                }
            />
        </div>
    );
};
