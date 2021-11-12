import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {createAPI} from './api';
import {rootReducer} from './store/root-reducer';

import App from './components/app/app';

import {AuthorizationStatus} from './const';

import {fetchOffersList} from './store/actions/api-actions/api-actions-offers';
import {checkAuthorization} from './store/actions/api-actions/api-actions-user';
import {fetchFavoriteOffers} from './store/actions/api-actions/api-actions-favorite';

import {requireAuthorization} from './store/actions/action';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(checkAuthorization());
store.dispatch(fetchOffersList());
store.dispatch(fetchFavoriteOffers(null));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
