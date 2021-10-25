import React, {useState} from 'react';
import classNames from 'classnames';

import {isMainPage} from '../../utils';
import {Offers} from '../../types/offer';

import Card from '../card/card';


type CardsListProps = {
  cards: Offers;
  type: string;
}

function CardsList({cards, type}: CardsListProps): JSX.Element {

  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <div
      className={classNames(
        'places__list',
        {'cities__places-list tabs__content': isMainPage(type)},
        {'near-places__list': !isMainPage(type)})}
    >
      {
        cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            typeCard={type}
            onCardHover={ isMainPage(type)
              ? (id) => setActiveItem(id)
              : null}
          />
        ))
      }
      {activeItem} {/* временно, чтобы eslint не ругался*/}
    </div>

  );
}

export default CardsList;
