import express, { Express } from 'express';
import ServerErrorMiddleware from './middlewares/server-error.middleware.js';

const app: Express = express();
/* ======================================
------------ SETUP MIDDLEWARES ----------
========================================*/

app.use(express.json());

/* ======================================
-------------- SETUP ROUTES -------------
========================================*/

/* ======================================
-------------- ERROR HANDLER ------------
========================================*/

app.use(ServerErrorMiddleware);

export { app };
