import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';

import Icons from '../icons/icons';
import MainCardsList from '../main-cards-list/main-cards-list';
import NoOffers from '../no-offers/no-offers';
import Header from '../header/header';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';
import SortingForm from '../sorting-form/sorting-form';

import {
  DefaultValue,
  FetchStatus,
  Locations,
  MapStylesProperties
} from '../../const';
import {filterOffers} from '../../utils/sort-utils';

import {getSelectedCity, getSortedOffers} from '../../store/app-process/selectors';
import {getOffers} from '../../store/app-data/selectors';
import {getFetchStatusOffers} from '../../store/app-status/selectors';
import {changeActiveSortType, fillOffersList, selectActiveCity} from '../../store/actions/action';


function MainScreen(): JSX.Element {
  const dispatch = useDispatch();

  const cards = useSelector(getSortedOffers);
  const selectedCity = useSelector(getSelectedCity);
  const fetchStatus = useSelector(getFetchStatusOffers);
  const offers = useSelector(getOffers);

  const cardsLength = cards.length;
  const placesValue = cardsLength === 1 ? 'place' : 'places';

  const isFetchOk = fetchStatus === FetchStatus.Ok;

  function handleLocationClick(city: Locations) {
    const updatedOffers = filterOffers(city, offers);

    dispatch(selectActiveCity(city));
    dispatch(changeActiveSortType(DefaultValue.SortType));
    dispatch(fillOffersList(updatedOffers));
  }

  return (
    <>
      <Icons />
      <div className="page page--gray page--main">
        <Header />
        <main className={classNames(
          'page__main page__main--index',
          {'page__main--index-empty' : cardsLength})}
        >
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsList onLocationClick={handleLocationClick} selectedCity={selectedCity}/>
            </section>
          </div>
          {(cardsLength && isFetchOk) ?
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{cardsLength} {placesValue} to stay in {selectedCity}</b>
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
            </div> : <NoOffers city={selectedCity} fetchStatus={fetchStatus}/>}
        </main>
      </div>
    </>
  );
}

export default MainScreen;
