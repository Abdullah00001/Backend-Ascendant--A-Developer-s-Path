import { NextFunction, Request, Response } from 'express';
import SuccessApiResponse from '../../utils/api-response/success-api-response.utils.js';
import getBrandsService from '../../services/brand/get-brands.service.js';

const getBrandsController = async (
  rq: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await getBrandsService();
    new SuccessApiResponse(
      200,
      'Brands Retrieve Successful',
      data
    ).sendSuccessResponse(res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default getBrandsController;
