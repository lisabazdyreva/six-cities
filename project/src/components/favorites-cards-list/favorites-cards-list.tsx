import {Link} from 'react-router-dom';

import type {Offers} from '../../types/offer';

import FavoriteCards from '../favorite-cards/favorite-cards';

import {AppRoute, CardTypes} from '../../const';


type FavoriteCardsByCities = {
  [propertyName: string] : Offers,
}[];

type FavoritesCardsListProps = {
  favoriteCardsByCities: FavoriteCardsByCities;
};


function FavoritesCardsList({favoriteCardsByCities}: FavoritesCardsListProps): JSX.Element {

  return (
    <ul className="favorites__list">
      {favoriteCardsByCities.map((city) => {
        const keyValue = Object.values(city)[0][0].id;
        const cityTab = Object.keys(city);

        return (
          <li className="favorites__locations-items" key={keyValue}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Main}>
                  <span>{cityTab}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {
                Object.values(city).map((cardsByCity) => {
                  const keyCardValue = cardsByCity[0].id;
                  return <FavoriteCards cardsByCity={cardsByCity} key={keyCardValue} typeCard={CardTypes.Favorite}/>;
                })
              }
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export {FavoritesCardsList};
export default FavoritesCardsList;
