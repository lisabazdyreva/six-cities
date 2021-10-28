import {Offers} from './offer';
import {SortTypes} from '../const';

export type State = {
  selectedCity: string,
  offers: Offers,
  sortedOffers: Offers,
  activeSortType: string | SortTypes,
  id: number,
};
