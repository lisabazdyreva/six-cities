import {Offers} from '../../types/offer';

import FavoriteCards from '../favorite-cards/favorite-cards';

type FavoritesCardsListProps = {
  cards: Offers;
};

function FavoritesCardsList({cards}: FavoritesCardsListProps): JSX.Element {
  const favoriteCards = cards.slice().filter((card) => card.isFavorite);
  const favoriteCities = Array.from(new Set(favoriteCards.reduce((prev, current) => `${prev} ${current.city.name}`, '').trim().split(' ')));
  const favoriteCardsByCities = favoriteCities.map((city) => Object.assign({}, {[city]: favoriteCards.filter((card) => card.city.name === city)}));

  return (
    <ul className="favorites__list">
      {favoriteCardsByCities.map((city) => (
        <li className="favorites__locations-items" key={Object.values(city)[0][0].id}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{Object.keys(city)}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {Object.values(city).map((cardsByCity) => <FavoriteCards cardsByCity={cardsByCity} key={cardsByCity[0].id}/>)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesCardsList;
