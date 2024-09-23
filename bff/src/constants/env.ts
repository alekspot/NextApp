export const {
  KEYCLOAK_CLIENT_ID = '',
  KEYCLOAK_CLIENT_SECRET = '',
  FRONTEND_URI = '',
  BACKEND_URI = '',
  SSL_SERT_NAME = '',
  SSL_SERT_PASSWORD = '',
  PORT = '',
  KEYCLOAK_HOST_URL = '',
} = process.env;

const { KEYCLOAK_REALM = '' } = process.env;

export const KEYCLOAK_URL = `${KEYCLOAK_HOST_URL}/auth/realms/${KEYCLOAK_REALM}/protocol/openid-connect`;
