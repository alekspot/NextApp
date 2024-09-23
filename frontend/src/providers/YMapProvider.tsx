import React, { createContext, useContext, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Script from 'next/script';
import { ReactifiedModule } from '@yandex/ymaps3-types/reactify';

export type ReactifyApi = ReactifiedModule<typeof import('@yandex/ymaps3-types')>;

const apiUrl =
  'https://api-maps.yandex.ru/v3/?apikey=b656256e-27af-48ae-94d0-1b212e6c6f2c&lang=ru_RU';

type MountedMapsContextValue = {
  reactifyApi: ReactifyApi | null;
};

export const MountedMapsContext = createContext<MountedMapsContextValue>({
  reactifyApi: null,
});

export const YMapProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [reactifyApi, setReactifyApi] = useState<ReactifyApi | null>(null);

  const contextValue = useMemo(() => ({ reactifyApi }), [reactifyApi]);

  return (
    <MountedMapsContext.Provider value={contextValue}>
      <Script
        src={apiUrl}
        onLoad={async () => {
          const [ymaps3React] = await Promise.all([
            ymaps3.import('@yandex/ymaps3-reactify'),
            ymaps3.ready,
          ]);

          const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);

          console.log(reactify.module(ymaps3));
          setReactifyApi(reactify.module(ymaps3));
        }}
      />
      {children}
    </MountedMapsContext.Provider>
  );
};

export const useMap = () => useContext(MountedMapsContext);
