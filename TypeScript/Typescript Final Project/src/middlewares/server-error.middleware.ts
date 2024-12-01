import { Request, Response } from 'express';
import ServerErrorUtility from '../utils/api-response/server-error.utils.js';

const ServerErrorMiddleware = <T>(
  err: T,
  req: Request,
  res: Response
): void => {
  new ServerErrorUtility(err).serverError(req, res);
  return;
};

export default ServerErrorMiddleware;
