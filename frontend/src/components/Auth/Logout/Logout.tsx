'use client';
import { logout } from '@/auth/auth';
import { useLogoutAction } from '@/providers/AuthProvider';
import { Button } from '@chakra-ui/react';

export const Logout = () => {
  const logoutAction = useLogoutAction();

  const handleClick = () => {
    logoutAction();
    logout();
  };

  return <Button onClick={handleClick}>Выйти</Button>;
};
