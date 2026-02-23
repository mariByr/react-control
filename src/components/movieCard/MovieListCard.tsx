import type {IMovie} from "../../models/IMovie.ts";
import type {FC} from "react";
import {PosterPreview} from "../posterPreview-movie image/PosterPreview.tsx";
import {StarsRating} from "../StarsRating.tsx";
import './listCard.css'
import {Link} from "react-router-dom";

interface MovieListCardProps {
    movie: IMovie;
}

export const MovieListCard:FC<MovieListCardProps> = ({movie} ) => {
    return (
        <Link to={`/movies/${movie.id}`}>
        <div className={'card'}>
            <PosterPreview posterPath={movie.poster_path} />
            <h2>{movie.title}</h2>
            <StarsRating rating={movie.vote_average} />
        </div>
        </Link>
    );
};
