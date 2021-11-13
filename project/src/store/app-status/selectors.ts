import {State} from '../../types/state';
import {FetchStatus} from '../../const';
import {NameSpace} from '../root-reducer';

export function getFetchStatusOffers(state: State): FetchStatus {
  return state[NameSpace.status].fetchStatusOffers;
}

export function getFetchStatusOffer(state: State): FetchStatus {
  return state[NameSpace.status].fetchStatusOffer;
}


export function getFetchStatusNearbyOffers(state: State): FetchStatus {
  return state[NameSpace.status].fetchStatusNearbyOffers;
}

export function getFetchStatusComments(state: State): FetchStatus {
  return state[NameSpace.status].fetchStatusComments;
}
