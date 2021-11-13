import {Offers} from '../../types/offer';
import CardsList from '../cards-list/cards-list';
import {CardTypes} from '../../const';


type MainCardsListProps = {
  cards: Offers;
  onFavoriteClick: (isFavorite: boolean, id: number) => void;
};


function MainCardsList ({cards, onFavoriteClick}: MainCardsListProps): JSX.Element {
  return (
    <CardsList cards={cards} type={CardTypes.Main} onFavoriteClick={onFavoriteClick}/>
  );
}

export default MainCardsList;

