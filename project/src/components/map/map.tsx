import {useRef, useEffect, CSSProperties} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Icon, LayerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import type {Offers} from '../../types/offer';
import type {State} from '../../types/state';

import useMap from '../../hooks/useMap';

import {defaultIcon, currentIcon} from '../../const';


let prevActiveCity: string | undefined;
const defaultCustomIcon = new Icon(defaultIcon);
const currentCustomIcon = new Icon(currentIcon);


function mapStateToProps({id}: State) {
  return ({
    activeId: id,
  });
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type MapProps = {
  cards: Offers,
  styles?: CSSProperties,
  activeCity? : string,
};
type ConnectedComponentProps = PropsFromRedux & MapProps;


function Map({cards, activeCity, styles, activeId}: ConnectedComponentProps): JSX.Element {
  const [locationCard] = cards;
  const location = locationCard.location;

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

export {Map};
export default connector(Map);
