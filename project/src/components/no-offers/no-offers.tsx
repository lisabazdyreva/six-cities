import {FetchStatus, ERROR_NO_OFFERS_MESSAGE, Locations} from '../../const';
import {getNoOffersMessage} from '../../utils/utils';


type NoOffersProps = {
  city: Locations;
  fetchStatus: FetchStatus;
};


function NoOffers({city, fetchStatus}: NoOffersProps): JSX.Element {
  const isError = fetchStatus === FetchStatus.Error;

  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">
              {isError ? ERROR_NO_OFFERS_MESSAGE: getNoOffersMessage(city)}
            </p>
          </div>
        </section>
        <div className="cities__right-section"/>
      </div>
    </div>
  );
}

export default NoOffers;
