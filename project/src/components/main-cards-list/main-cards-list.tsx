// import React, {useState}  from 'react';
import {Offers} from '../../types/offer';
// import MainCard from '../main-card/main-card';
import CardsList from '../cards-list/cards-list';
import React from 'react';

type MainCardsListProps = {
  cards: Offers;
};

function MainCardsList ({cards} : MainCardsListProps): JSX.Element {
  // const [activeItem, setActiveItem] = useState<number>(0);

  // return (
  //   <div className="cities__places-list places__list tabs__content">
  //     {cards.map((card) => (
  //       <MainCard
  //         card={card}
  //         key={card.id + card.type}
  //         onMouse={(id) => setActiveItem(id)}
  //       />
  //     ))}
  //     {activeItem} {/*потом удалить, ругается за неиспользование*/}
  //   </div>
  // );
  return (
    <CardsList cards={cards} type={'main'} />
  );
}

export default MainCardsList;
