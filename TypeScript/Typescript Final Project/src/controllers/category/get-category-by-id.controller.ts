import { NextFunction, Request, Response } from 'express';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const getCategoryByIdController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.category;
    new SuccessApiResponse(
      200,
      'Category Retrieve Successful',
      data
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default getCategoryByIdController;
