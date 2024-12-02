import { NextFunction, Request, Response } from 'express';

const ServerErrorMiddleware = <T>(
  err: T,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (res.headersSent) {
    return next(err);
  }
  res.status
  return;
};

export default ServerErrorMiddleware;
