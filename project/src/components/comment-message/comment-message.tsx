import type {Review} from '../../types/review';

import {getRatingPercentValue} from '../../utils';

import {Months} from '../../const';

type CommentMessageProps = {
  review: Review;
};


function CommentMessage({review}: CommentMessageProps): JSX.Element {
  const {comment, user, date, rating} = review;

  const ratingPercentValue = getRatingPercentValue(rating);

  const dateObj = new Date(date);
  const dateText = `${Months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
  const dateAttr = date.slice(0, 10);

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
        <time className="reviews__time" dateTime={dateAttr}>{dateText}</time>
      </div>
    </li>
  );
}

export default CommentMessage;
