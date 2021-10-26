import {useParams} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import Icons from '../icons/icons';
import Header from '../header/header';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import NearbyCardsList from '../nearby-cards-list/nearby-cards-list';

import type {Reviews} from '../../types/review';
import {State} from '../../types/state';

import {MapStylesProperties} from '../../const';


function mapStateToProps ({offers}: State) {
  return ({
    offers,
  });
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type OfferScreenType = {
  reviews: Reviews;
};
type ConnectedComponentProps = PropsFromRedux & OfferScreenType;


function OfferScreen({offers, reviews}: ConnectedComponentProps ): JSX.Element {
  const params: {id: string} = useParams();
  const { id } = params;

  const [card] = offers.filter((offer) => offer.id === +id);
  const nearbyOffers = offers.filter((offer) => offer.id !== +card.id);
  const cards = (nearbyOffers.length > 3) ? nearbyOffers.slice(0, 3) : nearbyOffers.slice();

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
              <Map cards={cards} styles={MapStylesProperties.OfferPage}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearbyCardsList
                cards={cards}
              />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export {OfferScreen};
export default connector(OfferScreen);
