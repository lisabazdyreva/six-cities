import LocationsListTabs from '../locations-list-tabs/locations-list-tabs';
import {citiesList as cities, Locations} from '../../const';


type LocationsListProps = {
  onLocationClick: (city: Locations) => void;
  selectedCity: Locations;
};


function LocationsList({onLocationClick, selectedCity}: LocationsListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => <LocationsListTabs key={city} city={city} onLocationClick={onLocationClick} selectedCity={selectedCity}/>)
      }
    </ul>
  );
}

export default LocationsList;
