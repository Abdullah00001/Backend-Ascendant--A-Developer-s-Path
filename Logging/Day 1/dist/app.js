import express from "express";
import logger from "./configs/logger.js";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    logger.info("ROUTE / GET SUCCESS 200");
    res.status(200).send("hello");
});
export { app };
