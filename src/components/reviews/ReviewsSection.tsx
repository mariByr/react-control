import type {IReview} from "../../models/reviews/IRewiew.ts";

interface ReviewsSectionProps {
    review: IReview;
}

export const ReviewsSection = ({review}: ReviewsSectionProps) => {
    return (
        <div className="reviews-section">
            <h3>*****</h3>
            <p>{review.content.length > 500
                    ? review.content.slice(0, 500) + "..."
                    : review.content}</p>
            <p>{review.author}</p>
        </div>
    );
};
