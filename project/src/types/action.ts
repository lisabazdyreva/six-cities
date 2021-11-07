import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';

import {
  AxiosInstance
} from 'axios';

import {State} from './state';

import {
  selectActiveCity,
  fillOffersList,
  changeActiveSortType,
  setActiveId,
  getOffers,
  requireAuthorization,
  requireLogout,
  setLogin,
  setCurrentOffer,
  setNearbyOffersList,
  setFetchStatus,
  setCommentsList,
  redirectTo
} from '../store/actions/action';


export enum ActionType {
  SelectActiveCity = 'main/selectActiveCity',
  FillOffersList = 'main/fillOffersList',
  ChangeActiveSortType = 'main/changeActiveSortType',
  SetActiveId = 'main/setActiveId',
  GetOffers = 'data/getOffers',
  SetCurrentOffer = 'data/setCurrentOffer',
  SetFetchStatus = 'data/setFetchStatus',
  SetCommentsList = 'data/setCommentsList',
  SetNearbyOffersList = 'data/setNearbyOffersList',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetLogin = 'user/setLogin',
  RedirectTo = 'main/redirectTo'
}

export type Actions =
  ReturnType<typeof selectActiveCity> |
  ReturnType<typeof fillOffersList> |
  ReturnType<typeof changeActiveSortType> |
  ReturnType<typeof setActiveId> |
  ReturnType<typeof getOffers> |
  ReturnType<typeof setCurrentOffer> |
  ReturnType<typeof requireAuthorization> |
  ReturnType<typeof requireLogout> |
  ReturnType<typeof setLogin> |
  ReturnType<typeof setNearbyOffersList> |
  ReturnType<typeof setFetchStatus> |
  ReturnType<typeof setCommentsList> |
  ReturnType<typeof redirectTo>;


export type ThunkActionResult<P = Promise<void>> = ThunkAction<P, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
