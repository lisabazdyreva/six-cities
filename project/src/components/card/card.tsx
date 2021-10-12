
import {Offer} from '../../types/offer';

type CardProps = {
  offer: Offer;
  onMouse: (id: number) => void;
};


function Card (props: CardProps): JSX.Element {
  const {offer, onMouse} = props;
  const {
    price,
    type,
    title,
    isPremium,
    rating,
    previewImage,
    isFavorite,
    id,
  } = offer;

  const typeText = type.slice(0, 1).toUpperCase() + type.slice(1);
  const ratingPercentValue = `${(rating * 100 / 5)}%`;

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => onMouse(id)} onMouseLeave={() => onMouse(0)}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
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
            <span className="visually-hidden">To bookmarks</span>
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
}

export default Card;
