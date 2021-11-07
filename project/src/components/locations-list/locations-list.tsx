import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import classNames from 'classnames';

import type {State} from '../../types/state';
import type {Actions} from '../../types/action';
import type {Offers} from '../../types/offer';

import {changeActiveSortType, fillOffersList, selectActiveCity} from '../../store/actions/action';

import {filterOffers} from '../../utils/utils';

import {AppRoute, DEFAULT_SORT_TYPE} from '../../const';
import {getSelectedCity} from '../../store/app-process/selectors';
import {getOffers} from '../../store/app-data/selectors';


function mapStateToProps(state: State) {
  return ({
    selectedCity: getSelectedCity(state),
    offers: getOffers(state),
  });
}

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return ({
    onCitySelect(selectedCity: string) {
      dispatch(selectActiveCity(selectedCity));
    },
    onSortTypeReset() {
      dispatch(changeActiveSortType(DEFAULT_SORT_TYPE));
    },
    onOffersUpdate(offers: Offers) {
      dispatch(fillOffersList(offers));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type LocationsListProps = {
  cities: string[];
};
type ConnectedComponentProps = PropsFromRedux & LocationsListProps;


function LocationsList({cities, onCitySelect, onSortTypeReset, onOffersUpdate, selectedCity, offers}: ConnectedComponentProps): JSX.Element {

  function onLocationClick(city: string) {
    const updatedOffers = filterOffers(city, offers);

    onCitySelect(city);
    onSortTypeReset();
    onOffersUpdate(updatedOffers);
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
export default connector(LocationsList);
