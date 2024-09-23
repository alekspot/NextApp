'use client';

import { logout } from '@/auth/auth';
import { Button } from '@/components/Button/Button';
import { useLogoutAction } from '@/providers/AuthProvider';

export const Logout = () => {
  const logoutAction = useLogoutAction();

  const handleClick = () => {
    logoutAction();
    logout();
  };

  return <Button onClick={handleClick}>Выйти</Button>;
};
