import {Offers} from './offer';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  FillOffersList = 'offers/fillOffersList',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
};

export type FillOffersList = {
  type: ActionType.FillOffersList,
  payload: Offers,
}

export type Actions = ChangeCityAction | FillOffersList;
