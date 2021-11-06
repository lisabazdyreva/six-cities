import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {ThunkAppDispatch} from './types/action';

import {createAPI} from './api';
import {rootReducer} from './store/reducers/root-reducer';

import App from './components/app/app';

import {AuthorizationStatus, citiesList} from './const';

import {checkAuthorization, fetchOffersList} from './store/actions/api-actions';

import {requireAuthorization} from './store/actions/action';


const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthorization());
(store.dispatch as ThunkAppDispatch)(fetchOffersList());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cities={citiesList}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
