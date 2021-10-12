import Card from '../card/card';

import {Offers} from '../../types/offer';

import {useState} from 'react';

type CardsListProps = {
  cards: Offers;
};


function CardsList ({cards} : CardsListProps): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      { cards.map((card) => (
        <Card card={card}
          key={card.id + card.type}
          onMouse={(id) => setActiveItem(id)}
        />
      ))}
      {activeItem} {/*потом удалить, ругается за неиспользование*/}
    </div>
  );
}

export default CardsList;
