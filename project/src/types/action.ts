import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';


export enum ActionType {
  SelectActiveCity = 'main/selectActiveCity',
  FillOffersList = 'main/fillOffersList',
  ChangeActiveSortType = 'main/changeActiveSortType',
  SetActiveId = 'main/setActiveId',
  GetOffers = 'data/getOffers',
  SetCurrentOffer = 'data/setCurrentOffer',
  SetFetchStatusOffers = 'data/setFetchStatusOffers',
  SetFetchStatusNearbyOffers = 'data/setFetchStatusNearbyOffers',
  SetFetchStatusComments = 'data/setFetchStatusComments',
  SetCommentsList = 'data/setCommentsList',
  SetNearbyOffersList = 'data/setNearbyOffersList',
  SetFavoriteOffers = 'data/setFavoriteOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetLogin = 'user/setLogin',
  RedirectTo = 'main/redirectTo',
  UpdateOffer = 'main/updateOffer',
  UpdateRoom = 'main/updateRoom',
}

export type ThunkActionResult<P = Promise<void>> = ThunkAction<P, State, AxiosInstance, Action>;
