import Icons from '../icons/icons';
import MainCardsList from '../main-cards-list/main-cards-list';
import Header from '../header/header';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';

import {Offers} from '../../types/offer';

import {MapStylesProperties} from '../../const';

type MainScreenProps = {
  rentOffersValue: number;
  offers: Offers;
  cities: string[];
};


function MainScreen({rentOffersValue, offers, cities}: MainScreenProps): JSX.Element {
  return (
    <>
      <Icons />
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsList
                cities={cities}
              />
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
                  <MainCardsList
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
