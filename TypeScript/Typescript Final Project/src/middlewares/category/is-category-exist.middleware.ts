import { NextFunction, Request, Response } from 'express';
import isCategoryExistRepository from '../../repositories/category/is-category-exist.repository.js';
import ErrorApiResponse from '../../utils/api-response/base-error-api-response.utils.js';

const isCategoryExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { categoryName } = req.body;
    const isCategoryExist = await isCategoryExistRepository(categoryName);
    if (isCategoryExist)
      new ErrorApiResponse(
        409,
        'Already Exist',
        `Category With This Name : ${categoryName} Already Exist`,
        'Please Try Another Name'
      ).sendErrorResponse(res);
    next();
  } catch (error) {
    next(error);
  }
};

export default isCategoryExistMiddleware;