import classNames from 'classnames';
import {Locations} from '../../const';


type LocationsListTabsProps = {
  city: Locations;
  onLocationClick: (city: Locations) => void;
  selectedCity: Locations;
};


function LocationsListTabs({city, onLocationClick, selectedCity}: LocationsListTabsProps): JSX.Element {
  const isSelected = city === selectedCity;

  return (
    <li className="locations__item" key={city}>
      <button
        className={classNames(
          'locations__item-link tabs__item',
          {'tabs__item--active': isSelected},
        )}
        onClick={() => onLocationClick(city)}
        style={{border: 'none'}}
      >
        <span>{city}</span>
      </button>
    </li>
  );
}

export default LocationsListTabs;
