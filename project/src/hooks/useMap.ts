import {useState, useEffect, MutableRefObject} from 'react';

import type {Location} from '../types/offer';

import {Map, TileLayer} from 'leaflet';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, location: Location): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by ' +
            '<a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
        },
      );

      instance.addLayer(layer);
      setMap(instance);
    }
  }, [mapRef, map, location]);
  return map;
}

export default useMap;
