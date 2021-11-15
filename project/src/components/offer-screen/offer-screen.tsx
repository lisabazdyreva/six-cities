import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Icons from '../icons/icons';
import Header from '../header/header';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import NearbyCardsList from '../nearby-cards-list/nearby-cards-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Spinner from '../spinner/spinner';

import {CardTypes, FetchStatus, MapStylesProperties, ErrorMessage} from '../../const';

import {setActiveId} from '../../store/actions/action';
import {fetchCurrentOffer, fetchNearbyOffers} from '../../store/actions/api-actions/api-actions-offers';

import {getCurrentOffer, getNearbyOffers} from '../../store/app-data/selectors';
import {getFetchStatusNearbyOffers, getFetchStatusOffer} from '../../store/app-status/selectors';


function OfferScreen(): JSX.Element {
  const dispatch = useDispatch();

  const currentOffer = useSelector(getCurrentOffer);
  const nearbyData = useSelector(getNearbyOffers);
  const fetchStatusOffer = useSelector(getFetchStatusOffer);
  const fetchStatusNearbyOffer = useSelector(getFetchStatusNearbyOffers);

  const isFetchNearbyError = fetchStatusNearbyOffer === FetchStatus.Error;

  const params: {id: string} = useParams();

  const {id} = params;
  const idNum = Number(id);

  dispatch(setActiveId(idNum));

  const cardsForMap = [currentOffer, ...nearbyData];

  useEffect(() => {
    dispatch(fetchCurrentOffer(idNum));
    dispatch(fetchNearbyOffers(idNum));
  }, [idNum, dispatch]);


  switch (fetchStatusOffer) {
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
                <OfferCard card={currentOffer} typeCard={CardTypes.Offer}/>
                <section className="property__map map">
                  <Map cards={cardsForMap} styles={MapStylesProperties.OfferPage}/>
                </section>
              </section>
              <div className="container">
                <section className="near-places places">
                  <h2 className="near-places__title">Other places in the neighbourhood</h2>
                  {isFetchNearbyError ? ErrorMessage.Nearby : <NearbyCardsList cards={nearbyData}/>}
                </section>
              </div>
            </main>
          </div>
        </>
      );
  }
}

export {OfferScreen};
export default OfferScreen;
