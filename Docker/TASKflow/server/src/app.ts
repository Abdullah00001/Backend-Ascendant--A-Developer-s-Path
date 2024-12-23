import express from "express";

const app = express();

app.use(express.json());

import PriorityRoutes from "./routes/priority.routes.js";
import { baseUrl } from "./constants.js";
import serverError from "./middlewares/server-error.middlewares.js";

import LabelRoute from "./routes/label.routes.js";

import TaskRoute from "./routes/task.routes.js";

app.use(baseUrl, PriorityRoutes);
app.use(baseUrl, LabelRoute);
app.use(baseUrl, TaskRoute);

app.use(serverError);

export { app };
