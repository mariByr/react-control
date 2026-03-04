
import {useGenres} from "../queries/genre.queries.ts";
import type {FC} from "react";
import type {IGenre} from "../models/genre/IGenre.ts";
import {GenreBadge} from "./GenreBange.tsx";
interface Props {
    genreId: number ;
    onGenreChange: (id: number) => void
}
export const GenreList: FC<Props> = ({ genreId, onGenreChange }) => {
    const {data, isLoading, isError} = useGenres();
    if (isLoading) return <div>Loading genres...</div>;
    if (isError) return <div>Error loading genres</div>;

    return (
        <div className="grid grid-cols-3 gap-2 justify-items-center mx-auto md:flex md:flex-wrap md:justify-between">
            <GenreBadge
                id={0}
                name="All"
                onSelect={onGenreChange}
                active={genreId === 0}
            />
            {(data ?? []).map((genre: IGenre) => (<GenreBadge
    key={genre.id}
    id={genre.id}
    name={genre.name}
    onSelect={onGenreChange}
    active={genreId === genre.id}
  />
))}
        </div>
    )}
