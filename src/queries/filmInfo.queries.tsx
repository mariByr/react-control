
   import {useQuery} from "@tanstack/react-query";
import type {IDetailFilms} from "../models/films/IDetailFilms.ts";
import {getFilmById} from "../services/api.service.tsx";

export const useFilmDetail = (id:number)=>{return useQuery<IDetailFilms,Error>({
        queryKey:['filmDetail',id],
        queryFn:() => getFilmById(id),
    enabled: !!id,
    })
   }
