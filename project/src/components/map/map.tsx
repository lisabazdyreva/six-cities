import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';

import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {offers} from '../../mocks/offers';
import {Icons, IconsParams} from '../../const';
import {Offers} from '../../types/offer';


const defaultCustomIcon = new Icon({
  iconUrl: Icons.URL_DEFAULT_ICON,
  iconSize: IconsParams.ICON_SIZE,
  iconAnchor: IconsParams.ICON_ANCHOR,
});

// const currentCustomIcon = new Icon({
//   iconUrl: Icons.URL_CURRENT_ICON,
//   iconSize: IconsParams.ICON_SIZE,
//   iconAnchor: IconsParams.ICON_ANCHOR,
// });

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

        marker.setIcon(defaultCustomIcon).addTo(map);

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
