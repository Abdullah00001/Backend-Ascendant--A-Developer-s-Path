import { NextFunction, Request, Response } from 'express';
import BrandInterface from '../../interfaces/brand/model-interfcaes/brand.interface.js';
import updateBrandService from '../../services/brand/update-brand.service.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';

const updateBrandController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: string = req.brand?.id;
    const data: BrandInterface = req.body;
    const updatedData = await updateBrandService(id, data);
    new SuccessApiResponse(
      200,
      'Resource Update Successful',
      updatedData
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    next(error);
  }
};

export default updateBrandController;
