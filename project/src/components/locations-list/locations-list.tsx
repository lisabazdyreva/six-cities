import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import {AppRoute} from '../../const';


type LocationsListProps = {
  cities: string[];
};

function LocationsList({cities}: LocationsListProps): JSX.Element {

  const cityActive = true;
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li
            className="locations__item"
            key={city}
          >
            <Link
              className={classNames(
                'locations__item-link tabs__item',
                {'tabs__item--active': cityActive},
              )}
              to={AppRoute.Main}
            >
              <span>{city}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export default LocationsList;
