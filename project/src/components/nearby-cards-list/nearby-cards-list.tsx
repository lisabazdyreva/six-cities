import type {Offers} from '../../types/offer';

import CardsList from '../cards-list/cards-list';

import {CardTypes} from '../../const';


type NearbyCardsListProps = {
  cards: Offers;
  onFavoriteClick: (isFavorite: boolean, id: number) => void;
};


function NearbyCardsList({cards, onFavoriteClick}: NearbyCardsListProps): JSX.Element {
  return (
    <CardsList cards={cards} type={CardTypes.Offer} onFavoriteClick={onFavoriteClick}/>
  );
}

export default NearbyCardsList;
