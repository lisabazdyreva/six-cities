import {State} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {DEFAULT_ID, DEFAULT_SORT_TYPE, INITIAL_CITY} from '../../const';
import {offers} from '../../mocks/offers';

const SORTED_OFFERS = offers.filter((offer) => offer.city.name === INITIAL_CITY);
const OFFERS = offers.slice();

const initialState = {
  selectedCity: INITIAL_CITY,
  sortedOffers: SORTED_OFFERS,
  offers: OFFERS,
  activeSortType: DEFAULT_SORT_TYPE,
  id: DEFAULT_ID,
  offersData: [],
};

function reducer (state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.SelectActiveCity:
      return {...state, selectedCity: action.payload};
    case ActionType.FillOffersList:
      return {...state, sortedOffers: action.payload};
    case ActionType.ChangeActiveSortType:
      return {...state, activeSortType: action.payload};
    case ActionType.SetActiveId:
      return {...state, id: action.payload};
    case ActionType.GetOffers:
      return {...state, offersData: action.payload};
    default:
      return state;
  }
}

export {reducer};
