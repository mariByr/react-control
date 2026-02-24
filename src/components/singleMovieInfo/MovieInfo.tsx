import type {IDetailFilms} from "../../models/IDetailFilms.ts";
import type {FC} from "react";
import {PosterPreview} from "../posterPreview-movie image/PosterPreview.tsx";
import {GenreBadge} from "../GenreBange.tsx";
import './detailMovie.css'

interface MovieInfoProps {
    movie: IDetailFilms;
}

export const MovieInfo:FC<MovieInfoProps> = ({movie} ) => {
    return (
        <div className={'movie-detail'}>
            <PosterPreview posterPath={movie.poster_path}/>
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <div className="flex gap-2 flex-wrap">
                {movie.genres?.map(genre => (
                    <GenreBadge key={genre.id}
                        name={genre.name} id={genre.id}/>

                ))}
            </div>
            <div>
                <p><strong>Rating:</strong> {movie.vote_average}</p>
                <p>
                    <strong>Country:</strong>{" "}
                    {movie.production_countries?.map(c => c.name).join(", ")}
                </p>
                <p><strong>Release Date:</strong> {movie.release_date} </p>
                <p><strong>Adult:</strong> {movie.adult ? "Yes" : "No"}   <strong>Language:</strong> {movie.original_language}</p>
                <p> <strong>Runtime:</strong>{movie.runtime}</p>
            </div>
            <p> {}</p>
            <p>{movie.overview}</p>
        </div>
    );
};
