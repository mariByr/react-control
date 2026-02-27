import {useQuery} from "@tanstack/react-query";
import {getVideo} from "../services/api.service.tsx";

export const useVideo=(id:number)=> {return useQuery({
    queryKey: ['video',id],
    queryFn:()=> { return getVideo(id)},
})
}
