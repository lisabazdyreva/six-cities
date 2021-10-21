import Icons from '../icons/icons';
import CardsList from '../cards-list/cards-list';
import Header from '../header/header';

import {Offers} from '../../types/offer';

import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

import Map from '../map/map';

import {MapStylesProperties} from '../../const';


type MainScreenProps = {
  rentOffersValue: number;
  offers: Offers;
};


function MainScreen({rentOffersValue, offers}: MainScreenProps): JSX.Element {
  return (
    <>
      <Icons />
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
                    <span>Paris</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
                    <span>Cologne</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
                    <span>Brussels</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item tabs__item--active" to={AppRoute.Main}>
                    <span>Amsterdam</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
                    <span>Hamburg</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
                    <span>Dusseldorf</span>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          {offers.length ?
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{rentOffersValue} places to stay in Amsterdam</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                    Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"/>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
                  <CardsList
                    cards={offers}
                  />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      cards={offers}
                      styles={MapStylesProperties.MainPage}
                    />
                  </section>
                </div>
              </div>
            </div> :
            <div className="cities">
              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">
                      We could not find any property available at the moment in Dusseldorf
                    </p>
                  </div>
                </section>
                <div className="cities__right-section"/>
              </div>
            </div>}

        </main>
      </div>
    </>
  );
}

export default MainScreen;
