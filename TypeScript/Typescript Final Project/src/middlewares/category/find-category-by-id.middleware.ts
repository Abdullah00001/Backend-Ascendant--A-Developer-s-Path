import { NextFunction, Request, Response } from 'express';
import findCategoryByIdRepository from '../../repositories/category/find-category-by-id.repository.js';
import ErrorApiResponse from '../../utils/api-response/base-error-api-response.utils.js';

const findCategoryByIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await findCategoryByIdRepository(id);
    if (!data) {
      new ErrorApiResponse(
        404,
        'Not Found',
        `Category With This Id : ${id} Not Found`,
        'Please Give Valid Id'
      ).sendErrorResponse(res);
      return;
    }
    req.category = data;
    next();
  } catch (error) {
    next(error);
  }
};

export default findCategoryByIdMiddleware;
