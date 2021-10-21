import {Offers} from '../../types/offer';
import CardsList from '../cards-list/cards-list';
import React from 'react';

type MainCardsListProps = {
  cards: Offers;
};

function MainCardsList ({cards} : MainCardsListProps): JSX.Element {
  return (
    <CardsList cards={cards} type='main' />
  );
}

export default MainCardsList;
