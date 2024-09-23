'use client';

import { useProfile } from '@/providers/AuthProvider';
import styles from './page.module.css';
import { LoginButton } from '@/components/Auth/LoginButton/LoginButton';
import { Logout } from '@/components/Auth/Logout/Logout';
import { MapStateProvider } from '@/providers/MapStateProvider';
import { YMapProvider } from '@/providers/YMapProvider';
import { Map } from '@/components/Map/Map';
import { places } from '@/data/places';

export default function Home() {
  const { isAuth, username } = useProfile();

  console.log({ isAuth });

  if (isAuth === null) {
    return (
      <main className={styles.main}>
        <h1>Загрузка...</h1>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <MapStateProvider>
        <YMapProvider>
          <Map places={places} />
        </YMapProvider>
      </MapStateProvider>
    </main>
  );
}
