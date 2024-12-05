import { NextFunction, Request, Response } from 'express';
import createCategoryService from '../../services/category/create-category.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const createCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await createCategoryService(req.body);
    new SuccessApiResponse(
      201,
      'New Category Created',
      data
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default createCategoryController;
