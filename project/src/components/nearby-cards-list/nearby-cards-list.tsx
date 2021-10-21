import {Offers} from '../../types/offer';
import React from 'react';
import CardsList from '../cards-list/cards-list';

type NearbyCardsListProps = {
  cards: Offers;
};

function NearbyCardsList({cards}: NearbyCardsListProps): JSX.Element {
  return (
    <CardsList cards={cards} type='nearby' />
  );
}

export default NearbyCardsList;
