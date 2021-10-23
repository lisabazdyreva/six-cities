import {Offers} from './offer';

export enum ActionType {
  SelectActiveCity = 'main/selectActiveCity',
  FillOffersList = 'main/fillOffersList',
}

export type SelectActiveCityAction = {
  type: ActionType.SelectActiveCity,
  payload: string,
};

export type FillOffersList = {
  type: ActionType.FillOffersList,
  payload: Offers,
}

export type Actions = SelectActiveCityAction | FillOffersList;
