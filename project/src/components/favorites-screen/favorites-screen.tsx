import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Icons from '../icons/icons';
import FavoritesCardsList from '../favorites-cards-list/favorites-cards-list';
import Header from '../header/header';
import FavoritesCardsListEmpty from '../favorites-cards-list-empty/favorites-cards-list-empty';

import {ErrorMessage} from '../../const';
import {getFavoriteCardsByCities} from '../../utils/sort-utils';

import {getFavoriteOffers} from '../../store/app-data/selectors';
import {getAuthorizationStatus} from '../../store/app-user/selectors';
import {fetchFavoriteOffers} from '../../store/actions/api-actions/api-actions-favorite';


function FavoritesScreen(): JSX.Element {
  const dispatch = useDispatch();

  const offers = useSelector(getFavoriteOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const isOffers = offers.length;
  const favoriteCardsByCities = getFavoriteCardsByCities(offers.slice());


  useEffect(() => {
    dispatch(fetchFavoriteOffers(authorizationStatus));
  }, [authorizationStatus, dispatch]);

  return (
    <>
      <Icons/>
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              {isOffers ?
                <FavoritesCardsList favoriteCardsByCities={favoriteCardsByCities} /> :
                <FavoritesCardsListEmpty message={ErrorMessage.NoFavorites}/>}
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
    </>
  );
}

export default FavoritesScreen;

