import {ActionType, ChangeCityAction} from '../../types/action';
import {Offers} from '../../types/offer';

function changeCity (value: string): ChangeCityAction {
  return ({
    type: ActionType.ChangeCity,
    payload: value,
  });
}

function fillOffersList (offers: Offers) {
  return ({
    type: ActionType.FillOffersList,
    payload: offers,
  });
}

export {changeCity, fillOffersList};
