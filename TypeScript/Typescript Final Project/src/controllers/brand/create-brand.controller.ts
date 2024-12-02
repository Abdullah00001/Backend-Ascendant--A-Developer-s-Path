import { NextFunction, Request, Response } from 'express';
import BrandInterface from '../../interfaces/brand/model-interfcaes/brand.interface.js';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';
import createBrandService from '../../services/brand/create-brand.service.js';

const createBrandController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const brandData: BrandInterface = req.body;
    const resData = await createBrandService(brandData);
    new SuccessApiResponse(
      201,
      'Brand Created Successful',
      resData
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default createBrandController;
