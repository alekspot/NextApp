import { Request, Response, Router } from 'express';
import { authService } from '../services/auth';
import { FRONTEND_URI, KEYCLOAK_CLIENT_ID, KEYCLOAK_URL } from '../constants/env';
import logger from '../utils/logger';

const auth = Router();

// Перенаправляет на форму логина keycloak
auth.post('/login', async (req: Request, res: Response) => {
  const state = req.body.state;
  const SCOPE = 'openid email';

  const loginURL = `${KEYCLOAK_URL}/auth?response_type=code&client_id=${KEYCLOAK_CLIENT_ID}&state=${state}&scope=${SCOPE}&redirect_uri=${FRONTEND_URI}`;

  return res.redirect(301, loginURL);
});

// Обменивает code на токены, запись токенов в защищенные куки
auth.post('/token', async (req: Request, res: Response) => {
  const code = req.body.code;

  const tokenResponse = await authService.requestTokens(code);

  authService.setTokenCookies(res, tokenResponse);

  res.json({ message: 'Bearer ' + tokenResponse.access_token });
});

// Обновляет токены через refresh токен
auth.get('/exchange', async (req: Request, res: Response) => {
  const { RT } = req.cookies;

  logger.info('Запрос к api', RT);

  if (RT) {
    const tokenResponse = await authService.updateToken(RT);

    authService.setTokenCookies(res, tokenResponse);

    res.json({ message: 'Bearer ' + tokenResponse.access_token });
  } else {
    res.status(401);
    res.end();
  }
});

// Выход
auth.get('/logout', async (req: Request, res: Response) => {
  const { RT: refresh_token } = req.cookies;

  if (refresh_token) {
    await authService.logout(refresh_token);

    res.clearCookie('AT');
    res.clearCookie('RT');
    res.clearCookie('IT');
  }

  res.json({ message: 'logout' });
});

auth.get('/profile', (req: Request, res: Response) => {
  const { IT } = req.cookies;

  res.json(authService.getProfile(IT));
});

export default auth;
