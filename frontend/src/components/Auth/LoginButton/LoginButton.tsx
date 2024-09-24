'use client';
import { login } from '@/auth/auth';
import { Button } from '@chakra-ui/react';


export const LoginButton = () => {
  return <Button onClick={() => login()}>Войти</Button>;
};
