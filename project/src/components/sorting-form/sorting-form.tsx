import {SyntheticEvent, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import classNames from 'classnames';

import type {State} from '../../types/state';
import type {Actions} from '../../types/action';
import type {Offers} from '../../types/offer';

import {changeActiveSortType, fillOffersList} from '../../store/actions/action';

import {getSortedOffers} from '../../utils';
import {SortTypes} from '../../const';


const sortTypesList = Object.values(SortTypes);

function mapStateToProps ({sortedOffers, activeSortType}: State) {
  return ({
    sortedOffers,
    activeSortType,
  });
}

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return ({
    onOffersSort(offers: Offers) {
      dispatch(fillOffersList(offers));
    },
    onSortChange(sortingValue: string) {
      dispatch(changeActiveSortType(sortingValue));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function SortingForm({sortedOffers, activeSortType, onOffersSort, onSortChange}: PropsFromRedux): JSX.Element {
  const [isOpenSorting, setOpenSorting] = useState(false);

  function sortOffers(type: string) {
    const sortingOffers = getSortedOffers(type, sortedOffers);
    onOffersSort(sortingOffers);
  }

  function changeSortType(type: string) {
    onSortChange(type);
    sortOffers(type);
  }

  function onSortTypeClick (evt: SyntheticEvent) {
    const element = evt.target as HTMLInputElement;
    const selectedType = element.innerText;

    changeSortType(selectedType);
    setOpenSorting(!isOpenSorting);
  }


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenSorting(!isOpenSorting)}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4" style={{transform: isOpenSorting ? 'rotate(180deg) translateY(50%)': ''}}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={classNames(
        'places__options places__options--custom',
        {'places__options--opened': isOpenSorting},
        {' places__options--custom': !isOpenSorting},
      )}
      >
        {sortTypesList.map((type: string) => (
          <li
            key={type}
            onClick={(evt) => onSortTypeClick(evt)}
            className={classNames(
              'places__option',
              {'places__option--active': activeSortType === type},
            )}
            tabIndex={0}
          >
            {type}
          </li>),
        )}
      </ul>
    </form>
  );
}

export {SortingForm};
export default connector(SortingForm);
