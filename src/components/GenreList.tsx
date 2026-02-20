
import {useGenres} from "../queries/genre.queries.ts";
import type {FC} from "react";


interface Props {
    setGenreId: (id: number | undefined) => void;
}

export const GenreList: FC<Props> = ({ setGenreId }) => {
    const { data, isLoading, isError } = useGenres();

    if (isLoading) return <div>Loading genres...</div>;
    if (isError) return <div>Error loading genres</div>;

    return (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {/* Кнопка скидання фільтра */}
            <button onClick={() => setGenreId(undefined)}>
                All
            </button>

            {data?.genres.map(genre => (
                <button
                    key={genre.id}
                    onClick={() => setGenreId(genre.id)}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
};
