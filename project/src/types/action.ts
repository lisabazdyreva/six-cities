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
  requireAuthorization
} from '../store/actions/action';


export enum ActionType {
  SelectActiveCity = 'main/selectActiveCity',
  FillOffersList = 'main/fillOffersList',
  ChangeActiveSortType = 'main/changeActiveSortType',
  SetActiveId = 'main/setActiveId',
  GetOffers = 'data/getOffers',
  RequireAuthorization = 'user/requireAuthorization',
}

export type Actions =
  ReturnType<typeof selectActiveCity> |
  ReturnType<typeof fillOffersList> |
  ReturnType<typeof changeActiveSortType> |
  ReturnType<typeof setActiveId> |
  ReturnType<typeof getOffers> |
  ReturnType<typeof requireAuthorization>;


export type ThunkActionResult<P = Promise<void>> = ThunkAction<P, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
