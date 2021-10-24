import React, {useRef, useEffect, CSSProperties} from 'react';
import {Icon, LayerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';

import {IconsURL, IconsParams} from '../../const';
import {Offers} from '../../types/offer';


const defaultCustomIcon = new Icon({
  iconUrl: IconsURL.Default,
  iconSize: IconsParams.IconSize,
  iconAnchor: IconsParams.IconAnchor,
});

// const currentCustomIcon = new Icon({
//   iconUrl: IconsURL.Current,
//   iconSize: IconsParams.IconSize,
//   iconAnchor: IconsParams.IconAnchor,
// });

type MapProps = {
  cards: Offers,
  styles?: CSSProperties,
  activeCity? : string,
};

let prevActiveCity: any;

function Map({cards, activeCity, styles}: MapProps): JSX.Element {
  const layerIconsGroup = new LayerGroup();

  const [locationCard] = cards;
  const location = locationCard.location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  function clearMap(): void {
    layerIconsGroup.clearLayers();
  }

  useEffect(() => {
    if (map) {
      cards.forEach((card) => {
        const marker = new Marker({
          lat: card.location.latitude,
          lng: card.location.longitude,
        });

        marker.setIcon(defaultCustomIcon);
        marker.addTo(layerIconsGroup);
      });
      layerIconsGroup.addTo(map);

      if (prevActiveCity !== activeCity) {
        map.flyTo({
          lat: location.latitude,
          lng: location.longitude,
        }, location.zoom);
        prevActiveCity = activeCity;
      }

    }
    return () => clearMap();
  }, [map, cards]);

  return (
    <div
      ref={mapRef}
      style={styles}
    />
  );
}

export default Map;
