import type {IMovie} from "../../models/IMovie.ts";
import type {FC} from "react";

interface MovieListCardProps {
    movie: IMovie;
}

export const MovieListCard:FC<MovieListCardProps> = ({movie} ) => {
    return (
        <div>
<p>{movie.title}</p>
        </div>
    );
};
