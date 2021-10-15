import {Offers} from '../../types/offer';
import Icons from '../icons/icons';
import FavoritesCardsList from '../favorites-cards-list/favorites-cards-list';
import Header from '../header/header';

type FavoriteScreenProps = {
  offers: Offers;
};

function FavoritesScreen({offers}: FavoriteScreenProps): JSX.Element {
  return (
    <>
      <Icons/>
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesCardsList cards={offers}/>
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
