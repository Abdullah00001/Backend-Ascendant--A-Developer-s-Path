import { NextFunction, Request, Response } from 'express';
import deleteBrandService from '../../services/brand/delete-brand.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const deleteBrandController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.brand?.id;
    await deleteBrandService(id);
    new SuccessApiResponse(
      200,
      'Resource Deleted Successful'
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default deleteBrandController;
