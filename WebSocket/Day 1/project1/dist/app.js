import express from "express";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send(`<h1>Hello World</h1> <h6>Hello World</h6>`);
});
export default app;
