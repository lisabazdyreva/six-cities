import {ChangeEvent, memo, Fragment} from 'react';
import {OfferRatingValues} from '../../const';


type CommentFormRatingProps = {
  rating: number;
  handleRating: (evt: ChangeEvent<HTMLInputElement>) => void;
};


function CommentFormRating({rating, handleRating}: CommentFormRatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {
        Object.entries(OfferRatingValues).map(([ratingTitle, ratingValue]) => {

          const idValue = `${ratingValue}-stars`;
          const isCheckedValue = rating === ratingValue;
          const htmlForValue = `${ratingValue}-stars`;

          return (
            <Fragment key={ratingValue}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={ratingValue}
                id={idValue}
                type="radio"
                checked={isCheckedValue}
                onChange={handleRating}
              />
              <label htmlFor={htmlForValue} className="reviews__rating-label form__rating-label" title={ratingTitle}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
          );
        })
      }
    </div>
  );
}

export default memo(CommentFormRating);
