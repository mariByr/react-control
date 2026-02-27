import {MovieInfo} from "../components/singleMovieInfo/MovieInfo.tsx";
import {useParams} from "react-router-dom";
import {useFilmDetail} from "../queries/filmInfo.queries.tsx";
import {useReviews }from "../queries/reviews.queries.tsx";
import type {IVideo} from "../models/videoModels/IVideo.ts";
import {useVideo} from "../queries/video.queries.tsx";

export const DetailsPage = () => {
    const {id} = useParams();
    const movieId =  Number(id)
    const {data:movie,isLoading: movieLoading, isError: movieError} = useFilmDetail(movieId);

    const { data: videoData, isLoading:videoLoading, isError:videoError } = useVideo(movieId);
    const videos:IVideo[] = videoData?.results ?? [];
    const{data: reviews ,isLoading:reviewLoading,isError:reviewError}=useReviews(movieId)
    if (!id) return <div>No id</div>;
    if (movieLoading) return <div>Loading...</div>;
    if(movieError)return <div>Error: {reviewError}</div>;

    if (reviewLoading) return <div>Loading...</div>;
    if(reviewError)return <div>Error: {movieError}</div>;
    if (videoLoading) return <div>Loading...</div>;
    if(videoError)return <div>Error: {videoError}</div>;


    return (
        <div>
            {
                movie && <MovieInfo
                    movie={movie}
                    videos={videos}
                    reviews={reviews??[]}
                />}

        </div>
    )
}
