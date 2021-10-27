import {Link} from 'react-router-dom';
import classNames from 'classnames';

import type {Offer} from '../../types/offer';

import {isMainPage, formatType, getRatingPercentValue} from '../../utils';
import {AppRoute, DEFAULT_ID} from '../../const';


type CardProps = {
  card: Offer;
  typeCard: string;
  onCardHover: ((id: number) => void) | null;
}


function Card({card, typeCard, onCardHover}: CardProps): JSX.Element {

  const {
    price,
    title,
    isPremium,
    rating,
    type,
    previewImage,
    isFavorite,
    id,
  } = card;

  const typeText = formatType(type);
  const ratingPercentValue = getRatingPercentValue(rating);


  const handleCardEnter = () => {
    if (onCardHover) {
      onCardHover(id);
    }
  };

  const handleCardLeave = () => {
    if (onCardHover) {
      onCardHover(DEFAULT_ID);
    }
  };


  return (
    <article
      className={classNames(
        'place-card',
        {'cities__place-card': isMainPage(typeCard)},
        {'near-places__card': !isMainPage(typeCard)},
      )}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
    >

      {isPremium && isMainPage(typeCard) ? <div className="place-card__mark"><span>Premium</span></div> : ''}

      <div
        className={classNames(
          'place-card__image-wrapper',
          {'cities__image-wrapper': isMainPage(typeCard)},
          {'near-places__image-wrapper': !isMainPage(typeCard)},
        )}
      >

        <Link to={`${AppRoute.Room}/${ id }`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title}/>
        </Link>

      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingPercentValue}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${ id }`}>{title}</Link>
        </h2>
        <p className="place-card__type">{typeText}</p>
      </div>
    </article>
  );
}


export default Card;
