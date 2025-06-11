import { NextFunction, Request, Response } from 'express';
import updateProductService from '../../services/product/update-product.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const updateProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.product?.id;
    const data = req.body;
    const updatedData = await updateProductService(id, data);
    new SuccessApiResponse(
      200,
      'Product Updated Successful',
      updatedData
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default updateProductController;
