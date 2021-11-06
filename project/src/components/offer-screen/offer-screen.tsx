import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import type {State} from '../../types/state';

import Icons from '../icons/icons';
import Header from '../header/header';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import NearbyCardsList from '../nearby-cards-list/nearby-cards-list';

import {setActiveId} from '../../store/actions/action';

import {FetchStatus, MapStylesProperties} from '../../const';

import {fetchCurrentOffer, fetchNearbyOffers} from '../../store/actions/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Spinner from '../spinner/spinner';


function mapStateToProps({currentOffer, fetchStatus, nearbyOffers}: State) {
  return ({
    currentOffer,
    nearbyData: nearbyOffers,
    fetchStatus,
  });
}

function mapDispatchToProps(dispatch: ThunkAppDispatch) {
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

function OfferScreen({currentOffer, nearbyData, getData, onSetId, fetchStatus}: PropsFromRedux): JSX.Element {
  const params: {id: string} = useParams();

  const { id } = params;
  const idNum = Number(id);

  onSetId(idNum);

  const cardsForMap = [currentOffer, ...nearbyData];

  useEffect(() => {
    getData(idNum);
  }, [idNum]);


  switch (fetchStatus) {
    case (FetchStatus.Error):
      return <NotFoundScreen />;

    case (FetchStatus.Trying):
      return <Spinner />;

    default:
      return (
        <>
          <Icons />
          <div className="page">
            <Header />
            <main className="page__main page__main--property">
              <section className="property">
                <OfferCard card={currentOffer} />
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
}

export {OfferScreen};
export default connector(OfferScreen);
