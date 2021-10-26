import {ActionType, ChangeActiveSortingAction, FillOffersListAction, SelectActiveCityAction} from '../../types/action';
import {Offers} from '../../types/offer';

function selectActiveCity (city: string): SelectActiveCityAction {
  return ({
    type: ActionType.SelectActiveCity,
    payload: city,
  });
}

function fillOffersList (offers: Offers): FillOffersListAction {
  return ({
    type: ActionType.FillOffersList,
    payload: offers,
  });
}

function changeActiveSorting (sortingValue: string): ChangeActiveSortingAction {
  return ({
    type: ActionType.ChangeActiveSorting,
    payload: sortingValue,
  });
}

export {selectActiveCity, fillOffersList, changeActiveSorting};
