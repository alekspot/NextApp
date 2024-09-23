'use client';

import styles from './Header.module.scss';
import { useProfile } from '@/providers/AuthProvider';
import { Logout } from '../Auth/Logout/Logout';
import { LoginButton } from '../Auth/LoginButton/LoginButton';

export const Header = () => {
  const { isAuth, username } = useProfile();

  return (
    <div className={styles.header}>
      <div>{username}</div>
      {isAuth ? <Logout /> : <LoginButton />}
    </div>
  );
};
