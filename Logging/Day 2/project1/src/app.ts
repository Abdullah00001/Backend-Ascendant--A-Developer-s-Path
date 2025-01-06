import express, { Request, Response } from "express";
import morgan from "morgan";
import logger from "./configs/winston.configs.js";

const app = express();
const morganConfig =
  '":method :url HTTP/:http-version" :status :res[content-length] :response-time ms';

app.use(express.json());
app.use(
  morgan(morganConfig, {
    stream: {
      write: (message) => {
        const parts = message.match(/"([^"]+)" (\d+) (\d+|-) ([\d.]+ ms)/); // Regex to match the structured log
        if (parts) {
          const logObject = {
            method: parts[1].split(" ")[0],
            url: parts[1].split(" ")[1],
            status: parts[2],
            res: parts[3] === "-" ? "0" : parts[3],
            responseTime: parts[4],
          };
          logger.info(
            `Method: ${logObject.method}, URL: ${logObject.url}, Status: ${logObject.status}, Res: ${logObject.res}, Response Time: ${logObject.responseTime}`
          );
        }
      },
    },
  })
);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "server is healthy" });
  //   res.status(200).send("hello world");
  return;
});

export { app };
