import winston, { createLogger } from "winston";
const { printf, timestamp, combine, colorize, json } = winston.format;
const logFormate = printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level}]: ${message}`;
});
const logger = createLogger({
    level: "info",
    format: combine(timestamp(), colorize(), json(), logFormate),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize()),
        }),
        new winston.transports.File({
            level: "info",
            filename: "logs/server.log",
            format: json(),
        }),
        new winston.transports.File({ level: "error", filename: "logs/error.log" }),
    ],
});
export default logger;
