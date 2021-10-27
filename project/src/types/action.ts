import {
  selectActiveCity,
  fillOffersList,
  changeActiveSortType,
  setActiveId
} from '../store/actions/action';

export enum ActionType {
  SelectActiveCity = 'main/selectActiveCity',
  FillOffersList = 'main/fillOffersList',
  ChangeActiveSortType = 'main/changeActiveSortType',
  SetActiveId = 'main/setActiveId',
}

export type Actions = ReturnType<typeof selectActiveCity> | ReturnType<typeof fillOffersList> | ReturnType<typeof changeActiveSortType> | ReturnType<typeof setActiveId>;
