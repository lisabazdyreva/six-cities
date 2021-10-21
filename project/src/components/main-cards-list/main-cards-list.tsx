import React from 'react';

import {CardTypes} from '../../const';
import {Offers} from '../../types/offer';

import CardsList from '../cards-list/cards-list';


type MainCardsListProps = {
  cards: Offers;
};

function MainCardsList ({cards} : MainCardsListProps): JSX.Element {
  return (
    <CardsList cards={cards} type={CardTypes.Main} />
  );
}

export default MainCardsList;
