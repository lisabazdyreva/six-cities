import {ThunkActionResult} from '../../types/action';
import {getOffers, fillOffersList} from './action';

function fetchOffersList(): ThunkActionResult {
  return async (dispatch, _getState, api):Promise<void> => {
    const {data} = await api.get('/hotels');
    dispatch(getOffers(data));
    dispatch(fillOffersList(data));
  };
}

export {fetchOffersList};

