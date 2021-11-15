import {createReducer} from '@reduxjs/toolkit';
import {AppStatus} from '../../types/state';
import {FetchStatus} from '../../const';
import {
  setFetchStatusComments,
  setFetchStatusNearbyOffers,
  setFetchStatusOffer,
  setFetchStatusOffers
} from '../actions/action';


const initialState: AppStatus = {
  fetchStatusOffers: FetchStatus.Trying,
  fetchStatusOffer: FetchStatus.Trying,
  fetchStatusNearbyOffers: FetchStatus.Trying,
  fetchStatusComments: FetchStatus.Trying,
};

export const appStatus = createReducer(initialState, (builder) => {
  builder
    .addCase(setFetchStatusOffers, (state, action) => {
      state.fetchStatusOffers = action.payload;
    })
    .addCase(setFetchStatusOffer, (state, action) => {
      state.fetchStatusOffer = action.payload;
    })
    .addCase(setFetchStatusNearbyOffers, (state, action) => {
      state.fetchStatusNearbyOffers = action.payload;
    })
    .addCase(setFetchStatusComments, (state, action) => {
      state.fetchStatusComments = action.payload;
    });
});
