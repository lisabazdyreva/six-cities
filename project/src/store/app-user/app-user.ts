import {ActionType, Actions} from '../../types/action';
import {AppUser} from '../../types/state';

import {AuthorizationStatus, INITIAL_LOGIN} from '../../const';


const initialState: AppUser = {
  authorizationStatus: AuthorizationStatus.Unknown,
  login: INITIAL_LOGIN,
};


const appUser = (state = initialState, action: Actions): AppUser => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.SetLogin:
      return {...state, login: action.payload};
    default:
      return state;
  }
};

export {appUser};
