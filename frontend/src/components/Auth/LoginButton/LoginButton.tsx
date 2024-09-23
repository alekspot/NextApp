'use client';

import { login } from '@/auth/auth';
import { Button } from '@/components/Button/Button';

export const LoginButton = () => {
  return <Button onClick={() => login()}>Войти</Button>;
};
