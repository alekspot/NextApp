'use client';

import { useProfile } from '@/providers/AuthProvider';
import styles from './page.module.css';
import { Map } from '@/components/Map/Map';
import { places } from '@/data/places';

export default function Home() {
  const { isAuth, username } = useProfile();

  if (isAuth === null) {
    return (
      <main className={styles.main}>
        <h1>Загрузка...</h1>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Map places={places} />
    </main>
  );
}
