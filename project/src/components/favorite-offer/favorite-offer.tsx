import {Offers, Offer} from '../../types/offer';

type FavoriteOfferProps = {
  offersByCity: Offers;
};

function FavoriteOffer({offersByCity}: FavoriteOfferProps): JSX.Element {
  return (
    <>
      {offersByCity.map((offer: Offer): JSX.Element  => {
        const {price, id, rating, type, title, previewImage} = offer;

        const ratingPercentValue = `${(rating * 100 / 5)}%`;
        const typeText = type.slice(0, 1).toUpperCase() + type.slice(1);

        return (
          <article className="favorites__card place-card" key={id}>
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
              </a>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
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
                <a href="#">{title}</a>
              </h2>
              <p className="place-card__type">{typeText}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default FavoriteOffer;
