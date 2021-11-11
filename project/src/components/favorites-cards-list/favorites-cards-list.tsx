import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import type {Offers} from '../../types/offer';

import FavoriteCards from '../favorite-cards/favorite-cards';

import {getFavoriteCitiesList} from '../../utils/utils';

import {AppRoute} from '../../const';
import {getFavoriteOffers} from '../../store/app-data/selectors';
import {fetchFavoriteOffers} from '../../store/actions/api-actions';
import {useEffect} from 'react';


type FavoriteCardsByCities = {
  [propertyName: string] : Offers,
}[];


function getFavoriteCardsByCities(cards: Offers): FavoriteCardsByCities {
  const favoriteCities = getFavoriteCitiesList(cards);

  return favoriteCities.map((city) => Object.assign({}, {[city]: cards.filter((card) => card.city.name === city)}));
}

function FavoritesCardsList(): JSX.Element {
  const offers = useSelector(getFavoriteOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [offers]);

  const favoriteCardsByCities = getFavoriteCardsByCities(offers.slice());


  if (offers.length) {
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
  } else {
    return (
      <span>There are no favorite offers. Add some offers to favorite.</span>
    );
  }
}

export {FavoritesCardsList};
export default FavoritesCardsList;
