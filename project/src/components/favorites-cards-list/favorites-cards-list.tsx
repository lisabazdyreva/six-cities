import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import type {Offers} from '../../types/offer';
import type {State} from '../../types/state';

import FavoriteCards from '../favorite-cards/favorite-cards';

import {getFavoriteCitiesList} from '../../utils';

import {AppRoute} from '../../const';


type FavoriteCardsByCities = {
  [propertyName: string] : Offers,
}[];

function getFavoriteCardsByCities(cards: Offers): FavoriteCardsByCities {
  const favoriteCards = cards.filter((card) => card.isFavorite);
  const favoriteCities = getFavoriteCitiesList(favoriteCards);

  return favoriteCities.map((city) => Object.assign({}, {[city]: favoriteCards.filter((card) => card.city.name === city)}));
}


function mapStateToProps ({offers}: State) {
  return ({
    offers,
  });
}
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function FavoritesCardsList({offers}: PropsFromRedux): JSX.Element {
  const favoriteCardsByCities = getFavoriteCardsByCities(offers.slice());

  return (
    <ul className="favorites__list">
      {favoriteCardsByCities.map((city) => (
        <li className="favorites__locations-items" key={Object.values(city)[0][0].id}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{Object.keys(city)}</span>
              </Link>
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

export {FavoritesCardsList};
export default connector(FavoritesCardsList);
