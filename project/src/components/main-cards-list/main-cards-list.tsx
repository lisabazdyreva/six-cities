import {Offers} from '../../types/offer';

import CardsList from '../cards-list/cards-list';

import {CardTypes} from '../../const';


type MainCardsListProps = {
  cards: Offers
};


function MainCardsList (props: MainCardsListProps): JSX.Element {
  const {cards} = props;
  return (
    <CardsList cards={cards} type={CardTypes.Main} />
  );
}

export default MainCardsList;

