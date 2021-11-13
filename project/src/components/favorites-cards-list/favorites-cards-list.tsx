import {Link} from 'react-router-dom';

import type {Offers} from '../../types/offer';

import FavoriteCards from '../favorite-cards/favorite-cards';

import {AppRoute} from '../../const';


type FavoriteCardsByCities = {
  [propertyName: string] : Offers,
}[];

type FavoritesCardsListProps = {
  onFavoriteDelete: (id: number) => void;
  favoriteCardsByCities: FavoriteCardsByCities;
};


function FavoritesCardsList({onFavoriteDelete, favoriteCardsByCities}: FavoritesCardsListProps): JSX.Element {

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
                  return <FavoriteCards onFavoriteClick={onFavoriteDelete} cardsByCity={cardsByCity} key={keyCardValue}/>;
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
