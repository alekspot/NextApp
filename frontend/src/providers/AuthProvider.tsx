'use client';

import { authApi } from '@/api/auth';
import { checkAuth } from '@/auth/auth';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<{
  username: string | null;
  isAuth: boolean | null;
  logoutAction: () => void;
}>({
  username: null,
  isAuth: null,
  logoutAction: () => null,
});

export const useProfile = () => useContext(AuthContext);
export const useIsUserPage = () => {
  const { username } = useParams();
  const profile = useProfile();

  return { isUserPage: profile ? profile.username === username : false };
};

export const useLogoutAction = () => useContext(AuthContext).logoutAction;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [profile, setProfile] = useState<{ username: string | null }>({
    username: null,
  });
  const [isAuth, setAuth] = useState<boolean | null>(null);

  const logoutAction = () => {
    setProfile({ username: null });
    setAuth(false);
  };

  useEffect(() => {
    checkAuth().then(({ isAuth }) => {
      if (!isAuth) {
        setAuth(false);

        return;
      }

      setAuth(true);

      authApi.profile().then(({ username }) => {
        setProfile({ username });
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ username: profile.username, isAuth, logoutAction }}>
      {children}
    </AuthContext.Provider>
  );
};
