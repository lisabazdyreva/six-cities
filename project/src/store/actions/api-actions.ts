import {ThunkActionResult} from '../../types/action';
import {AuthorizationData} from '../../types/authorization-data';

import {
  fillOffersList,
  getOffers,
  requireAuthorization,
  requireLogout,
  setCurrentOffer,
  setFetchStatus,
  setLogin,
  setNearbyOffersList
} from './action';

import {adaptToClient, filterOffers} from '../../utils';
import {AuthorizationStatus, FetchStatus, INITIAL_CITY, INITIAL_LOGIN} from '../../const';

import {deleteToken, saveToken, Token} from '../../services/token';


function fetchOffersList(): ThunkActionResult {
  return async (dispatch, _getState, api):Promise<void> => {
    dispatch(setFetchStatus(FetchStatus.Trying));
    await api.get('/hotels')
      .then(({data}) => adaptToClient(data))
      .then((data) => {
        dispatch(getOffers(data));
        dispatch(fillOffersList(filterOffers(INITIAL_CITY, data)));
      })
      .then(() => dispatch(setFetchStatus(FetchStatus.Ok)))

      .catch(() => dispatch(setFetchStatus(FetchStatus.Error)));
  };
}

function fetchCurrentOffer(id: number): ThunkActionResult {
  return async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFetchStatus(FetchStatus.Trying));
    await api.get(`/hotels/${id}`)
      .then(({data}) => adaptToClient([data]))
      .then(([data]) => dispatch(setCurrentOffer(data)))
      .then(() => dispatch(setFetchStatus(FetchStatus.Ok)))

      .catch(() => dispatch(setFetchStatus(FetchStatus.Error)));
  };
}

function fetchNearbyOffers(id: number): ThunkActionResult {
  return async(dispatch, _getState, api) => {
    dispatch(setFetchStatus(FetchStatus.Trying));
    await api.get(`/hotels/${id}/nearby`)
      .then(({data}) => dispatch(setNearbyOffersList(adaptToClient(data))))
      .then(() => dispatch(setFetchStatus(FetchStatus.Ok)))

      .catch(() => dispatch(setFetchStatus(FetchStatus.Error)));
  }; // TODO как обработать отдельно от карточки
}

function checkAuthorization(): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    await api.get('/login').then(() => dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));
  };
}

function loginAction({login: email, password}: AuthorizationData): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    const {data: {token}} = await api.post<{token: Token}>('/login', {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setLogin(email));
  };
}

function logoutAction(): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    api.delete('./logout');
    deleteToken();
    dispatch(requireLogout());
    dispatch(setLogin(INITIAL_LOGIN));
  };
}

export {
  fetchOffersList,
  fetchCurrentOffer,
  checkAuthorization,
  loginAction,
  logoutAction,
  fetchNearbyOffers
};

