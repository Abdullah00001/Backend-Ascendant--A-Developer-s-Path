import { NextFunction, Request, Response } from 'express';
import isBrandExistQueryInterface from '../../interfaces/brand/queries-interfaces/is-brand-exist-query.interface.js';
import ErrorApiResponse from '../../utils/api-response/base-error-api-response.utils.js';
import isBrandExistRepository from '../../repositories/brand/is-brand-exist.repository.js';

const isBrandExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const query: isBrandExistQueryInterface = {
      brandName: req.body.brandName,
      brandEmail: req.body.brandEmail,
    };
    const isExist = await isBrandExistRepository(query);
    if (isExist) {
      new ErrorApiResponse(
        409,
        'Already Exist',
        'Brand With This Email or Name Already Exist',
        'Please Try With Unique Name Or Email'
      ).sendErrorResponse(res);
      return;
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default isBrandExistMiddleware;
