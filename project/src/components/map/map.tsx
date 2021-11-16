import {useRef, useEffect, CSSProperties} from 'react';
import {useSelector} from 'react-redux';
import {Icon, LayerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import type {Offers} from '../../types/offer';

import useMap from '../../hooks/useMap';

import {defaultIcon, currentIcon} from '../../const';
import {getId} from '../../store/app-process/selectors';


let prevActiveCity: string | undefined;

const defaultCustomIcon = new Icon(defaultIcon);
const currentCustomIcon = new Icon(currentIcon);

type MapProps = {
  cards: Offers;
  styles?: CSSProperties;
  activeCity? : string;
};


function Map({cards, activeCity, styles}: MapProps): JSX.Element {
  const activeId = useSelector(getId);

  const [locationCard] = cards;
  const location = locationCard.city.location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    const layerIconsGroup = new LayerGroup();
    if (map) {
      cards.forEach((card) => {
        const marker = new Marker({
          lat: card.location.latitude,
          lng: card.location.longitude,
        });

        marker.setIcon(defaultCustomIcon);
        if (card.id === activeId) {
          marker.setIcon(currentCustomIcon);
        }
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
    return () => {layerIconsGroup.clearLayers();};
  }, [map, cards,  activeCity, location, activeId]);

  return (
    <div
      ref={mapRef}
      style={styles}
    />
  );
}

export default Map;
