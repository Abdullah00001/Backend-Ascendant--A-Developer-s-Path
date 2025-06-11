import { NextFunction, Request, Response } from 'express';
import updateCategoryService from '../../services/category/update-category.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const updateCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.category?.id;
    const data = req.body;
    const response = await updateCategoryService(id, data);
    new SuccessApiResponse(
      200,
      'Category Updated Successful',
      response
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default updateCategoryController;
