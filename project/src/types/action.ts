import {Offers} from './offer';

export enum ActionType {
  SelectActiveCity = 'main/selectActiveCity',
  FillOffersList = 'main/fillOffersList',
  ChangeActiveSorting = 'main/changeActiveSorting',
  SetActiveId = 'main/setActiveId',
}

export type SelectActiveCityAction = {
  type: ActionType.SelectActiveCity,
  payload: string,
};

export type FillOffersListAction = {
  type: ActionType.FillOffersList,
  payload: Offers,
}

export type ChangeActiveSortingAction = {
  type: ActionType.ChangeActiveSorting,
  payload: string,
}

export type SetActiveIdAction = {
  type: ActionType.SetActiveId,
  payload: number,
}


export type Actions = SelectActiveCityAction | FillOffersListAction | ChangeActiveSortingAction | SetActiveIdAction;
