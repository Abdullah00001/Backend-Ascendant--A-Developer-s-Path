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
    if (data.length === 0) {
      new SuccessApiResponse(200, 'No Brands Found', data).sendSuccessResponse(
        res
      );
      return;
    }
    new SuccessApiResponse(
      200,
      'Brands Retrieve Successful',
      data
    ).sendSuccessResponse(res);
    return;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default getBrandsController;
