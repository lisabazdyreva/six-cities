import {ChangeEvent} from 'react';
import {OfferRatingValues} from '../../const';


type CommentFormRatingProps = {
  selectedRating: number,
  handleRating: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function CommentFormRating({selectedRating, handleRating}: CommentFormRatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {
        Object.entries(OfferRatingValues).map(([ratingTitle, ratingValue]) => (
          <>
            <input
              key={ratingValue}
              className="form__rating-input visually-hidden"
              name="rating"
              value={`${ratingValue}`}
              id={`${ratingValue}-stars`}
              type="radio"
              checked={selectedRating === ratingValue}
              onChange={handleRating}
            />
            <label htmlFor={`${ratingValue}-stars`} className="reviews__rating-label form__rating-label" title={ratingTitle}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </>
        ))
      }
    </div>
  );
}

export default CommentFormRating;
