import { Request, Response, Router } from 'express';
// import KcAdminClient from '@keycloak/keycloak-admin-client';


const KcAdminClient = await import('@keycloak/keycloak-admin-client');

const users = Router();

users.get('/', async (req: Request, res: Response) => {
  const kcAdminClient = new KcAdminClient({
    baseUrl: 'https://127.0.0.1:8443',
    realmName: 'my-realm',
  });

  const credentials = {
    grantType: 'client_credentials' as const,
    clientId: 'user-manage-client',
    clientSecret: 'YsRafk7Zmko7wrCiA2a05KPyEJD9P9xg',
  };

  await kcAdminClient.auth(credentials);

  const users = await kcAdminClient.users.find();

  res.json(users);
});

export default users;
