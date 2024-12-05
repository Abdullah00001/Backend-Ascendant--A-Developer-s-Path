import { NextFunction, Request, Response } from 'express';
import createProductService from '../../services/product/create-product.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = req.body;
    const response = await createProductService(data);
    new SuccessApiResponse(
      201,
      'New Product Created',
      response
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default createProductController;
