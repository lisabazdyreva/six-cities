import {Offers} from '../../types/offer';
import NearbyCard from '../nearby-card/nearby-card';

type NearbyCardsListProps = {
  cards: Offers;
};

function NearbyCardsList({cards}: NearbyCardsListProps): JSX.Element {

  return (
    <div className="near-places__list places__list">
      {cards.map((card) => <NearbyCard card={card} key={card.id}/>)}
    </div>
  );
}

export default NearbyCardsList;
