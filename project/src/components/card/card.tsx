import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import classNames from 'classnames';

import type {Offer} from '../../types/offer';

import {formatType, getRatingPercentValue, isMainPage} from '../../utils/utils';
import {AppRoute, AuthorizationStatus, CardTypes, DefaultValue, FavoriteStatus} from '../../const';

import {setActiveId} from '../../store/actions/action';
import {getAuthorizationStatus} from '../../store/app-user/selectors';
import {fetchFavoriteOffers, postFavorite} from '../../store/actions/api-actions/api-actions-favorite';


type CardProps = {
  card: Offer;
  typeCard: CardTypes;
};


function Card({card, typeCard}: CardProps): JSX.Element {
  const {price, title, isPremium, rating, type, previewImage, id, isFavorite} = card;

  const dispatch = useDispatch();
  const history = useHistory();

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const typeValue = formatType(type);
  const ratingPercentValue = getRatingPercentValue(rating);
  const priceValue = `€ ${price}`;
  const linkValue = `${AppRoute.Room}/${ id }`;

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;


  const setId = () => {
    if (isMainPage(typeCard)) {
      dispatch(setActiveId(id));
    }
  };

  const setDefaultId = () => {
    if (isMainPage(typeCard)) {
      dispatch(setActiveId(DefaultValue.Id));
    }
  };


  const handleCardEnter = useCallback(
    setId,
    [id, dispatch, typeCard],
  );

  const handleCardLeave = useCallback(
    setDefaultId,
    [dispatch, typeCard],
  );

  const handleFavoriteChange = () => {
    if (isAuth) {
      const status = isFavorite ? FavoriteStatus.RemoveFromFavorite: FavoriteStatus.AddToFavorite;

      dispatch(postFavorite({id, status, typeCard}));
      dispatch(fetchFavoriteOffers(authorizationStatus));
    } else {
      history.push(AppRoute.Login);
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

        <Link to={linkValue}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </Link>

      </div>

      <div className="place-card__info">

        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames(
              'place-card__bookmark-button button',
              {'place-card__bookmark-button--active': isFavorite},
            )}
            type="button"
            onClick={handleFavoriteChange}
          >
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
          <Link to={linkValue}>{title}</Link>
        </h2>
        <p className="place-card__type">{typeValue}</p>
      </div>

    </article>
  );
}


export {Card};
export default Card;
