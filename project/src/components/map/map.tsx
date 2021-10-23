import {useRef, useEffect, CSSProperties} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';


import useMap from '../../hooks/useMap';

import {IconsURL, IconsParams} from '../../const';
import {Offers} from '../../types/offer';

import {offers} from '../../mocks/offers';


const defaultCustomIcon = new Icon({
  iconUrl: IconsURL.Default,
  iconSize: IconsParams.IconSize,
  iconAnchor: IconsParams.IconAnchor,
});

const currentCustomIcon = new Icon({
  iconUrl: IconsURL.Current,
  iconSize: IconsParams.IconSize,
  iconAnchor: IconsParams.IconAnchor,
});

type MapProps = {
  cards: Offers,
  styles?: CSSProperties,
};


function Map({cards, styles}: MapProps): JSX.Element {

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
    <div
      ref={mapRef}
      style={styles}
    />
  );
}

export default Map;
