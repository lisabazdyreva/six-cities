import {Offers} from './offer';

export enum ActionType {
  SelectActiveCity = 'main/selectActiveCity',
  FillOffersList = 'main/fillOffersList',
  ChangeActiveSorting = 'main/changeActiveSorting',
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

export type Actions = SelectActiveCityAction | FillOffersListAction | ChangeActiveSortingAction;
