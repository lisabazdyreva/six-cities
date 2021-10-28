import {
  selectActiveCity,
  fillOffersList,
  changeActiveSortType,
  setActiveId,
  getOffers
} from '../store/actions/action';

export enum ActionType {
  SelectActiveCity = 'main/selectActiveCity',
  FillOffersList = 'main/fillOffersList',
  ChangeActiveSortType = 'main/changeActiveSortType',
  SetActiveId = 'main/setActiveId',
  GetOffers = 'data/getOffers',
}

export type Actions =
  ReturnType<typeof selectActiveCity> |
  ReturnType<typeof fillOffersList> |
  ReturnType<typeof changeActiveSortType> |
  ReturnType<typeof setActiveId> |
  ReturnType<typeof getOffers>;
