import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

//TODO Д20. Для именования типов действия (action type) применяется паттерн: домен/действие (something/action). Например: list/addFavorite, user/login и так далее. Стоит ли что-то поправить здесь?

export enum ActionType {
  FillOffersList = 'data/fillOffersList',
  GetOffers = 'data/getOffers',
  SetCurrentOffer = 'data/setCurrentOffer',
  SetCommentsList = 'data/setCommentsList',
  SetNearbyOffersList = 'data/setNearbyOffersList',
  SetFavoriteOffers = 'data/setFavoriteOffers',
  UpdateOffer = 'data/updateOffer',
  UpdateRoom = 'data/updateRoom',
  UpdateNearby = 'data/updateNearby',
  SelectActiveCity = 'main/selectActiveCity',
  ChangeActiveSortType = 'main/changeActiveSortType',
  SetActiveId = 'card/setActiveId',
  RedirectTo = 'routing/redirectTo',
  SetFetchStatusOffers = 'fetchStatus/setFetchStatusOffers',
  SetFetchStatusOffer = 'fetchStatus/setFetchStatusOffer',
  SetFetchStatusNearbyOffers = 'fetchStatus/setFetchStatusNearbyOffers',
  SetFetchStatusComments = 'fetchStatus/setFetchStatusComments',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetLogin = 'user/setLogin',
}

export type ThunkActionResult<P = Promise<void>> = ThunkAction<P, State, AxiosInstance, Action>;
