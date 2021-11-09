import {State} from '../../types/state';
import {Offers} from '../../types/offer';
import {NameSpace} from '../root-reducer';
import {Locations, SortTypes} from '../../const';

export function getSortedOffers(state: State): Offers {
  return state[NameSpace.app].sortedOffers;
}

export function getSelectedCity(state: State): Locations {
  return state[NameSpace.app].selectedCity;
}

export function getActiveSortType(state: State): SortTypes | string {
  return state[NameSpace.app].activeSortType;
}

export function getId(state: State): number {
  return state[NameSpace.app].id;
}
