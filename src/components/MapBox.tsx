'use client';

import ReactMapboxGl, { Layer, Feature, Marker  } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY,
});


function MapBox() {
    const latitude = 32.39883438204155;
    const longitude = -90.13968666932156;
    const centerMapCords = [longitude, latitude];

  return (
    <Map
      // center={centerMapCords}
      style='mapbox://styles/mapbox/streets-v9'
      containerStyle={{
        height: '800px',
        width: '1400px',
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-90.13968666932156, 32.39883438204155]}>
          {/* <Marker layout={{ 'icon-image': 'marker-15' }} /> */}
        </Feature>
      </Layer>
    </Map>
  );
}

export default MapBox;
