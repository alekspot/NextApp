'use client';

import { YMap } from '@yandex/ymaps3-types';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import type { Place } from '../../../types/place';
import getPopupPosition from '../helpers/get-popup-position';
import { ReactifyApi } from '@/providers/YMapProvider';
import styles from './MarkerWithPopup.module.scss';
import { Image } from '@chakra-ui/react';
import Link from 'next/link';

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
        <Image src="/icons/1.png" alt="" width={30} height={30} />
        {/* {place.label} */}
        <div className="">Категория</div>
        {/* <div ref={markerRef} className={styles.marker}>
          <div className={styles.bg}>{place.label}</div>
        </div> */}
        {selected ? (
          <div ref={popupRef} className={styles.popup} style={{ ...position }}>
            <div>
              <Link href="/event/1">Название</Link>

              <div className="">Организатор</div>
              <div className="">Когда</div>
            </div>
          </div>
        ) : null}
      </div>
    </YMapMarker>
  );
};

export default memo(MarkerWithPopup);
