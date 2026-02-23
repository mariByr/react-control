import {MovieInfo} from "../components/singleMovieInfo/MovieInfo.tsx";
import {useParams} from "react-router-dom";
import {useFilmDetail} from "../queries/filmInfo.queries.tsx";

export const DetailsPage = () => {
    const {id} = useParams();

        console.log(id);
    const movieId =  Number(id)

    const {data} = useFilmDetail(movieId);
    if (!id) return <div>No id</div>;
    return (
        <div>
            {
                data && <MovieInfo movie={data}/>}
        </div>
    )
}
