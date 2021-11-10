import classNames from 'classnames';

import type {Offers} from '../../types/offer';

import Card from '../card/card';

import {isMainPage} from '../../utils/utils';


type CardsListProps = {
  cards: Offers;
  type: string;
  onFavoriteClick: (isFavorite: boolean, id: number) => void;
}


function CardsList({cards, type, onFavoriteClick}: CardsListProps): JSX.Element {
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
            onFavoriteClick={onFavoriteClick}
          />
        ))
      }
    </div>

  );
}

export default CardsList;
