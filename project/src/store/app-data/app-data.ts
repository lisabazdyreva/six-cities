import {AppData} from '../../types/state';

import {DEFAULT_CURRENT_OFFER} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

import {
  getOffers,
  setCommentsList,
  setCurrentOffer,
  setNearbyOffersList,
  setFavoriteOffers,
  updateOffer, updateRoom,
  updateNearby
} from '../actions/action';


const initialState: AppData = {
  offers: [],
  isDataLoaded: false,
  currentOffer: DEFAULT_CURRENT_OFFER,
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
        return state.offers;
      });
    })
    .addCase(updateRoom, (state) => {
      state.currentOffer.isFavorite = !state.currentOffer.isFavorite;
    })
    .addCase(updateNearby, (state, action) => {
      state.nearbyOffers.map((offer) => {
        if (offer.id === action.payload) {
          offer.isFavorite = !offer.isFavorite;
        }
        return state.nearbyOffers;
      });
    });
});
