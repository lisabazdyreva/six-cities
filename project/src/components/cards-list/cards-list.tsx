import Card from '../card/card';

import {Offers} from '../../types/offer';

import {useState} from 'react';

type CardsListProps = {
  offers: Offers;
};


function CardsList ({offers} : CardsListProps): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer) => (
        <Card offer={offer}
          key={offer.id + offer.type}
          onMouse={(id) => setActiveItem(id)}
        />
      ))}
      {activeItem} {/*потом удалить, ругается за неиспользование*/}
    </div>
  );
}

export default CardsList;
