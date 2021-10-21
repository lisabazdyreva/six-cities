import React, {useState} from 'react';

import {CardTypes} from '../../const';
import {Offers} from '../../types/offer';

import Card from '../card/card';


type CardsListProps = {
  cards: Offers;
  type: string;
}

function CardsList({cards, type}: CardsListProps): JSX.Element {

  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <div className={`places__list ${type === 'main' ? 'cities__places-list tabs__content' : 'near-places__list'}`}>
      {type === CardTypes.Main
        ? cards.map((card) => <Card card={card} key={card.id} typeCard={type} onCardHover={(id) => setActiveItem(id)}/>)
        : cards.map((card) => <Card card={card} key={card.id} typeCard={type}/>)}
      {activeItem} {/* временно, чтобы eslint не ругался*/}
    </div>

  );
}

export default CardsList;
