import { generateState } from '../helpers/auth';
import { authApi } from '../api/auth';

const STATE_KEY = 'ST';
const USE_REFRESH_KEY = 'USE_RT';

export const checkAuth = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const code = urlParams.get('code');
  const state = urlParams.get('state');

  if (!code) {
    const refreshTokenCookieExists = localStorage.getItem(USE_REFRESH_KEY);

    if (refreshTokenCookieExists) {
      return authApi
        .update()
        .then(() => ({ isAuth: true }))
        .catch(() => {
          logout();

          return { isAuth: false };
        });
    } else {
      console.log('Войдите в систему');

      return Promise.resolve({ isAuth: false });
    }
  }

  if (code) {
    window.history.pushState({}, '', document.location.href.split('?')[0]);

    const originalState = localStorage.getItem(STATE_KEY);

    if (state === originalState) {
      localStorage.removeItem(STATE_KEY);

      return authApi
        .token(code)
        .then(() => {
          localStorage.setItem(USE_REFRESH_KEY, 'true');

          return { isAuth: true };
        })
        .catch(() => {
          console.error('Произошла ошибка во время получения токенов');

          return { isAuth: false };
        });
    } else {
      console.log('Войдите в систему');

      return Promise.resolve({ isAuth: false });
    }
  }

  return Promise.resolve({ isAuth: false });
};

export const login = () => {
  const state = generateState(30);

  localStorage.setItem(STATE_KEY, state);

  authApi.getCode(state);
};

export const logout = () => {
  localStorage.removeItem(USE_REFRESH_KEY);
  localStorage.removeItem(STATE_KEY);

  return authApi.logout();
};
