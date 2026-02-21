
import {useGenres} from "../queries/genre.queries.ts";
import type {FC} from "react";
import type {IGenre} from "../models/IGenre.ts";


interface Props {
    setGenreId: (id: number | undefined) => void;
}
export const GenreList: FC<Props> = ({ setGenreId }) => {
    const {data, isLoading, isError} = useGenres();

    if (isLoading) return <div>Loading genres...</div>;
    if (isError) return <div>Error loading genres</div>;

    console.log("GENRES DATA:", data);
    return (
        <div>
            <button onClick={() => setGenreId(undefined)}>
                All
            </button>

            {(data ?? []).map((genre: IGenre) => (
                <button key={genre.id} onClick={() => setGenreId(genre.id)} style={{
                    margin: "4px",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    background: "#f5f5f5",
                    cursor: "pointer"
                }}>
                    {genre.name}

                </button>
            ))}
        </div>
    )}
