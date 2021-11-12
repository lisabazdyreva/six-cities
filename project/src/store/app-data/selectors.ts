import {State} from '../../types/state';
import {Offer, Offers} from '../../types/offer';
import {NameSpace} from '../root-reducer';
import {FetchStatus} from '../../const';
import {Reviews} from '../../types/review';

export function getOffers(state: State): Offers {
  return state[NameSpace.data].offers;
}

export function getIsDataLoaded(state: State): boolean {
  return state[NameSpace.data].isDataLoaded;
}

export function getCurrentOffer(state: State): Offer {
  return state[NameSpace.data].currentOffer;
}

export function getFetchStatusOffers(state: State): FetchStatus {
  return state[NameSpace.data].fetchStatusOffers;
}

export function getFetchStatusOffer(state: State): FetchStatus {
  return state[NameSpace.data].fetchStatusOffer;
}


export function getFetchStatusNearbyOffers(state: State): FetchStatus {
  return state[NameSpace.data].fetchStatusNearbyOffers;
}

export function getFetchStatusComments(state: State): FetchStatus {
  return state[NameSpace.data].fetchStatusComments;
}

export function getCommentsList(state: State): Reviews {
  return state[NameSpace.data].commentsList;
}

export function getNearbyOffers(state: State): Offers {
  return state[NameSpace.data].nearbyOffers;
}

export function getFavoriteOffers(state: State): Offers {
  return state[NameSpace.data].favoriteOffers;
}
