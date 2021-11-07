import {ActionType, Actions} from '../../types/action';
import {AppProcess} from '../../types/state';

import {DEFAULT_ID, DEFAULT_SORT_TYPE, INITIAL_CITY} from '../../const';


const initialState: AppProcess = {
  selectedCity: INITIAL_CITY,
  sortedOffers: [],
  activeSortType: DEFAULT_SORT_TYPE,
  id: DEFAULT_ID,
};


const appProcess = (state = initialState, action: Actions): AppProcess => {
  switch (action.type) {
    case ActionType.SelectActiveCity:
      return {...state, selectedCity: action.payload};
    case ActionType.FillOffersList:
      return {...state, sortedOffers: action.payload};
    case ActionType.ChangeActiveSortType:
      return {...state, activeSortType: action.payload};
    case ActionType.SetActiveId:
      return {...state, id: action.payload};
    default:
      return state;
  }
};

export {appProcess};
