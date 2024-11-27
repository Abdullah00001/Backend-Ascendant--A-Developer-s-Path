import express, { Express } from 'express';
import { baseURL } from './constants.js';

const app: Express = express();

/* =====================================
--------CONFIGURATION MIDDLEWARES-------
=======================================*/

app.use(express.json());

/* =====================================
-------------------ROUTES---------------
=======================================*/

import BrandRoutes from './routes/brand.route.js';

app.use(`${baseURL}`, BrandRoutes);

export { app };
