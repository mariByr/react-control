import {useQuery} from "@tanstack/react-query";
import {getGenres} from "../services/api.service.tsx";

import type {IGenre} from "../models/genre/IGenre.ts";

export const useGenres=()=>{return useQuery<IGenre[], Error>(
    {
        queryKey:['genre'],
        queryFn:getGenres

        })
    }
