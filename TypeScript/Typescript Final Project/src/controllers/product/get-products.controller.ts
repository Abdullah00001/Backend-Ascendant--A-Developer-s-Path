import { NextFunction, Request, Response } from 'express';
import getProductsService from '../../services/product/get-products.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const getProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await getProductsService();
    new SuccessApiResponse(
      200,
      'Retrieve All Products Successful',
      data
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default getProductsController;
