import { NextFunction, Request, Response } from 'express';
import deleteCategoryService from '../../services/category/delete-category.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const deleteCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.category?.id;
    await deleteCategoryService(id);
    new SuccessApiResponse(
      200,
      'Resource Deleted Successful'
    ).sendSuccessResponse(res);
  } catch (error) {
    next(error);
  }
};

export default deleteCategoryController;
