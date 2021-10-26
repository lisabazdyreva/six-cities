import {State} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {INITIAL_CITY, DEFAULT_SORT_TYPE, DEFAULT_ID} from '../../const';
import {offers} from '../../mocks/offers';

const SORTING_OFFERS = offers.filter((offer) => offer.city.name === INITIAL_CITY);
const OFFERS = offers.slice();

const initialState = {
  selectedCity: INITIAL_CITY,
  sortingOffers: SORTING_OFFERS,
  offers: OFFERS,
  activeSorting: DEFAULT_SORT_TYPE,
  id: DEFAULT_ID,
};

function reducer (state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.SelectActiveCity:
      return {...state, selectedCity: action.payload};
    case ActionType.FillOffersList:
      return {...state, sortingOffers: action.payload};
    case ActionType.ChangeActiveSorting:
      return {...state, activeSorting: action.payload};
    case ActionType.SetActiveId:
      return {...state, id: action.payload};
    default:
      return state;
  }
}

export {reducer};
