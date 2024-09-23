import axios from 'axios';
import { User } from '../types/Profile';
const BFF_URI = process.env.NEXT_PUBLIC_BFF_URI;
const CLIENT_ID = 'app'; // название должен совпадать c клиентом из KeyCloak
const SCOPE = 'openid email'; // какие данные хотите получить помимо access token (refresh token, id token) - можно через пробел указывать неск значений
const RESPONSE_TYPE_CODE = 'code'; // для получения authorization code

// !! в каждой версии KeyCloak могут меняться URI - поэтому нужно сверяться с документацией
const KEYCLOAK_URI = process.env.NEXT_PUBLIC_KEYCLOAK_URI; // общий URI KeyCloak

const FRONTEND_URI = process.env.NEXT_PUBLIC_FRONTEND_URI;

const authClient = axios.create({
  baseURL: BFF_URI,
  withCredentials: true,
});

function getCode(state: string) {
  // в каждой версии KeyCloak может изменяться URL - поэтому нужно сверяться с документацией
  let authUrl = KEYCLOAK_URI + '/auth'; // здесь не исп BFF, а обращаемся напрямую

  authUrl += '?response_type=' + RESPONSE_TYPE_CODE; // указываем auth server, что хотим получить auth code
  authUrl += '&client_id=' + CLIENT_ID; // берем из auth server
  authUrl += '&state=' + state; // auth server сохранит это значение себе и отправит в след. запросе (вместе с access token) и клиент сможет убедиться, что ответ пришел именно на его запрос
  authUrl += '&scope=' + SCOPE; // какие данные хотите получить от auth server, помимо access token
  authUrl += '&redirect_uri=' + FRONTEND_URI; // куда auth server будет отправлять ответ

  window.open(authUrl, '_self'); // открываем в этом же окне (self) окно авторизации KeyCloak
}

const token = (code: string) => {
  return authClient.post(
    '/auth/token',
    { code },
    {
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
};

const update = () => {
  return authClient.get('/auth/exchange');
};

const logout = () => {
  return authClient.get('/auth/logout');
};

const profile = (): Promise<User> => {
  return authClient.get('/auth/profile').then((res) => res.data);
};

export const authApi = {
  token,
  getCode,
  update,
  logout,
  profile,
};
