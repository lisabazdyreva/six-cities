import {Offers} from '../../types/offer';
import NearbyOffer from '../nearby-offer/nearby-offer';

type NearbyOffersListProps = {
  cards: Offers;
};

function NearbyOffersList({cards}: NearbyOffersListProps): JSX.Element {

  return (
    <div className="near-places__list places__list">
      {cards.map((card) => <NearbyOffer card={card} key={card.id}/>)}
    </div>
  );
}

export default NearbyOffersList;
