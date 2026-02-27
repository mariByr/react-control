import type {IDetailFilms} from "../../models/films/IDetailFilms.ts";
import type {FC} from "react";
import {PosterPreview} from "../posterPreview-movie image/PosterPreview.tsx";
import {GenreBadge} from "../GenreBange.tsx";
import './detailMovie.css'
import type {IVideo} from "../../models/videoModels/IVideo.ts";
import VideoSection from "../video/VideoSection.tsx";
import type {IReview} from "../../models/reviews/IRewiew.ts";

interface MovieInfoProps {
    movie: IDetailFilms,
    videos: IVideo[],
    reviews: IReview[]
}

export const MovieInfo: FC<MovieInfoProps> = ({movie, videos, reviews}) => {
    return (
        <div className={'movie-detail'}>
            <div className={'movie-info'}><PosterPreview posterPath={movie.poster_path}/>
                <h1 className="text-3xl font-bold">{movie.title}</h1>
                <div className="flex gap-2 flex-wrap">
                    {movie.genres?.map(genre => (
                        <GenreBadge key={genre.id}
                                    name={genre.name} id={genre.id}/>

                    ))}
                </div>
                <p><strong>Rating:</strong> {movie.vote_average}</p>
                <p>
                    <strong>Country:</strong>{" "}
                    {movie.production_countries?.map(c => c.name).join(", ")}
                </p>
                <p><strong>Release Date:</strong> {movie.release_date} </p>
                <p><strong>Adult:</strong> {movie.adult ? "Yes" : "No"}
                    <strong>Language:</strong> {movie.original_language}</p>
                <p><strong>Runtime:</strong>{movie.runtime}</p>
            </div>
            <div className={'video'}>
                <h2>Watch a movie </h2>
                <div><VideoSection videos={videos}/></div>
                <p><strong>What is this movie about?</strong>: {movie.overview}</p>
                <div>
                    {reviews?.map((review) => (
                        <div key={review.id}>{review.content}</div>
                    ))}
                </div>
            </div>

        </div>
    );
};
