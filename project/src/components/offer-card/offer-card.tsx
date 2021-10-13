import CommentForm from '../comment-form/comment-form';
import CommentsList from '../comments-list/comments-list';

import {getRatingPercentValue, formatType} from '../../utils';

import type {Offer} from '../../types/offer';
import type {Reviews} from '../../types/review';

type OfferCardProps = {
  card: Offer;
  reviews: Reviews;
};

function OfferCard({card, reviews}: OfferCardProps): JSX.Element {
  const {
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    isPremium,
    isFavorite,
    images,
  } = card;

  const ratingPercentValue = getRatingPercentValue(rating);
  const typeText = formatType(type);

  const checkedImagesOverflow = (images.length > 5) ? images.slice(0, 6) : images;

  return(
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {
            (checkedImagesOverflow.length)
              ? checkedImagesOverflow.map((image) => <div key={image + new Date().getTime()} className="property__image-wrapper"><img className="property__image" src={image} alt={title}/></div>)
              : ''
          }
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && <div className="property__mark"><span>Premium</span></div>}
          <div className="property__name-wrapper">
            <h1 className="property__name">{title}</h1>
            <button className={isFavorite ? 'property__bookmark-button button property__bookmark-button--active' : 'property__bookmark-button button'} type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: ratingPercentValue}}/>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {typeText}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`}
            </li>
            <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {
                (goods.length)
                  ? goods.map((good) => <li className="property__inside-item" key={good + new Date().getTime()}>{good}</li>)
                  : ''
              }
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={host.isPro ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' : 'property__avatar-wrapper user__avatar-wrapper'}>
                <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
              <span className="property__user-status">
                {host.isPro && 'Pro'}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">{description}</p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
            <CommentsList
              reviews={reviews}
            />
            <CommentForm />
          </section>
        </div>
      </div>
      <section className="property__map map"/>
    </>
  );
}

export default OfferCard;
