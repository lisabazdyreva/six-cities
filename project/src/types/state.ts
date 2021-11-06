import {Offers, Offer} from './offer';
import {AuthorizationStatus, FetchStatus, SortTypes} from '../const';
import {Reviews} from './review';

import {RootState} from '../store/reducers/root-reducer';

// export type State = {
//   selectedCity: string,
//   offers: Offers,
//   sortedOffers: Offers,
//   activeSortType: string | SortTypes,
//   id: number,
//   isDataLoaded: boolean,
//   authorizationStatus: AuthorizationStatus,
//   login: string,
//   currentOffer: Offer,
//   nearbyOffers: Offers,
//   fetchStatus: FetchStatus,
//   commentsList: Reviews,
// };


export type AppData = {
  offers: Offers,
  isDataLoaded: boolean,
  currentOffer: Offer,
  fetchStatus: FetchStatus,
  commentsList: Reviews,
  nearbyOffers: Offers,
};

export type AppUser = {
  authorizationStatus: AuthorizationStatus,
  login: string,
};

export type AppProcess = {
  selectedCity: string,
  sortedOffers: Offers,
  activeSortType: string | SortTypes,
  id: number,
};


export type State = RootState;
