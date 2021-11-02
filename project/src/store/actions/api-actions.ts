import {ThunkActionResult} from '../../types/action';
import {AuthorizationData} from '../../types/authorization-data';

import {
  fillOffersList,
  getOffers,
  requireAuthorization,
  requireLogout,
  setCurrentOffer,
  setLogin,
  setNearbyOffersList
} from './action';

import {adaptToClient, filterOffers} from '../../utils';
import {AuthorizationStatus, INITIAL_CITY, INITIAL_LOGIN} from '../../const';

import {saveToken, deleteToken, Token} from '../../services/token';


function fetchOffersList(): ThunkActionResult {
  return async (dispatch, _getState, api):Promise<void> => {
    const {data} = await api.get('/hotels');
    const adaptedToClientData =  adaptToClient(data);
    dispatch(getOffers(adaptedToClientData));
    dispatch(fillOffersList(filterOffers(INITIAL_CITY, adaptedToClientData)));
  };
}

function fetchCurrentOffer(id: number): ThunkActionResult {
  return async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(`/hotels/${id}`);
    const [adaptedToClientData] = adaptToClient([data]);

    dispatch(setCurrentOffer(adaptedToClientData));
  };
}

function fetchNearbyOffers(id: number): ThunkActionResult {
  return async(dispatch, _getState, api) => {
    const {data} = await api.get(`/hotels/${id}/nearby`);
    const adaptedToClientData = adaptToClient(data);

    dispatch(setNearbyOffersList(adaptedToClientData));
  };
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

