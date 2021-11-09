import {useDispatch, useSelector} from 'react-redux';

import {changeActiveSortType, fillOffersList, selectActiveCity} from '../../store/actions/action';

import {filterOffers} from '../../utils/utils';

import {DEFAULT_SORT_TYPE, citiesList as cities, Locations} from '../../const';
import {getSelectedCity} from '../../store/app-process/selectors';
import {getOffers} from '../../store/app-data/selectors';
import LocationsListTabs from '../locations-list-tabs/locations-list-tabs';


function LocationsList(): JSX.Element {

  const selectedCity = useSelector(getSelectedCity);
  const offers = useSelector(getOffers);

  const dispatch = useDispatch();

  function onLocationClick(city: Locations) {
    const updatedOffers = filterOffers(city, offers);

    dispatch(selectActiveCity(city));
    dispatch(changeActiveSortType(DEFAULT_SORT_TYPE));
    dispatch(fillOffersList(updatedOffers));
  }

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => <LocationsListTabs key={city} city={city} onClick={onLocationClick} selectedCity={selectedCity}/>)
      }
    </ul>
  );
}

export {LocationsList};
export default LocationsList;
