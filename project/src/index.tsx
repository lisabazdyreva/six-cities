import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer} from './store/reducers/reducer';

import App from './components/app/app';

import {CITIES} from './const';

import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Setting = {
  RENT_OFFERS_VALUE: 312,
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentOffersValue = {Setting.RENT_OFFERS_VALUE}
        offers={offers}
        reviews={reviews}
        cities={CITIES}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
