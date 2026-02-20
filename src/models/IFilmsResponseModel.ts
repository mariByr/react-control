import type {IMovie} from "./IMovie.ts";

export interface IFilmsResponseModel {
   page: number;
   films: IMovie[];
   total_pages: number;
   total_results: number;
}
