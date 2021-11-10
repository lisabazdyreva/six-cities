import {Offers} from '../../types/offer';

import CardsList from '../cards-list/cards-list';

import {CardTypes} from '../../const';


type MainCardsListProps = {
  cards: Offers,
  onFavoriteClick: (isFavorite: boolean, id: number) => void;
};


function MainCardsList (props: MainCardsListProps): JSX.Element {
  const {cards, onFavoriteClick} = props;
  return (
    <CardsList cards={cards} type={CardTypes.Main} onFavoriteClick={onFavoriteClick}/>
  );
}

export default MainCardsList;

