import {useParams} from 'react-router-dom';

import Icons from '../icons/icons';
import Header from '../header/header';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import NearbyCardsList from '../nearby-cards-list/nearby-cards-list';

import type {Offers} from '../../types/offer';
import type {Reviews} from '../../types/review';

import {MapStylesProperties} from '../../const';


type OfferScreenType = {
  offers: Offers;
  reviews: Reviews;
};

function OfferScreen({offers, reviews}: OfferScreenType): JSX.Element {
  const params: {id: string} = useParams();
  const { id } = params;

  const [card] = offers.filter((offer) => offer.id === +id);

  const nearbyOffers = offers.filter((offer) => offer.id !== +card.id);


  return (
    <>
      <Icons />
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <OfferCard
              reviews={reviews}
              card={card}
            />
            <section className="property__map map">
              <Map cards={nearbyOffers} styles={MapStylesProperties.OfferPage}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearbyCardsList
                cards={nearbyOffers}
              />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default OfferScreen;
