import {AppProcess} from '../../types/state';

import {DEFAULT_ID, DEFAULT_SORT_TYPE, INITIAL_CITY} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {
  selectActiveCity,
  fillOffersList,
  changeActiveSortType,
  setActiveId, updateOffer
} from '../actions/action';


const initialState: AppProcess = {
  selectedCity: INITIAL_CITY,
  sortedOffers: [],
  activeSortType: DEFAULT_SORT_TYPE,
  id: DEFAULT_ID,
};


export const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(selectActiveCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.sortedOffers = action.payload;
    })
    .addCase(changeActiveSortType, (state, action) => {
      state.activeSortType = action.payload;
    })
    .addCase(setActiveId, (state, action) => {
      state.id = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      state.sortedOffers.map((offer) => {
        if (offer.id === action.payload) {
          offer.isFavorite = !offer.isFavorite;
        }
      });
    });
});
