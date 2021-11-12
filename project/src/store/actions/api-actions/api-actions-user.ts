import {ThunkActionResult} from '../../../types/action';
import {APIRoute, AppRoute, AuthorizationStatus, INITIAL_LOGIN, WarningMessage} from '../../../const';
import {redirectTo, requireAuthorization, requireLogout, setLogin} from '../action';
import {toast} from 'react-toastify';
import {AuthorizationData} from '../../../types/authorization-data';
import {deleteToken, saveToken, Token} from '../../../services/token';
import {fetchOffersList} from './api-actions-offers';


function checkAuthorization(): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Login)
      .then(({data}) => dispatch(setLogin(data.email)))
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      })
      .catch(() => {
        toast.info(WarningMessage.CheckAuthorization);
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      });
  };
}

function loginAction({login: email, password}: AuthorizationData): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setLogin(email));
    dispatch(redirectTo(AppRoute.Main));
  };
}

function logoutAction(): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    await api.delete(APIRoute.Logout);
    deleteToken();
    dispatch(requireLogout());
    dispatch(setLogin(INITIAL_LOGIN));
    await dispatch(fetchOffersList());
  };
}

export {checkAuthorization, loginAction, logoutAction};
