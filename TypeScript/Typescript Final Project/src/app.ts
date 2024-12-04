import express, { Express } from 'express';
import ServerErrorMiddleware from './middlewares/server-error.middleware.js';
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
import CategoryRoutes from './routes/category.routes.js';

app.use(baseURL, BrandRoutes);
app.use(baseURL, CategoryRoutes);

/* ======================================
-------------- ERROR HANDLER ------------
========================================*/

app.use(ServerErrorMiddleware);

export { app };
