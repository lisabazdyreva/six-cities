import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {redirect} from './store/middlewares/redirect';


import {createAPI} from './api';
import {rootReducer} from './store/root-reducer';

import App from './components/app/app';

import {AuthorizationStatus, citiesList} from './const';

import {checkAuthorization, fetchOffersList} from './store/actions/api-actions';
import {requireAuthorization} from './store/actions/action';


const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthorization());
store.dispatch(fetchOffersList());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cities={citiesList}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
