import {AppData} from '../../types/state';

import {DEFAULT_CURRENT_OFFER, FetchStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

import {
  getOffers,
  setCommentsList,
  setCurrentOffer,
  setFetchStatusNearbyOffers,
  setFetchStatusOffers,
  setNearbyOffersList,
  setFetchStatusComments,
  setFavoriteOffers,
  updateOffer, updateRoom
} from '../actions/action';


const initialState: AppData = {
  offers: [],
  isDataLoaded: false,
  currentOffer: DEFAULT_CURRENT_OFFER,
  fetchStatusOffers: FetchStatus.Trying,
  fetchStatusNearbyOffers: FetchStatus.Trying,
  fetchStatusComments: FetchStatus.Trying,
  commentsList: [],
  nearbyOffers: [],
  favoriteOffers: [],
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
    .addCase(setFetchStatusOffers, (state, action) => {
      state.fetchStatusOffers = action.payload;
    })
    .addCase(setFetchStatusNearbyOffers, (state, action) => {
      state.fetchStatusNearbyOffers = action.payload;
    })
    .addCase(setFetchStatusComments, (state, action) => {
      state.fetchStatusComments = action.payload;
    })
    .addCase(setCommentsList, (state, action) => {
      state.commentsList = action.payload;
    })
    .addCase(setNearbyOffersList, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      state.offers.map((offer) => {
        if (offer.id === action.payload) {
          offer.isFavorite = !offer.isFavorite;
        }
      });
    })
    .addCase(updateRoom, (state, action) => {
      state.currentOffer.isFavorite = !state.currentOffer.isFavorite;
    });
});
