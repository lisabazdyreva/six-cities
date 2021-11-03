import {Offers, Offer} from './offer';
import {AuthorizationStatus, FetchStatus, SortTypes} from '../const';
import {Reviews} from "./review";

export type State = {
  selectedCity: string,
  offers: Offers,
  sortedOffers: Offers,
  activeSortType: string | SortTypes,
  id: number,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  login: string,
  currentOffer: Offer,
  nearbyOffers: Offers,
  fetchStatus: FetchStatus,
  commentsList: Reviews,
};
