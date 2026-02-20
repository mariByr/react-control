import {useQuery} from "@tanstack/react-query";
import {getGenres} from "../services/api.service.tsx";

export const useGenres=()=>{return useQuery(
    {
        queryKey:['genre'],
        queryFn:getGenres

        })
    }
