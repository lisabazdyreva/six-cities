import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';

import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {offers} from '../../mocks/offers';
import {IconsURL, IconsParams} from '../../const';
import {Offers} from '../../types/offer';


const defaultCustomIcon = new Icon({
  iconUrl: IconsURL.Default,
  iconSize: IconsParams.ICON_SIZE,
  iconAnchor: IconsParams.ICON_ANCHOR,
});

const currentCustomIcon = new Icon({
  iconUrl: IconsURL.Current,
  iconSize: IconsParams.ICON_SIZE,
  iconAnchor: IconsParams.ICON_ANCHOR,
});

type MapProps = {
  cards: Offers,
};


function Map({cards}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);

  useEffect(() => {
    if (map) {
      cards.forEach((card) => {
        const marker = new Marker({
          lat: card.location.latitude,
          lng: card.location.longitude,
        });

        if (card.title === 'Beautiful & luxurious apartment at great location') {
          marker.setIcon(currentCustomIcon).addTo(map);
        } else {
          marker.setIcon(defaultCustomIcon).addTo(map);
        } // временно, чтобы не ругался за неиспользование currentCustomIcon


      });
    }
  }, [map, cards]);


  return (
    <section
      className="cities__map map"
      ref={mapRef}
    />
  );
}

export default Map;
