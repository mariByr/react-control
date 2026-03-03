import {useQuery} from "@tanstack/react-query";
import {getMovies, searchMovies} from "../services/api.service.tsx";
import type {IFilmsResponseModel} from "../models/films/IFilmsResponseModel.ts";
import { keepPreviousData } from '@tanstack/react-query';

interface MoviesQueryParams {
    page: number;
    genreId?: number;
    searchTerm?: string;
}

export const useMoviesList =({ page, genreId, searchTerm }: MoviesQueryParams) => {
    return useQuery<IFilmsResponseModel>({
        queryKey: ['movies', page, genreId, searchTerm],
        queryFn: () => {
            if (searchTerm) {
                return searchMovies(page, searchTerm)
            }
            return getMovies(page, genreId === 0 ? undefined : genreId)

        },
        placeholderData: keepPreviousData
    })
}
