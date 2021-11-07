import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';

import {changeActiveSortType, fillOffersList, selectActiveCity} from '../../store/actions/action';

import {filterOffers} from '../../utils/utils';

import {AppRoute, DEFAULT_SORT_TYPE} from '../../const';
import {getSelectedCity} from '../../store/app-process/selectors';
import {getOffers} from '../../store/app-data/selectors';


type LocationsListProps = {
  cities: string[];
};


function LocationsList({cities}: LocationsListProps): JSX.Element {

  const selectedCity = useSelector(getSelectedCity);
  const offers = useSelector(getOffers);

  const dispatch = useDispatch();

  function onLocationClick(city: string) {
    const updatedOffers = filterOffers(city, offers);

    dispatch(selectActiveCity(city));
    dispatch(changeActiveSortType(DEFAULT_SORT_TYPE));
    dispatch(fillOffersList(updatedOffers));
  }

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => (
          <li
            className="locations__item"
            key={city}
            onClick={() => onLocationClick(city)}
          >
            <Link
              className={classNames(
                'locations__item-link tabs__item',
                {'tabs__item--active': city === selectedCity},
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

export {LocationsList};
export default LocationsList;
