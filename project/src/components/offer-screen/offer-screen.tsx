import {useParams} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import type {Reviews} from '../../types/review';
import type {State} from '../../types/state';
import type {Actions} from '../../types/action';

import Icons from '../icons/icons';
import Header from '../header/header';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import NearbyCardsList from '../nearby-cards-list/nearby-cards-list';

import {setActiveId} from '../../store/actions/action';

import {MapStylesProperties} from '../../const';


function mapStateToProps ({offers}: State) {
  return ({
    offers,
  });
}

function mapDispatchToProps (dispatch: Dispatch<Actions>) {
  return({
    onCardOpen(id: number) {
      dispatch(setActiveId(id));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type OfferScreenType = {
  reviews: Reviews;
};
type ConnectedComponentProps = PropsFromRedux & OfferScreenType;


function OfferScreen({offers, reviews, onCardOpen}: ConnectedComponentProps): JSX.Element {
  const params: {id: string} = useParams();
  const { id } = params;

  const [card] = offers.filter((offer) => offer.id === +id);
  onCardOpen(card.id);
  const nearbyOffers = offers.filter((offer) => offer.id !== +card.id);
  const cardsForList = (nearbyOffers.length > 3) ? nearbyOffers.slice(0, 3) : nearbyOffers.slice();
  const cardsForMap = [card, ...cardsForList];

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
              <Map cards={cardsForMap} styles={MapStylesProperties.OfferPage}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearbyCardsList
                cards={cardsForList}
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
