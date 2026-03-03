import type {IDetailFilms} from "../../models/films/IDetailFilms.ts";
import {PosterPreview} from "../posterPreview-movie image/PosterPreview.tsx";
import {GenreBadge} from "../GenreBange.tsx";
import './detailMovie.css'
import type {IVideo} from "../../models/videoModels/IVideo.ts";
import VideoSection from "../video/VideoSection.tsx";
import type {IReview} from "../../models/reviews/IRewiew.ts";
import {ReviewsSection} from "../reviews/ReviewsSection.tsx";
import {type FC, useState} from "react";
import {ActorsSection} from "../actors/ActorsSection.tsx";
import type {ICast} from "../../models/cast/ICast.ts";


interface MovieInfoProps {
    movie: IDetailFilms,
    videos: IVideo[],
    reviews: IReview[],
    cast: ICast[] | undefined
}

export const MovieInfo: FC<MovieInfoProps> = ({movie, videos, reviews, cast}) => {

    const [showReviews, setShowReviews] = useState(false);
    return (

        <div className={'movie-detail'}>
            <div className={'movie-info'}>
                <PosterPreview posterPath={movie.poster_path}/>
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
                <p> <strong>Adult:</strong> {movie.adult ? "Yes" : "No"} </p>
                <p> <strong>Language:</strong> {movie.original_language}</p>
                <p><strong>Runtime:</strong>{movie.runtime}</p>
                <p><strong>Main actors</strong></p>
                <div>
                    {
                    cast?.slice(0, 6).map((actor) =>( <ActorsSection key={actor.id} cast={actor}/>))}
                </div>
            </div>
            <div className={'video'}>
                <h2>Watch a movie </h2>
                <div><VideoSection videos={videos}/></div>
                <div><p><strong>What is this movie about?</strong></p> <p>{movie.overview}</p></div>
                <button onClick={() => setShowReviews(prev => !prev)}>
                    {showReviews ? "Hide reviews" : "Show reviews"}
                </button>
                {showReviews && (
                    <div>
                        {reviews.map((review) => (<ReviewsSection key={review.id} review={review}/>)
                        )}
                    </div>
                )}
            </div>

        </div>
    );
};
