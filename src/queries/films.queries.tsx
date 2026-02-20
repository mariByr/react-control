import {useQuery} from "@tanstack/react-query";
import {getMovies, searchMovies} from "../services/api.service.tsx";
import type {IFilmsResponseModel} from "../models/IFilmsResponseModel.ts";
interface MoviesQueryParams {
    page: number;
    genreId?: number | undefined;
    searchTerm?: string;
}
export const useMoviesList =({ page, genreId, searchTerm }: MoviesQueryParams) => {
    return useQuery<IFilmsResponseModel>({
        queryKey: ['movies', page, genreId, searchTerm],
        queryFn: () => {
            if (searchTerm) {
                return searchMovies(page, searchTerm)
            }
            return getMovies(page, genreId)
        }
    })
}
