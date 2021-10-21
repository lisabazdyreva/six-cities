import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {formatType, getRatingPercentValue} from '../../utils';

type CardProps = {
  card: Offer;
  typeCard: string;
  onMouse?: (id: number) => void;
}

function Card({card, typeCard, onMouse}: CardProps): JSX.Element {

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
    if (onMouse) {
      onMouse(id);
    }
  };

  const handleCardLeave = () => {
    if (onMouse) {
      onMouse(0);
    }
  };


  return (
    <article className={`place-card ${typeCard === 'main' ? 'cities__place-card' : 'near-places__card'}`} onMouseEnter={handleCardEnter} onMouseLeave={handleCardLeave}>

      {isPremium && typeCard === 'main' ? <div className="place-card__mark"><span>Premium</span></div> : ''}

      <div className={`place-card__image-wrapper ${typeCard === 'main' ? 'cities__image-wrapper' :  'near-places__image-wrapper'}`}>

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
