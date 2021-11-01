import {Offers} from './offer';
import {AuthorizationStatus, SortTypes} from '../const';

export type State = {
  selectedCity: string,
  offers: Offers,
  sortedOffers: Offers,
  activeSortType: string | SortTypes,
  id: number,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  login: string,
};
