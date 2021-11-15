import {AppUser} from '../../types/state';

import {AuthorizationStatus, DefaultValue} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

import {
  requireAuthorization,
  requireLogout,
  setLogin
} from '../actions/action';


const initialState: AppUser = {
  authorizationStatus: AuthorizationStatus.Unknown,
  login: DefaultValue.Login,
};


export const appUser = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setLogin, (state, action) => {
      state.login = action.payload;
    });
});
