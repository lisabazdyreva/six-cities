import {Offers, Offer} from './offer';
import {AuthorizationStatus, FetchStatus, Locations, SortTypes} from '../const';
import {Reviews} from './review';

import {RootState} from '../store/root-reducer';

export type AppData = {
  offers: Offers,
  isDataLoaded: boolean,
  currentOffer: Offer,
  fetchStatusOffers: FetchStatus,
  fetchStatusNearbyOffers: FetchStatus,
  fetchStatusComments: FetchStatus,
  commentsList: Reviews,
  nearbyOffers: Offers,
};

export type AppUser = {
  authorizationStatus: AuthorizationStatus,
  login: string,
};

export type AppProcess = {
  selectedCity: Locations,
  sortedOffers: Offers,
  activeSortType: string | SortTypes,
  id: number,
};


export type State = RootState;
