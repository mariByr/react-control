


import type {FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";

interface Props {
 films: IMovie[];
}

export const MoviesList: FC<Props> = ({ films }) => {
 return (
     <div>
      {films.map(film => (
          <div key={film.id}>{film.title}</div>
      ))}
     </div>
 );
};
