import { NextFunction, Request, Response } from 'express';
import getProductById from '../../repositories/product/get-product-by-id.repository.js';
import ErrorApiResponse from '../../utils/api-response/base-error-api-response.utils.js';

const findProductByIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const isFound = await getProductById(id);
    if (!isFound) {
      new ErrorApiResponse(
        404,
        'Not Found',
        `Product With This ID : ${id} Not Found`,
        'Please Request With Valid Product ID'
      ).sendErrorResponse(res);
      return;
    }
    req.product = isFound;
    next();
  } catch (error) {
    next(error);
  }
};

export default findProductByIdMiddleware;
