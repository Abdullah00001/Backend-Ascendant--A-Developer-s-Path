import express from "express";

const app = express();

app.use(express.json());

import ProductRoute from "./routes/product.routes.js";

app.use("/api/v1", ProductRoute);

export { app };
