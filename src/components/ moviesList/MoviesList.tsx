
import type {FC} from "react";
import type {IMovie} from "../../models/films/IMovie.ts";
import {MovieListCard} from "../movieCard/MovieListCard.tsx";
import './moviList.css'
interface Props {
 films: IMovie[];
}

export const MoviesList: FC<Props> = ({ films }) => {

 return (
     <div className={'list-grid'}>
      {
          films.map((movie:IMovie) => (
                  <MovieListCard key={movie.id} movie={movie}/>))
          }
     </div>
 )
};
