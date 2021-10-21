import React from 'react';

import {CardTypes} from '../../const';
import {Offers} from '../../types/offer';

import CardsList from '../cards-list/cards-list';


type NearbyCardsListProps = {
  cards: Offers;
};

function NearbyCardsList({cards}: NearbyCardsListProps): JSX.Element {
  return (
    <CardsList cards={cards} type={CardTypes.Offer} />
  );
}

export default NearbyCardsList;
