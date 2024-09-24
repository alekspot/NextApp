'use client';

import styles from './Header.module.scss';
import { useProfile } from '@/providers/AuthProvider';
import { Logout } from '../Auth/Logout/Logout';
import { LoginButton } from '../Auth/LoginButton/LoginButton';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

export const Header = () => {
  const { isAuth, username } = useProfile();

  return (
    <div className={styles.header}>
      <div>Меню</div>
      <div className={styles.nav}>
        <div>{username}</div>
        <Link href="/">Главная</Link>
        <Link href="/profile">Профиль</Link>
        <Link href="/about">О проекте</Link>
       
      </div>
      {isAuth ? <Logout /> : <LoginButton />}
    </div>
  );
};
