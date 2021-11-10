import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../types/action';

import type {Offer, Offers} from '../../types/offer';
import type {Reviews} from '../../types/review';

import {AppRoute, AuthorizationStatus, FetchStatus, Locations} from '../../const';


export const selectActiveCity = createAction(
  ActionType.SelectActiveCity,
  (city: Locations) => ({
    payload: city,
  }),
);

export const fillOffersList = createAction(
  ActionType.FillOffersList,
  (offers: Offers) => ({
    payload: offers,
  }),
);

export const changeActiveSortType = createAction(
  ActionType.ChangeActiveSortType,
  (sortingValue: string) => ({
    payload: sortingValue,
  }),
);

export const setActiveId = createAction(
  ActionType.SetActiveId,
  (id: number) => ({
    payload: id,
  }),
);

export const getOffers = createAction(
  ActionType.GetOffers,
  (offers: Offers) => ({
    payload: offers,
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authorizationStatus: AuthorizationStatus) => ({
    payload: authorizationStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const setLogin = createAction(
  ActionType.SetLogin,
  (login: string) => ({
    payload: login,
  }),
);

export const setCurrentOffer = createAction(
  ActionType.SetCurrentOffer,
  (offer: Offer) => ({
    payload: offer,
  }),
);

export const setNearbyOffersList = createAction(
  ActionType.SetNearbyOffersList,
  (offers: Offers) => ({
    payload: offers,
  }),
);

export const setCommentsList = createAction(
  ActionType.SetCommentsList,
  (commentsList: Reviews) => ({
    payload: commentsList,
  }),
);

export const setFavoriteOffers = createAction(
  ActionType.SetFavoriteOffers,
  (offers: Offers) => ({
    payload: offers,
  }),
);

export const setFetchStatusOffers = createAction(
  ActionType.SetFetchStatusOffers,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setFetchStatusNearbyOffers = createAction(
  ActionType.SetFetchStatusNearbyOffers,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const setFetchStatusComments = createAction(
  ActionType.SetFetchStatusComments,
  (status: FetchStatus) => ({
    payload: status,
  }),
);

export const redirectTo = createAction(
  ActionType.RedirectTo,
  (url: AppRoute) => ({
    payload: url,
  }),
);
