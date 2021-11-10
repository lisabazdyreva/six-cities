import {citiesList as cities, Locations} from '../../const';
import LocationsListTabs from '../locations-list-tabs/locations-list-tabs';


type LocationsListProps = {
  onLocationClick: (city: Locations) => void,
  selectedCity: Locations;
};

function LocationsList({onLocationClick, selectedCity}: LocationsListProps): JSX.Element {

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
