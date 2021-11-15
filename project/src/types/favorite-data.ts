import {AuthorizationStatus, CardTypes, FavoriteStatus} from '../const';

export type FavoriteData = {
  id: number,
  status: FavoriteStatus,
  typeCard: CardTypes,
  authorizationStatus: AuthorizationStatus,
};
