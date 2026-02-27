
import  axios from "axios";
import type { IFilmsResponseModel} from "../models/films/IFilmsResponseModel.ts";
import type {IGenre} from "../models/genre/IGenre.ts";
import type {IGenreResponse} from "../models/genre/IGenreResponse.ts";
import type {IDetailFilms} from "../models/films/IDetailFilms.ts";
import type {IMovieVideosResponse} from "../models/videoModels/IVideoResponse.ts";
import type ICast from "../models/creditsModel/ICast.ts";
import type {CreditsResponse} from "../models/creditsModel/CreditsResponse.ts";
import type {IReviewsResponse} from "../models/reviews/IReviewsResponse.ts";
import type {IReview} from "../models/reviews/IRewiew.ts";

const API_KEY='094a3173e05ad9cfd4d11b1b35c0eb56'

const axiosInstance=axios.create({
    baseURL:" https://api.themoviedb.org/3",
    headers:{},
    params:{api_key:API_KEY}
})
    //with_genres: genreId
export const getMovies=async (page:number, genreId?:number,searchTerm?: string):Promise<IFilmsResponseModel> => {
    const {data} = await axiosInstance.get<IFilmsResponseModel>('/discover/movie',{params:{page, with_genres: genreId ??undefined,query: searchTerm}})
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
export const getFilmById = async( id:number):Promise<IDetailFilms> => {
     const {data}=await axiosInstance.get<IDetailFilms>(`/movie/${id}`,{})
    return data
}
export const getVideo=async(id:number):Promise<IMovieVideosResponse> =>{
     const {data}=await axiosInstance.get<IMovieVideosResponse>(`/movie/${id}/videos`,{})
    return data
}
//function for actors
export const getMovieCredits=async (id:number):Promise<ICast[]> =>
{const {data}=await axiosInstance.get<CreditsResponse>(`/movie/${id}/credits`,{})
return data.cast
 }
 //function for reviwes
export const getReview=async(id:number):Promise<IReview[]> =>{
     const {data}= await axiosInstance.get<IReviewsResponse>(`/movie/${id}/reviews`,{})
    const reviews= data.results
    return reviews
}
