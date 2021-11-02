import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import type {Reviews} from '../../types/review';
import type {State} from '../../types/state';

import Icons from '../icons/icons';
import Header from '../header/header';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import NearbyCardsList from '../nearby-cards-list/nearby-cards-list';

import {setActiveId} from '../../store/actions/action';

import {MapStylesProperties} from '../../const';

import {fetchCurrentOffer, fetchNearbyOffers} from '../../store/actions/api-actions';
import {ThunkAppDispatch} from '../../types/action';


function mapStateToProps ({currentOffer, nearbyOffers}: State) {
  return ({
    currentOffer,
    nearbyData: nearbyOffers,
  });
}

function mapDispatchToProps (dispatch: ThunkAppDispatch) {
  return({
    getData(id: number) {
      dispatch(fetchCurrentOffer(id));
      dispatch(fetchNearbyOffers(id));
    },
    onSetId(id: number) {
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


function OfferScreen({reviews, currentOffer, nearbyData, getData, onSetId}: ConnectedComponentProps): JSX.Element {
  const params: {id: string} = useParams();
  const { id } = params;
  const idNum = Number(id);

  onSetId(idNum);

  const cardsForMap = [currentOffer, ...nearbyData];


  useEffect(() => {
    getData(idNum);
  }, [idNum]);
  return (
    <>
      <Icons />
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <OfferCard
              reviews={reviews}
              card={currentOffer}
            />
            <section className="property__map map">
              <Map cards={cardsForMap} styles={MapStylesProperties.OfferPage}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearbyCardsList
                cards={nearbyData}
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
