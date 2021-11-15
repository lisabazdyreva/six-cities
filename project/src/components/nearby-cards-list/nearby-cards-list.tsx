import type {Offers} from '../../types/offer';

import CardsList from '../cards-list/cards-list';

import {CardTypes} from '../../const';


type NearbyCardsListProps = {
  cards: Offers;
};


function NearbyCardsList({cards}: NearbyCardsListProps): JSX.Element {
  return (
    <CardsList cards={cards} type={CardTypes.Nearby}/>
  );
}

export default NearbyCardsList;
