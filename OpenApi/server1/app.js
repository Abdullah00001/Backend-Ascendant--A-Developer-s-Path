import express from "express";
import YAML from "yamljs";
import swagerUi from "swagger-ui-express";

const app = express();
const swagerDocument = YAML.load("./api-docs/Documentation2.yaml");

app.use(express.json());

app.use("/api-docs", swagerUi.serve, swagerUi.setup(swagerDocument));

export default app;
