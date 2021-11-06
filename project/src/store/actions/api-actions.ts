import {ThunkActionResult} from '../../types/action';
import {AuthorizationData} from '../../types/authorization-data';

import {
  fillOffersList,
  getOffers,
  requireAuthorization,
  requireLogout,
  setCommentsList,
  setCurrentOffer,
  setFetchStatus,
  setLogin,
  setNearbyOffersList
} from './action';

import {filterOffers} from '../../utils/utils';
import {adaptCommentsToClient, adaptToClient} from '../../utils/adapt-utils';
import {APIRoute, AuthorizationStatus, FetchStatus, INITIAL_CITY, INITIAL_LOGIN} from '../../const';

import {deleteToken, saveToken, Token} from '../../services/token';
import {CommentData} from '../../types/comment-data';


function fetchOffersList(): ThunkActionResult {
  return async (dispatch, _getState, api):Promise<void> => {
    dispatch(setFetchStatus(FetchStatus.Trying));
    await api.get(APIRoute.Hotels)
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
  return async(dispatch, _getState, api): Promise<void> => {
    dispatch(setFetchStatus(FetchStatus.Trying));
    await api.get(`/hotels/${id}/nearby`)
      .then(({data}) => dispatch(setNearbyOffersList(adaptToClient(data))))
      .then(() => dispatch(setFetchStatus(FetchStatus.Ok)))

      .catch(() => dispatch(setFetchStatus(FetchStatus.Error)));
  }; // TODO как обработать отдельно от карточки ошибку
}

function fetchOfferComments(id: number): ThunkActionResult {
  return async (dispatch, _getState, api): Promise<void> => {
    await api.get(`/comments/${id}`)
      .then(({data}) => adaptCommentsToClient(data))
      .then((data) => dispatch(setCommentsList(data)))

      .catch(() => dispatch(setFetchStatus(FetchStatus.Error)));
  };
}

function postComment({id, comment, rating}: CommentData): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    await api.post(`/comments/${id}`, {comment, rating})
      .then(({data}) => dispatch(setCommentsList(adaptCommentsToClient(data))))
      .catch(() => dispatch(setFetchStatus(FetchStatus.Error)));
  };
}

function checkAuthorization(): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(({data}) => dispatch(setLogin(data.email)))
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.Auth)))

      .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));
  };
}

function loginAction({login: email, password}: AuthorizationData): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setLogin(email));
  };
}

function logoutAction(): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    await api.delete(APIRoute.Logout);
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
  fetchNearbyOffers,
  fetchOfferComments,
  postComment
};

