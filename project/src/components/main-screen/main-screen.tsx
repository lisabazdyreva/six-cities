import {connect, ConnectedProps} from 'react-redux';

import type {State} from '../../types/state';

import Icons from '../icons/icons';
import MainCardsList from '../main-cards-list/main-cards-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import NoOffers from '../no-offers/no-offers';
import Header from '../header/header';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';
import SortingForm from '../sorting-form/sorting-form';

import {FetchStatus, MapStylesProperties} from '../../const';


function mapStateToProps({sortedOffers, selectedCity, fetchStatus}: State) {
  return ({
    cards: sortedOffers,
    selectedCity,
    fetchStatus,
  });
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type MainScreenProps = {
  cities: string[];
};
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;


function MainScreen({cards, selectedCity, cities, fetchStatus}: ConnectedComponentProps): JSX.Element {
  const cardsLength = cards.length;

  if (fetchStatus === FetchStatus.Error) {
    return <NotFoundScreen />;
  }
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
          {cards.length ?
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{cardsLength} {cardsLength === 1 ? 'place' : 'places'} to stay in {selectedCity}</b>
                  <SortingForm />
                  <MainCardsList cards={cards}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      cards={cards}
                      styles={MapStylesProperties.MainPage}
                      activeCity={selectedCity}
                    />
                  </section>
                </div>
              </div>
            </div> :
            <NoOffers city={selectedCity}/>}
        </main>
      </div>
    </>
  );
}

export {MainScreen};
export default connector(MainScreen);
