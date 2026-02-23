
import type {FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {MovieListCard} from "../movieCard/MovieListCard.tsx";

interface Props {
 films: IMovie[];
}

export const MoviesList: FC<Props> = ({ films }) => {

 return (
     <div className={'grid grid-cols-5 gap-8 justify-items-center'}>
      {
          films.map((movie:IMovie) => (
                  <MovieListCard key={movie.id} movie={movie}/>))
          }
     </div>
 )
};
