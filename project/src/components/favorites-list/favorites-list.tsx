import {Offers} from '../../types/offer';

import FavoriteOffer from '../favorite-offer/favorite-offer';

type FavoritesListProps = {
  offers: Offers;
};

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  const favoritesOffers = offers.slice().filter((offer) => offer.isFavorite);
  const favoritesCities = Array.from(new Set(favoritesOffers.reduce((prev, current) => `${prev} ${current.city.name}`, '').trim().split(' ')));
  const favoritesOffersByCities = favoritesCities.map((city) => Object.assign({}, {[city]: favoritesOffers.filter((offer) => offer.city.name === city)}));

  // eslint-disable-next-line
  console.log(favoritesOffersByCities)

  return (
    <ul className="favorites__list">
      {favoritesOffersByCities.map((city) => (
        <li className="favorites__locations-items" key={Object.values(city)[0][0].id}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{Object.keys(city)}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {Object.values(city).map((offersByCity) => <FavoriteOffer offersByCity={offersByCity} key={offersByCity[0].id}/>)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
