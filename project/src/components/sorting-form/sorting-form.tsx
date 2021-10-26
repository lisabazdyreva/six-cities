import {SortTypes} from '../../const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';
import {fillOffersList} from '../../store/actions/action';
import {Offers} from '../../types/offer';
import {SyntheticEvent} from 'react';
import {getSortedOffers} from '../../utils';


function mapStateToProps ({sortingOffers}: State) {
  return ({
    sortingOffers,
  });
}

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return ({
    onSortChange(offers: Offers) {
      dispatch(fillOffersList(offers));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function SortingForm({sortingOffers, onSortChange}: PropsFromRedux): JSX.Element {

  function onSortTypeClick (evt: SyntheticEvent) {
    const element = evt.target as HTMLInputElement;
    const selectedType = element.innerText;
    const sortedOffers = getSortedOffers(selectedType, sortingOffers);
    onSortChange(sortedOffers);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular<svg className="places__sorting-arrow" width="7" height="4"><use xlinkHref="#icon-arrow-select"/></svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
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
