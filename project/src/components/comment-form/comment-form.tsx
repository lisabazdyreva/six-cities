import {ChangeEvent, FormEvent, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {ThunkAppDispatch} from '../../types/action';
import {CommentData} from '../../types/comment-data';

import {postComment} from '../../store/actions/api-actions';

import CommentFormRating from '../comment-form-rating/comment-form-rating';


function mapDispatchToProps(dispatch: ThunkAppDispatch) {
  return ({
    onSubmit(commentData: CommentData) {
      dispatch(postComment(commentData));
    },
  });
}

const connector = connect(null, mapDispatchToProps);

type CommentFormProps = {
  id: number;
};
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = CommentFormProps & PropsFromRedux;


function CommentForm(props: ConnectedComponentProps): JSX.Element {
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

      setRating(0);
      setComment('');
    }
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitComment}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <CommentFormRating selectedRating={rating} handleRating={(evt) => handleInputChange(evt)}/>
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
          disabled={rating === 0 || comment === ''}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export {CommentForm};
export default connector(CommentForm);
