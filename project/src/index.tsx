import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import App from './components/app/app';

import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer} from './store/reducers/reducer';

const Setting = {
  RENT_OFFERS_VALUE: 312,
};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentOffersValue = {Setting.RENT_OFFERS_VALUE}
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
