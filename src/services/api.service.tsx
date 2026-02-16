import  axios from "axios";
import type {IFilmsResponseModel} from "../models/IFilmsResponseModel.ts";

const axiosInstance=axios.create({
    baseURL:" https://api.themoviedb.org/3",
    headers:{}
})
export const getMovies=async ():Promise<IFilmsResponseModel>=>{ const {data:films}=await axiosInstance.get('',{})
return films
}
