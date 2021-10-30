import {ThunkActionResult} from '../../types/action';
import {AuthorizationData} from '../../types/authorization-data';

import {fillOffersList, getOffers, requireAuthorization} from './action';

import {adaptToClient, filterOffers} from '../../utils';
import {AuthorizationStatus, INITIAL_CITY} from '../../const';

import {saveToken, Token} from '../../services/token';


function fetchOffersList(): ThunkActionResult {
  return async (dispatch, _getState, api):Promise<void> => {
    const {data} = await api.get('/hotels');
    const adaptedToClientData =  adaptToClient(data);

    dispatch(getOffers(adaptedToClientData));
    dispatch(fillOffersList(filterOffers(INITIAL_CITY, adaptedToClientData)));
  };
}

function checkAuthorization(): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    await api.get('/login').then(() => dispatch(requireAuthorization(AuthorizationStatus.Auth)));
  };
}

function loginAction({login: email, password}: AuthorizationData): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    const {data: {token}} = await api.post<{token: Token}>('/login', {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };
}

export {fetchOffersList, checkAuthorization, loginAction};

