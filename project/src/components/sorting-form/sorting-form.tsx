import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';

import {changeActiveSortType, fillOffersList} from '../../store/actions/action';

import {getSortedOffers} from '../../utils/sort-utils';
import {SortTypes, sortTypesList} from '../../const';

import {getActiveSortType, getSortedOffers as getOffers} from '../../store/app-process/selectors'; // !TODO нейминг


function SortingForm(): JSX.Element {
  const dispatch = useDispatch();

  const sortedOffers = useSelector(getOffers);
  const activeSortType = useSelector(getActiveSortType);

  const [isOpenSorting, setOpenSorting] = useState(false);

  function sortOffers(type: SortTypes) {
    const sortingOffers = getSortedOffers(type, sortedOffers);
    dispatch(fillOffersList(sortingOffers));
  }

  function changeSortType(type: SortTypes) {
    dispatch(changeActiveSortType(type));
    sortOffers(type);
  }

  function onSortTypeClick (type: string) {
    const [sortType] = Object.values(SortTypes).filter((key) => key === type);
    changeSortType(sortType);
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
            onClick={() => onSortTypeClick(type)}
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
export default SortingForm;
