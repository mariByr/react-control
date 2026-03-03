
import {useQuery} from "@tanstack/react-query";
import {getCast} from "../services/api.service.tsx";

export const useCast=(id:number)=>{ return useQuery({
       queryKey:['cast', id] ,
         queryFn:()=>getCast(id)
    })
}
