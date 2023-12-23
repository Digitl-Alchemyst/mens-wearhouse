/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function GoogleMap() {

  const latitude = 32.39883438204155;
  const longitude = -90.13968666932156;
  const centerMapCords = [longitude, latitude];

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOLE_MAPS_API_KEY,
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

      const center = {
        lat: latitude,
        lng: longitude,
      };

      const mapOptions: google.maps.MapOptions = {
        center: center,
        zoom: 17,
        mapId: 'STORE_LOCATIONS'
      }

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: center,
      })
      
    };

    initMap();
  }, []);

  return <div className='h-[800px] w-[1400px]' ref={mapRef} />


}

export default GoogleMap;
