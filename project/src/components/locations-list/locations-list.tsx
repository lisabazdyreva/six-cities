import {SyntheticEvent} from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import classNames from 'classnames';

import type {State} from '../../types/state';
import type {Actions} from '../../types/action';
import type {Offers} from '../../types/offer';

import {changeActiveSortType, fillOffersList, selectActiveCity} from '../../store/actions/action';

import {filterOffers} from '../../utils';

import {AppRoute, DEFAULT_SORT_TYPE} from '../../const';


function mapStateToProps ({selectedCity}: State) {
  return ({
    selectedCity,
  });
}

function mapDispatchToProps (dispatch: Dispatch<Actions>) {
  return ({
    onCitySelect(selectedCity: string) { // точно ли выбран нормальный тип для события, т.к. без след. строчки ругается
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


function LocationsList({cities, onCitySelect, onSortTypeReset, onOffersUpdate, selectedCity}: ConnectedComponentProps): JSX.Element {
  function onLocationClick(evt: SyntheticEvent) {
    const element = evt.target as HTMLInputElement;
    const activeCity = element.innerText;
    const updatedOffers = filterOffers(activeCity);

    onCitySelect(activeCity);
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
            onClick={(evt) => onLocationClick(evt)}
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
