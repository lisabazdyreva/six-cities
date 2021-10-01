import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  RENT_OFFERS_VALUE: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentOffersValue = {Setting.RENT_OFFERS_VALUE}
    />
  </React.StrictMode>,
  document.getElementById('root'));
