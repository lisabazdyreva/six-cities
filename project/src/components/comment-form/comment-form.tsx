import {ChangeEvent, FormEvent, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import {CommentData} from '../../types/comment-data';

import {postComment} from '../../store/actions/api-actions';


function mapStateToProps({id}: State) {
  return ({
    id,
  });
}

function mapDispatchToProps(dispatch: ThunkAppDispatch) {
  return ({
    onSubmit(commentData: CommentData) {
      dispatch(postComment(commentData));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function CommentForm(props: PropsFromRedux): JSX.Element {
  const {id, onSubmit} = props;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleInputChange = (evt:ChangeEvent<HTMLInputElement>): void => {
    setRating(Number(evt.target.value));
  };

  const handleTextAreaChange = (evt:ChangeEvent<HTMLTextAreaElement>):void => {
    setComment(evt.target.value);
  };

  function onSubmitComment(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (rating !== 0 && comment !== '') {
      onSubmit ({
        id: id,
        comment: comment,
        rating: rating,
      });
      //eslint-disable-next-line
      setRating(0);
      setComment('');
    }
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitComment}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={rating === 5}
          onChange={handleInputChange}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          checked={rating === 4}
          onChange={handleInputChange}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={rating === 3}
          onChange={handleInputChange}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={rating === 2}
          onChange={handleInputChange}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          checked={rating === 1}
          onChange={handleInputChange}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextAreaChange}
        value={comment}
        maxLength={50}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export {CommentForm};
export default connector(CommentForm);
