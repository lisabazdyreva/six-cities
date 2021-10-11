import Card from '../card/card';

import {Offers} from '../../types/offer';

type CardsListProps = {
  offers: Offers;
};

function CardsList ({offers} : CardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer) => <Card offer={offer} key={offer.id + offer.type}/>) }
    </div>
  );
}

export default CardsList;
