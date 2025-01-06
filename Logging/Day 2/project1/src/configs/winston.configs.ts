import { createLogger, format, transports } from "winston";

const { printf, timestamp, combine, json, colorize } = format;

const logFormate = printf(({ timestamp, level, message }) => {
  return `[${timestamp}] [${level}] : ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    json(),
    colorize(),
    logFormate
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      level: "info",
      filename: "./logs/info.log",
      format: combine(json()),
    }),
  ],
});

export default logger;
