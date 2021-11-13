import {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';

import CommentFormRating from '../comment-form-rating/comment-form-rating';
import CommentFormMessage from '../comment-form-message/comment-form-message';

import {postComment} from '../../store/actions/api-actions/api-actions-comments';


type CommentFormProps = {
  id: number;
};


function CommentForm({id}: CommentFormProps ): JSX.Element {
  const dispatch = useDispatch();

  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const isDisabled = rating === 0 || comment === '';
  const isFieldsEmpty = rating !== 0 && comment !== '';


  const handleRating = useCallback(
    (evt:ChangeEvent<HTMLInputElement>): void => setRating(Number(evt.target.value)),
    [],
  );

  const handleMessage = useCallback(
    (evt:ChangeEvent<HTMLTextAreaElement>):void => setComment(evt.target.value),
    [],
  );

  function onSubmitComment(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (isFieldsEmpty) {
      dispatch(postComment({
        id: id,
        comment: comment,
        rating: rating,
      }));

      setRating(0);
      setComment('');
    }
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitComment}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <CommentFormRating
        handleRating={handleRating}
        rating={rating}
      />
      <CommentFormMessage
        handleMessage={handleMessage}
        comment={comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export {CommentForm};
export default CommentForm;
