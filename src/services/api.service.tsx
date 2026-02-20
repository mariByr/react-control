
import  axios from "axios";
import type { IFilmsResponseModel} from "../models/IFilmsResponseModel.ts";
import type {IGenreResponse} from "../models/IGenreResponse.ts";

const API_KEY='094a3173e05ad9cfd4d11b1b35c0eb56'
const axiosInstance=axios.create({
    baseURL:" https://api.themoviedb.org/3",
    headers:{},
    params:{api_key:API_KEY}
})

export const getMovies=async (page:number,genreId?:number):Promise<IFilmsResponseModel>=>{ const {data}=await axiosInstance.get<IFilmsResponseModel>('/discover/movie',{params:{page, with_genres: genreId}})
return data
};

 export const getGenres=async ():Promise<IGenreResponse>=>{
     const {data}=await axiosInstance.get('/genre/movie/list',{})
     return data.genres
 }

export const searchMovies=async(page:number,searchTerm:string):Promise<IFilmsResponseModel> =>{
     const {data}=await axiosInstance.get<IFilmsResponseModel>('/search/movie',{params:
             {query:searchTerm,
                 page:page}})
    return data
}
