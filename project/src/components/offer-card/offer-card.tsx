import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';

import type {Offer} from '../../types/offer';

import CommentsSection from '../comments-section/comments-section';

import {formatType, getRatingPercentValue} from '../../utils/utils';
import {AppRoute, AuthorizationStatus, CardTypes, FavoriteStatus} from '../../const';

import {getAuthorizationStatus} from '../../store/app-user/selectors';

import {fetchFavoriteOffers, postFavorite} from '../../store/actions/api-actions/api-actions-favorite';


type OfferCardProps = {
  card: Offer;
  typeCard: CardTypes;
};


function OfferCard({card, typeCard}: OfferCardProps): JSX.Element {
  const {title, rating, type, bedrooms, maxAdults, price, goods, host, description, isPremium, isFavorite, images, id} = card;

  const history = useHistory();
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const ratingPercentValue = getRatingPercentValue(rating);
  const typeValue = formatType(type);

  const bedroomsValue = (bedrooms > 1) ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`;
  const priceValue = `€${price}`;
  const maxAdultsValue = (maxAdults > 1) ? `Max ${maxAdults} adults`: `Max ${maxAdults} adult`;

  const checkedImagesOverflow = (images.length > 5) ? images.slice(0, 6) : images;

  const isImages = checkedImagesOverflow.length > 0;
  const isGoods = goods.length > 0;
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;


  function handleFavoriteClick() {
    if (isAuth) {
      const status = isFavorite ? FavoriteStatus.RemoveFromFavorite: FavoriteStatus.AddToFavorite;
      dispatch(postFavorite({id, status, typeCard}));
      dispatch(fetchFavoriteOffers(authorizationStatus));
    } else {
      history.push(AppRoute.Login);
    }
  }

  return(
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {isImages && checkedImagesOverflow.map((image) => <div key={image} className="property__image-wrapper"><img className="property__image" src={image} alt={title}/></div>)}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && <div className="property__mark"><span>Premium</span></div>}
          <div className="property__name-wrapper">
            <h1 className="property__name">{title}</h1>
            <button
              className={classNames(
                'property__bookmark-button button',
                {'property__bookmark-button--active' : isFavorite},
              )}
              type="button"
              onClick={handleFavoriteClick}
            >
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
              {typeValue}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedroomsValue}
            </li>
            <li className="property__feature property__feature--adults">
              {maxAdultsValue}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">{priceValue}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {isGoods && goods.map((good) => <li className="property__inside-item" key={good}>{good}</li>)}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={classNames(
                'property__avatar-wrapper user__avatar-wrapper',
                {'property__avatar-wrapper--pro': host.isPro})}
              >
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
          <CommentsSection />
        </div>
      </div>
    </>
  );
}

export default OfferCard;
