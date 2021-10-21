import {Offers} from '../../types/offer';
import React from 'react';
import Card from '../card/card';

type CardsListProps = {
  cards: Offers;
  type: string;
}

function CardsList({cards, type}: CardsListProps): JSX.Element {
  return (
    <div className={`places__list ${type === 'main' ? 'cities__places-list tabs__content' : 'near-places__list'}`}>
      {cards.map((card) => <Card card={card} key={card.id} typeCard={type}/>)}
    </div>

  );
}

export default CardsList;
