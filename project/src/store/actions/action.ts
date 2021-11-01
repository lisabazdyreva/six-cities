import {ActionType} from '../../types/action';

import type {Offers} from '../../types/offer';

import {AuthorizationStatus} from '../../const';

function selectActiveCity(city: string) {
  return ({
    type: ActionType.SelectActiveCity,
    payload: city,
  } as const);
}

function fillOffersList(offers: Offers) {
  return ({
    type: ActionType.FillOffersList,
    payload: offers,
  } as const);
}

function changeActiveSortType(sortingValue: string) {
  return ({
    type: ActionType.ChangeActiveSortType,
    payload: sortingValue,
  } as const);
}

function setActiveId(id: number) {
  return ({
    type: ActionType.SetActiveId,
    payload: id,
  } as const);
}

function getOffers(offers: Offers) {
  return ({
    type: ActionType.GetOffers,
    payload: offers,
  } as const);
}

function requireAuthorization(authorizationStatus: AuthorizationStatus) {
  return ({
    type: ActionType.RequireAuthorization,
    payload: authorizationStatus,
  } as const);
}

function requireLogout() {
  return ({
    type: ActionType.RequireLogout,
  } as const);
}

function setLogin(login: string) {
  return ({
    type: ActionType.SetLogin,
    payload: login,
  } as const);
}

export {selectActiveCity, fillOffersList, changeActiveSortType, setActiveId, getOffers, requireAuthorization, requireLogout, setLogin};
