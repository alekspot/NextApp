import { BACKEND_URI } from '../constants/env';
import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { authService } from '../services/auth';
import logger from '../utils/logger';

const api = Router();

api.use(async (req, res, next) => {
  const { AT: accessToken, RT: refreshToken } = req.cookies;

  logger.info(`Запрос к api, refreshToken: ${refreshToken}`);

  if (accessToken) {
    req.headers.authorization = `Bearer ${accessToken}`;
  }

  if (!accessToken && refreshToken) {
    const tokenResponse = await authService.updateToken(refreshToken);
    authService.setTokenCookies(res, tokenResponse);

    // console.log('Обновление токенов');
    req.headers.authorization = `Bearer ${tokenResponse.access_token}`;
  }

  next();
});

api.use(
  createProxyMiddleware({
    target: BACKEND_URI,
    secure: false,
    changeOrigin: true,
  }),
);

export default api;
