import {useQuery} from "@tanstack/react-query";
import {getReview} from "../services/api.service.tsx";

export const useReviews= (id:number)=>{
    return useQuery({
        queryKey:['reviews',id],
        queryFn:()=>{ return getReview(id)},
    })
}
