
import  axios from "axios";
import type { IFilmsResponseModel} from "../models/IFilmsResponseModel.ts";
import type {IGenre} from "../models/IGenre.ts";
import type {IGenreResponse} from "../models/IGenreResponse.ts";

const API_KEY='094a3173e05ad9cfd4d11b1b35c0eb56'
const axiosInstance=axios.create({
    baseURL:" https://api.themoviedb.org/3",
    headers:{},
    params:{api_key:API_KEY}
})

export const getMovies=async (page:number,genreId?:number):Promise<IFilmsResponseModel>=>{ const {data}=await axiosInstance.get<IFilmsResponseModel>('/discover/movie',{params:{page, with_genres: genreId}})
    return {
        page: data.page,
        results: data.results,
        total_pages: data.total_pages,
        total_results: data.total_results
    };

};

 export const getGenres=async ():Promise<IGenre[]>=>{
     const {data}=await axiosInstance.get<IGenreResponse>('/genre/movie/list',{})
     return data.genres
 }

export const searchMovies=async(page:number,searchTerm:string):Promise<IFilmsResponseModel> =>{
     const {data}=await axiosInstance.get<IFilmsResponseModel>('/search/movie',{params:
             {query:searchTerm,
                 page:page}})
    return data
}
