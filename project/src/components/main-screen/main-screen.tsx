import {useDispatch, useSelector} from 'react-redux';

import Icons from '../icons/icons';
import MainCardsList from '../main-cards-list/main-cards-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import NoOffers from '../no-offers/no-offers';
import Header from '../header/header';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';
import SortingForm from '../sorting-form/sorting-form';

import {
  CardTypes,
  DEFAULT_SORT_TYPE,
  FavoriteStatus,
  FetchStatus,
  Locations,
  MapStylesProperties
} from '../../const';
import {getSelectedCity, getSortedOffers} from '../../store/app-process/selectors';
import {getFetchStatusOffers, getOffers} from '../../store/app-data/selectors';
import {filterOffers} from '../../utils/utils';
import {changeActiveSortType, fillOffersList, selectActiveCity} from '../../store/actions/action';
import {postFavorite} from '../../store/actions/api-actions';

import classNames from 'classnames';


function MainScreen(): JSX.Element {
  const dispatch = useDispatch();

  const cards = useSelector(getSortedOffers);
  const selectedCity = useSelector(getSelectedCity);
  const fetchStatus = useSelector(getFetchStatusOffers);

  const offers = useSelector(getOffers);

  function onLocationClick(city: Locations) {
    const updatedOffers = filterOffers(city, offers);

    dispatch(selectActiveCity(city));
    dispatch(changeActiveSortType(DEFAULT_SORT_TYPE));
    dispatch(fillOffersList(updatedOffers));
  }

  function onFavoriteClick(isFavorite: boolean, id: number) {
    const status = isFavorite ? FavoriteStatus.RemoveFromFavorite : FavoriteStatus.AddToFavorite;
    const page = CardTypes.Main;
    dispatch(postFavorite({id, status, page}));
  }

  const cardsLength = cards.length;

  if (fetchStatus === FetchStatus.Error) {
    return <NotFoundScreen />;
  }

  return (
    <>
      <Icons />
      <div className="page page--gray page--main">
        <Header />
        <main className={classNames(
          'page__main page__main--index',
          {'page__main--index-empty' : !cards.length})}
        >
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsList onLocationClick={onLocationClick} selectedCity={selectedCity}/>
            </section>
          </div>
          {cards.length ?
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{cardsLength} {cardsLength === 1 ? 'place' : 'places'} to stay in {selectedCity}</b>
                  <SortingForm />
                  <MainCardsList cards={cards} onFavoriteClick={onFavoriteClick}/>
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
export default MainScreen;
