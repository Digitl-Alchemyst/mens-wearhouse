'use client';

import * as React from 'react';
import {Map} from 'react-map-gl';

function MapGL() {
      const latitude = 32.39883438204155;
      const longitude = -90.13968666932156;
      const centerMapCords = [longitude, latitude];
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      mapLib={import('mapbox-gl')}
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 13.5,
      }}
      style={{ width: 1400, height: 700 }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      
    />
  );
}

export default MapGL