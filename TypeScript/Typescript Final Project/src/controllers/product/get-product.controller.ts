import { NextFunction, Request, Response } from 'express';
import getProductService from '../../services/product/get-product.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const getProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = req.product;
    /* const getProduct = await getProductService(id); */
    new SuccessApiResponse(
      200,
      'Product Retrieve Successful',
      data
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default getProductController;
