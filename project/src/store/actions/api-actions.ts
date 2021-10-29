import {ThunkActionResult} from '../../types/action';
import {getOffers, fillOffersList} from './action';

import {adaptToClient} from '../../utils';

import {filterOffers} from '../../utils';
import {INITIAL_CITY} from '../../const';


function fetchOffersList(): ThunkActionResult {
  return async (dispatch, _getState, api):Promise<void> => {
    const {data} = await api.get('/hotels');
    const adaptedToClientData =  adaptToClient(data);

    dispatch(getOffers(adaptedToClientData));
    dispatch(fillOffersList(filterOffers(INITIAL_CITY, adaptedToClientData)));
  };
}

export {fetchOffersList};

