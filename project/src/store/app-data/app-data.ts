import {ActionType, Actions} from '../../types/action';
import {AppData} from '../../types/state';

import {DEFAULT_CURRENT_OFFER, FetchStatus} from '../../const';


const initialState: AppData = {
  offers: [],
  isDataLoaded: false,
  currentOffer: DEFAULT_CURRENT_OFFER,
  fetchStatus: FetchStatus.Trying,
  commentsList: [],
  nearbyOffers: [],
};


const appData = (state = initialState, action: Actions): AppData => {
  switch (action.type) {
    case ActionType.GetOffers:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.SetCurrentOffer:
      return {...state, currentOffer: action.payload};
    case ActionType.SetFetchStatus:
      return {...state, fetchStatus: action.payload};
    case ActionType.SetCommentsList:
      return {...state, commentsList: action.payload};
    case ActionType.SetNearbyOffersList:
      return {...state, nearbyOffers: action.payload};
    default:
      return state;
  }
};

export {appData};
