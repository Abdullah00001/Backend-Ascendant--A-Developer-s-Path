import { NextFunction, Request, Response } from "express";

const serverErrorMiddleware = (req: Request, res: Response) => {
  res.status(500).json({ status: "error", message: "Internal Server Error" });
  return;
};

export default serverErrorMiddleware;
