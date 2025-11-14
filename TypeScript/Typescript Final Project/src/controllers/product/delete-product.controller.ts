import { NextFunction, Request, Response } from 'express';
import deleteProductService from '../../services/product/delete-product.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const deleteProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.product?.id;
    await deleteProductService(id);
    new SuccessApiResponse(
      200,
      'Product Deleted Successful'
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default deleteProductController;
