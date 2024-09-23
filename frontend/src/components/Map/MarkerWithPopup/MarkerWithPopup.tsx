'use client';

import { YMap } from '@yandex/ymaps3-types';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import type { Place } from '../../../types/place';
import getPopupPosition from '../helpers/get-popup-position';
import { ReactifyApi } from '@/providers/YMapProvider';
import styles from './MarkerWithPopup.module.scss';

interface MarkerWithPopupProps {
  mapRef: React.MutableRefObject<(YMap & { container: HTMLElement }) | null>;
  place: Place;
  selected: boolean;
  reactifyApi: ReactifyApi;
  selectPlace: (id: string | null) => void;
}

const MarkerWithPopup = ({
  mapRef,
  place,
  selected,
  reactifyApi,
  selectPlace,
}: MarkerWithPopupProps) => {
  const markerRef = useRef(null);
  const popupRef = useRef(null);

  const [position, setPosition] = useState<React.CSSProperties>({
    visibility: 'visible',
    opacity: '1',
  });

  const updatePositionAndShow = useCallback(() => {
    const map = mapRef?.current?.container;
    const marker = markerRef?.current;
    const popup = popupRef?.current;

    if (!map || !marker || !popup) return;

    setPosition({
      ...getPopupPosition(map, popup, marker),
      visibility: 'visible',
      opacity: '1',
    });
  }, [mapRef]);

  useEffect(() => {
    if (selected) updatePositionAndShow();
  }, [selected, updatePositionAndShow]);

  const { YMapMarker } = reactifyApi;

  return (
    <YMapMarker
      key={place.id}
      zIndex={selected ? 10 : 1}
      coordinates={[place.longitude, place.latitude]}
    >
      <div
        onClick={() => {
          selectPlace(place.id);
        }}
        // onMouseEnter={() => selectPlace(place.id)}
        // onMouseLeave={() => selectPlace(null)}
        className={styles.marker}
      >
        {place.label}
        {/* <div ref={markerRef} className={styles.marker}>
          <div className={styles.bg}>{place.label}</div>
        </div> */}
        {selected ? (
          <div ref={popupRef} className={styles.popup} style={{ ...position }}>
            <div className="bg-slate-700 text-slate-300 min-w-[320px] p-4 rounded-lg text-sm shadow w-full h-full">
              <div className="text-lg text-white">{place.label}</div>
              <div className="text-sm">{place.text}</div>
            </div>
          </div>
        ) : null}
      </div>
    </YMapMarker>
  );
};

export default memo(MarkerWithPopup);
