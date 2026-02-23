import type {IDetailFilms} from "../../models/IDetailFilms.ts";
import type {FC} from "react";

interface MovieInfoProps {
    movie: IDetailFilms;
}

export const MovieInfo:FC<MovieInfoProps> = ({movie} ) => {
    return (
        <>
            <p>цей фільм для дітей{movie.adult}</p>
        </>
    );
};
