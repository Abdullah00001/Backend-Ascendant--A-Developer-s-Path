import express from 'express';

const app = express();

app.use(express.json());

import TaskRoutes from './routes/task.route.js';
import { baseUrl } from './constant.js';

app.use(baseUrl, TaskRoutes);

export { app };
