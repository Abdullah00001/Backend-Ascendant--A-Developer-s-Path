import express, { Express, Request, Response } from 'express';
// import ServerErrorMiddleware from './middlewares/server-error.middleware.js';
import { baseURL } from './constants.js';

const app: Express = express();

/* ======================================
------------ SETUP MIDDLEWARES ----------
========================================*/

app.use(express.json());

/* ======================================
-------------- SETUP ROUTES -------------
========================================*/

import BrandRoutes from './routes/brand.routes.js';

app.use(baseURL, BrandRoutes);

/* ======================================
-------------- ERROR HANDLER ------------
========================================*/

/* app.use(ServerErrorMiddleware); */

export { app };
