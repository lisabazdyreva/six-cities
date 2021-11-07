import {AppData} from '../../types/state';

import {DEFAULT_CURRENT_OFFER, FetchStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

import {
  getOffers,
  setCurrentOffer,
  setFetchStatus,
  setCommentsList,
  setNearbyOffersList
} from '../actions/action';


const initialState: AppData = {
  offers: [],
  isDataLoaded: false,
  currentOffer: DEFAULT_CURRENT_OFFER,
  fetchStatus: FetchStatus.Trying,
  commentsList: [],
  nearbyOffers: [],
};

export const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setFetchStatus, (state, action) => {
      state.fetchStatus = action.payload;
    })
    .addCase(setCommentsList, (state, action) => {
      state.commentsList = action.payload;
    })
    .addCase(setNearbyOffersList, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});
