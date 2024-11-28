import express, { Express } from 'express';

const app: Express = express();
/* ======================================
------------ SETUP MIDDLEWARES ----------
========================================*/

app.use(express.json());

/* ======================================
-------------- SETUP ROUTES -------------
========================================*/

export { app };
