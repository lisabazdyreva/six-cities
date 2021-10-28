import {ThunkActionResult} from '../../types/action';
import {getOffers, fillOffersList} from './action';

import {filterOffers} from '../../utils';
import {INITIAL_CITY} from '../../const';

function fetchOffersList(): ThunkActionResult {
  return async (dispatch, _getState, api):Promise<void> => {
    const {data} = await api.get('/hotels');
    dispatch(getOffers(data));
    dispatch(fillOffersList(filterOffers(INITIAL_CITY, data)));
  };
}

export {fetchOffersList};

