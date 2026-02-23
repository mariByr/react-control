import type {FC} from "react";

interface IStarsRatingProps {
    rating: number;
}

export const StarsRating: FC<IStarsRatingProps> = ({ rating }) => {
    return <div>⭐ {rating}</div>;
};
