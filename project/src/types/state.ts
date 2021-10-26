import {Offers} from './offer';
import {SortTypes} from '../const';

export type State = {
  selectedCity: string,
  offers: Offers,
  sortingOffers: Offers,
  activeSorting: string | SortTypes,
};
