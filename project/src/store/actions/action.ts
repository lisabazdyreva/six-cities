import {ActionType, SelectActiveCityAction} from '../../types/action';
import {Offers} from '../../types/offer';

function selectActiveCity(city: string): SelectActiveCityAction {
  return ({
    type: ActionType.SelectActiveCity,
    payload: city,
  });
}

function fillOffersList (offers: Offers) {
  return ({
    type: ActionType.FillOffersList,
    payload: offers,
  });
}

export {selectActiveCity, fillOffersList};
