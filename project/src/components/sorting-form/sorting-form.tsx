import {SortTypes} from '../../const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {changeActiveSorting, fillOffersList} from '../../store/actions/action';
import {Offers} from '../../types/offer';
import {SyntheticEvent, useState} from 'react';
import {getSortedOffers} from '../../utils';
import classNames from 'classnames';


function mapStateToProps ({sortingOffers, activeSorting}: State) {
  return ({
    sortingOffers,
    activeSorting,
  });
}

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return ({
    onOffersSort(offers: Offers) {
      dispatch(fillOffersList(offers));
    },
    onSortChange(sortingValue: string) {
      dispatch(changeActiveSorting(sortingValue));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function SortingForm({sortingOffers, activeSorting, onOffersSort, onSortChange}: PropsFromRedux): JSX.Element {
  const [isOpenSorting, setOpenSorting] = useState(false);

  function sortOffers (type: string) {
    const sortedOffers = getSortedOffers(type, sortingOffers);
    onOffersSort(sortedOffers);
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
        {activeSorting}
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
        <li onClick={(evt) => onSortTypeClick(evt)} className="places__option places__option--active" tabIndex={0}>{SortTypes.Popular}</li>
        <li onClick={(evt) => onSortTypeClick(evt)} className="places__option" tabIndex={0}>{SortTypes.IncrementPrice}</li>
        <li onClick={(evt) => onSortTypeClick(evt)} className="places__option" tabIndex={0}>{SortTypes.DecrementPrice}</li>
        <li onClick={(evt) => onSortTypeClick(evt)} className="places__option" tabIndex={0}>{SortTypes.Rating}</li>
      </ul>
    </form>
  );
}

export {SortingForm};
export default connector(SortingForm);
