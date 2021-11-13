import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import type {Offers, Offer} from '../../types/offer';
import {formatType, getRatingPercentValue} from '../../utils/utils';
import {AppRoute, CardTypes, FavoriteStatus} from '../../const';
import {fetchFavoriteOffers, postFavorite} from '../../store/actions/api-actions/api-actions-favorite';
import {getAuthorizationStatus} from '../../store/app-user/selectors';


type FavoriteCardsProps = {
  cardsByCity: Offers;
  typeCard: CardTypes;
};


function FavoriteCards({cardsByCity, typeCard}: FavoriteCardsProps): JSX.Element {
  const dispatch = useDispatch();

  const authorizationStatus = useSelector(getAuthorizationStatus);

  function onFavoriteDelete(id: number) {
    const status = FavoriteStatus.RemoveFromFavorite;

    dispatch(postFavorite({id, status, typeCard}));
    dispatch(fetchFavoriteOffers(authorizationStatus));
  }

  return (
    <>
      {cardsByCity.map((card: Offer): JSX.Element  => {
        const {price, id, rating, type, title, previewImage} = card;

        const ratingPercentValue = getRatingPercentValue(rating);
        const typeValue = formatType(type);
        const linkValue = `${AppRoute.Room}/${ id }`;
        const priceValue = `€${price}`;

        return (
          <article className="favorites__card place-card" key={id}>
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <Link to={linkValue}>
                <img className="place-card__image" src={previewImage} width="150" height="110" alt={title} />
              </Link>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">{priceValue}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button
                  className="place-card__bookmark-button place-card__bookmark-button--active button"
                  type="button"
                  onClick={() => onFavoriteDelete(id)}
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
      })}
    </>
  );
}

export default FavoriteCards;
