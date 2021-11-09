import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Icons from '../icons/icons';
import Header from '../header/header';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import NearbyCardsList from '../nearby-cards-list/nearby-cards-list';

import {setActiveId} from '../../store/actions/action';

import {FetchStatus, MapStylesProperties} from '../../const';

import {fetchCurrentOffer, fetchNearbyOffers} from '../../store/actions/api-actions';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Spinner from '../spinner/spinner';
import {
  getCurrentOffer,
  getFetchStatusNearbyOffers,
  getFetchStatusOffers,
  getNearbyOffers
} from '../../store/app-data/selectors';


function OfferScreen(): JSX.Element {

  const currentOffer = useSelector(getCurrentOffer);
  const nearbyData = useSelector(getNearbyOffers);
  const fetchStatusOffer = useSelector(getFetchStatusOffers);
  const fetchStatusNearbyOffer = useSelector(getFetchStatusNearbyOffers);

  const dispatch = useDispatch();

  const params: {id: string} = useParams();

  const { id } = params;
  const idNum = Number(id);

  dispatch(setActiveId(idNum));

  const cardsForMap = [currentOffer, ...nearbyData];

  useEffect(() => {
    dispatch(fetchCurrentOffer(idNum));
    dispatch(fetchNearbyOffers(idNum));
  }, [idNum]);


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
                <OfferCard card={currentOffer} />
                <section className="property__map map">
                  <Map cards={cardsForMap} styles={MapStylesProperties.OfferPage}/>
                </section>
              </section>
              <div className="container">
                <section className="near-places places">
                  <h2 className="near-places__title">Other places in the neighbourhood</h2>
                  {fetchStatusNearbyOffer === FetchStatus.Error ? 'Nothing foung. Try later.' : <NearbyCardsList cards={nearbyData}/>}
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
