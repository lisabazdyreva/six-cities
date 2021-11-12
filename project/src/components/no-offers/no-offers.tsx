import {FetchStatus} from '../../const';

type NoOffersProps = {
  city: string,
  fetchStatus: FetchStatus,
};


function NoOffers({city, fetchStatus}: NoOffersProps): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">
              { fetchStatus === FetchStatus.Error ?
                'Sorry, server is not respond' : // загуглить на английском
                `We could not find any property available at the moment in ${city}`}
            </p>
          </div>
        </section>
        <div className="cities__right-section"/>
      </div>
    </div>
  );
}

export default NoOffers;
