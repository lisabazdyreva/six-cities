import type {Review} from '../../types/review';

import {getRatingPercentValue, formatDateValue, formatDateAttr} from '../../utils';


type CommentMessageProps = {
  commentItem: Review;
};


function CommentMessage({commentItem}: CommentMessageProps): JSX.Element {
  const {comment, user, date, rating} = commentItem;

  const ratingPercentValue = getRatingPercentValue(rating);

  const dateValue = formatDateValue(date);
  const dateAttr = formatDateAttr(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="User avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingPercentValue}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateAttr}>{dateValue}</time>
      </div>
    </li>
  );
}

export default CommentMessage;
