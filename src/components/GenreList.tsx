
import {useGenres} from "../queries/genre.queries.ts";
import type {FC} from "react";
import type {IGenre} from "../models/IGenre.ts";
import {GenreBadge} from "./GenreBange.tsx";
interface Props {
    genreId: number ;
    setGenreId: (id: number) => void;
}
export const GenreList: FC<Props> = ({ genreId, setGenreId }) => {
    const {data, isLoading, isError} = useGenres();
    if (isLoading) return <div>Loading genres...</div>;
    if (isError) return <div>Error loading genres</div>;
    console.log("GENRES DATA:", data);
    return (
        <div className="flex flex-wrap justify-between gap-2">

            <GenreBadge
                id={0}
                name="All"
                onSelect={setGenreId}
                active={genreId === 0}
            />

            {(data ?? []).map((genre: IGenre) => (<GenreBadge
    key={genre.id}
    id={genre.id}
    name={genre.name}
    onSelect={setGenreId}
    active={genreId === genre.id}
  />
))}
        </div>
    )}
