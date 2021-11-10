import classNames from 'classnames';
import {Locations} from '../../const';

type LocationsListTabsProps = {
  city: Locations,
  onClick: (city: Locations) => void,
  selectedCity: Locations,
};

function LocationsListTabs({city, onClick, selectedCity}: LocationsListTabsProps): JSX.Element {
  return (
    <li
      className="locations__item"
      key={city}
    >
      <a
        className={classNames(
          'locations__item-link tabs__item',
          {'tabs__item--active': city === selectedCity},
        )}
        onClick={() => onClick(city)}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationsListTabs;