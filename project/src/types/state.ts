import {Offers, Offer} from './offer';
import {AuthorizationStatus, FetchStatus, Locations, SortTypes} from '../const';
import {Reviews} from './review';

import {RootState} from '../store/root-reducer';

export type AppData = {
  offers: Offers,
  currentOffer: Offer,
  commentsList: Reviews,
  nearbyOffers: Offers,
  favoriteOffers: Offers,
  isDataLoaded: boolean,
};

export type AppStatus = {
  fetchStatusOffers: FetchStatus,
  fetchStatusOffer: FetchStatus,
  fetchStatusNearbyOffers: FetchStatus,
  fetchStatusComments: FetchStatus,
};

export type AppUser = {
  authorizationStatus: AuthorizationStatus,
  login: string,
};

export type AppProcess = {
  selectedCity: Locations,
  sortedOffers: Offers,
  activeSortType: SortTypes,
  id: number,
};


export type State = RootState;
