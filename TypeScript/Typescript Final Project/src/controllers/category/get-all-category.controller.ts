import { NextFunction, Request, Response } from 'express';
import getAllCategoriesService from '../../services/category/get-all-category.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const getAllCategoriesController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await getAllCategoriesService();
    new SuccessApiResponse(
      200,
      'Retrieve All Categories Successful',
      data
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default getAllCategoriesController;
