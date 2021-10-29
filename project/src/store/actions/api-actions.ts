import {ThunkActionResult} from '../../types/action';
import {fillOffersList, getOffers, requireAuthorization} from './action';

import {adaptToClient, filterOffers} from '../../utils';
import {AuthorizationStatus, INITIAL_CITY} from '../../const';


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

export {fetchOffersList, checkAuthorization};

