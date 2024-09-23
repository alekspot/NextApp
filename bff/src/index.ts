import express from 'express';
import bodyParser from 'body-parser';
import https from 'https';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authController from './controllers/auth';
import apiController from './controllers/api';
import config from './config';
import morganMiddleware from './middlewares/morgan.middleware';
// import adminController from './controllers/users';

const app = express();

app.enable('trust proxy');
app.disable('x-powered-by');

app.use(morganMiddleware);
app.use(cors(config.cors));
app.use(cookieParser());
app.use('/api', apiController);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', authController);

// app.use('/users', adminController);

const server = https.createServer(config.ssl, app);

server.listen(config.port, () => {
  console.log(`> Ready on https://localhost:` + config.port);
});
