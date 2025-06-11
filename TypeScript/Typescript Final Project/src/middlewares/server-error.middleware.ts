import { NextFunction, Request, Response } from 'express';
import ServerErrorUtility from '../utils/api-response/server-error.utils.js';

const ServerErrorMiddleware = <T>(
  err: T,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  new ServerErrorUtility(err).serverError(res);
  return;
};

export default ServerErrorMiddleware;
