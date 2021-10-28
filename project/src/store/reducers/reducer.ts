import {State} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {DEFAULT_ID, DEFAULT_SORT_TYPE, INITIAL_CITY} from '../../const';


const initialState = {
  offers: [],
  selectedCity: INITIAL_CITY,
  sortedOffers: [],
  activeSortType: DEFAULT_SORT_TYPE,
  id: DEFAULT_ID,
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
      return {...state, offers: action.payload};
    default:
      return state;
  }
}

export {reducer};
