import { TokenResponse, UserProfile } from '../types/auth';
import { CookieOptions, Response } from 'express';
import axios from 'axios';
import {
  FRONTEND_URI,
  KEYCLOAK_CLIENT_ID,
  KEYCLOAK_CLIENT_SECRET,
  KEYCLOAK_URL,
} from '../constants/env';

const keycloakApi = axios.create({
  baseURL: KEYCLOAK_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

function parseJwt(token: string) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

const setTokenCookies = (res: Response, tokenRes: TokenResponse) => {
  const { access_token, refresh_token, expires_in, id_token, refresh_expires_in } =
    tokenRes;

  const secureCookieOptions: CookieOptions = {
    sameSite: 'strict',
    httpOnly: true,
    domain: 'localhost',
    secure: true,
    path: '/',
  };

  res.cookie('AT', access_token, {
    ...secureCookieOptions,
    maxAge: expires_in * 1000,
  });

  res.cookie('RT', refresh_token, {
    ...secureCookieOptions,
    maxAge: refresh_expires_in * 1000,
  });

  res.cookie('IT', id_token, {
    ...secureCookieOptions,
    maxAge: expires_in * 1000,
  });
};

const clearCookies = () => null;

const updateToken = async (refreshToken: string) => {
  const response = await keycloakApi.post<TokenResponse>('/token', {
    grant_type: 'refresh_token',
    client_id: KEYCLOAK_CLIENT_ID,
    client_secret: KEYCLOAK_CLIENT_SECRET,
    refresh_token: refreshToken,
  });

  return response.data;
};

const getProfile = (idToken: string): UserProfile => {
  const token = parseJwt(idToken);

  return { id: token.sid, username: token.preferred_username };
};

const requestTokens = async (code: string) => {
  const response = await keycloakApi.post<TokenResponse>('/token', {
    grant_type: 'authorization_code',
    client_id: KEYCLOAK_CLIENT_ID,
    client_secret: KEYCLOAK_CLIENT_SECRET,
    code: code,
    redirect_uri: FRONTEND_URI,
  });

  return response.data;
};

const logout = async (refresh_token: string) => {
  await keycloakApi.post<TokenResponse>('/logout', {
    client_id: KEYCLOAK_CLIENT_ID,
    client_secret: KEYCLOAK_CLIENT_SECRET,
    refresh_token,
  });
};

export const authService = {
  setTokenCookies,
  clearCookies,
  getProfile,
  updateToken,
  requestTokens,
  logout,
};
