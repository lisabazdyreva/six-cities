import {ChangeEvent} from 'react';


type CommentFormRatingProps = {
  selectedRating: number,
  handleRating: (evt: ChangeEvent<HTMLInputElement>) => void;
  ratingTitle: string,
  ratingValue: number,
};

function CommentFormRating({selectedRating, handleRating, ratingTitle, ratingValue}: CommentFormRatingProps): JSX.Element {
  return (
    <>
      <input
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
  );
}

export default CommentFormRating;
