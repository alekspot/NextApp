import { FRONTEND_URI, PORT, SSL_SERT_NAME, SSL_SERT_PASSWORD } from './constants/env';
import { CorsOptions } from 'cors';
import fs from 'fs';

export default {
  cors: {
    origin: [FRONTEND_URI],
    // preflightContinue: true,
    credentials: true,
    // allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    methods: '*',
  } as CorsOptions,
  ssl: {
    pfx: fs.readFileSync(`./ssl/${SSL_SERT_NAME}`),
    passphrase: SSL_SERT_PASSWORD,
  },
  port: PORT,
};
