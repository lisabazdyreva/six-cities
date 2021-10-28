import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import  {createAPI} from './api';
import {reducer} from './store/reducers/reducer';

import App from './components/app/app';

import {citiesList} from './const';

import {reviews} from './mocks/reviews';


const api = createAPI();


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={reviews}
        cities={citiesList}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
