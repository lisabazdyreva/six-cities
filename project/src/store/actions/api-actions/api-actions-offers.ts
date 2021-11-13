import {ThunkActionResult} from '../../../types/action';

import {
  fillOffersList,
  getOffers,
  setCurrentOffer,
  setFetchStatusNearbyOffers,
  setFetchStatusOffers,
  setFetchStatusOffer,
  setNearbyOffersList
} from '../action';

import {filterOffers} from '../../../utils/sort-utils';
import {adaptToClient} from '../../../utils/adapt-utils';
import {
  APIRoute,
  FetchStatus,
  INITIAL_CITY
} from '../../../const';


function fetchOffersList(): ThunkActionResult {
  return async (dispatch, _getState, api):Promise<void> => {
    dispatch(setFetchStatusOffers(FetchStatus.Trying));
    await api.get(APIRoute.Hotels)
      .then(({data}) => adaptToClient(data))
      .then((data) => {
        dispatch(getOffers(data));
        dispatch(fillOffersList(filterOffers(INITIAL_CITY, data)));
      })
      .then(() => dispatch(setFetchStatusOffers(FetchStatus.Ok)))

      .catch(() => dispatch(setFetchStatusOffers(FetchStatus.Error)));
  };
}

function fetchCurrentOffer(id: number): ThunkActionResult {
  return async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFetchStatusOffer(FetchStatus.Trying));
    await api.get(`/hotels/${id}`)
      .then(({data}) => adaptToClient([data]))
      .then(([data]) => dispatch(setCurrentOffer(data)))
      .then(() => dispatch(setFetchStatusOffer(FetchStatus.Ok)))

      .catch(() => dispatch(setFetchStatusOffer(FetchStatus.Error)));
  };
}

function fetchNearbyOffers(id: number): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    dispatch(setFetchStatusNearbyOffers(FetchStatus.Trying));
    await api.get(`/hotels/${id}/nearby`)
      .then(({data}) => dispatch(setNearbyOffersList(adaptToClient(data))))
      .then(() => dispatch(setFetchStatusNearbyOffers(FetchStatus.Ok)))

      .catch(() => dispatch(setFetchStatusNearbyOffers(FetchStatus.Error)));
  };
}

export {fetchOffersList, fetchCurrentOffer, fetchNearbyOffers};
