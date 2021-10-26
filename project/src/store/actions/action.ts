import {ActionType} from '../../types/action';

import type {Offers} from '../../types/offer';

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

export {selectActiveCity, fillOffersList, changeActiveSortType, setActiveId};
