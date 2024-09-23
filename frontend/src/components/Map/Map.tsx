'use client';

import { YMap, YMapLocationRequest } from '@yandex/ymaps3-types/imperative/YMap';

import { useDebouncedCallback } from 'use-debounce';
import React, { useMemo, useRef, useState } from 'react';

import { useMap } from '@/providers/YMapProvider';
import { useMapState } from '@/providers/MapStateProvider';
import type { Place } from '@/types/place';
import { getBboxByCoordinates } from './helpers/get-bbox-by-coordinates';
import MarkerWithPopup from './MarkerWithPopup/MarkerWithPopup';

interface MapProps {
  places: Place[];
}

export const Map = ({ places }: MapProps) => {
  const mapRef = useRef<(YMap & { container: HTMLElement }) | null>(null);
  const { selectedPlaceId, setBounds, selectPlace } = useMapState();
  const startBounds = useMemo(
    () => getBboxByCoordinates(places.map((place) => [place.longitude, place.latitude])),
    [places],
  );
  const [location] = useState<YMapLocationRequest>(
    startBounds ? { bounds: startBounds } : { zoom: 0 },
  );

  const setBoundsDebounced = useDebouncedCallback((value) => setBounds(value), 500);
  const { reactifyApi } = useMap();

  if (!reactifyApi) return <div>Загрузка карты</div>;

  const { YMap, YMapListener, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
    reactifyApi;

  return (
    <YMap margin={[20, 20, 20, 20]} location={location} ref={mapRef}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />

      {/* <YMapListener
        onUpdate={({ location }) => {
          setBoundsDebounced(location.bounds);
        }}
      /> */}

      {places.map((place) => (
        <MarkerWithPopup
          key={place.id}
          place={place}
          mapRef={mapRef}
          reactifyApi={reactifyApi}
          selected={selectedPlaceId === place.id}
          selectPlace={selectPlace}
        />
      ))}
    </YMap>
  );
};
