import { NextFunction, Request, Response } from 'express';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const getBrandByIdController = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const brand = req.brand;
    new SuccessApiResponse(
      200,
      'Resource Retrieve Successful',
      brand
    ).sendSuccessResponse(res);
  } catch (error) {
    next(error);
  }
};

export default getBrandByIdController;
