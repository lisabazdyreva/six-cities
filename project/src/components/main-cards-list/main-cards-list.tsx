import {Offers} from '../../types/offer';
import CardsList from '../cards-list/cards-list';
import {CardTypes} from '../../const';


type MainCardsListProps = {
  cards: Offers;
};


function MainCardsList ({cards}: MainCardsListProps): JSX.Element {
  return (
    <CardsList cards={cards} type={CardTypes.Main} />
  );
}

export default MainCardsList;

