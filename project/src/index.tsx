import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Setting = {
  RENT_OFFERS_VALUE: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentOffersValue = {Setting.RENT_OFFERS_VALUE}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
