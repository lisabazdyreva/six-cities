import {CardTypes, FavoriteStatus} from '../const';

export type FavoriteData = {
  id: number,
  status: FavoriteStatus,
  typeCard: CardTypes,
};
