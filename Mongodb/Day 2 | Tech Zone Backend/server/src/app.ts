import express from "express";
import serverErrorMiddleware from "./middlewares/serverError.middlewares.js";

const app = express();
const baseUrl = "/api/v1";

app.use(express.json());

import CategoryRoute from "./routes/category.routes.js";
import SubCategoryRoute from "./routes/subcategory.routes.js";

app.use(baseUrl, CategoryRoute);
app.use(baseUrl, SubCategoryRoute);
app.use(serverErrorMiddleware);

export { app };
