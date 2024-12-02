import { NextFunction, Request, Response } from 'express';
import findBrandByIdRepositories from '../../repositories/brand/find-brand-by-id.repositories.js';
import { ObjectId } from 'mongoose';
import ErrorApiResponse from '../../utils/api-response/base-error-api-response.utils.js';

const getBrandByIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id;
    const brand = await findBrandByIdRepositories(id);
    if (brand) {
      req.brand = brand;
      next();
    }
    new ErrorApiResponse(
      404,
      'Resource Not Found',
      `Brand With This Id : ${id} Not found!`,
      'Please Provide A Valid Brand Id'
    ).sendErrorResponse(res);
  } catch (error) {
    next(error);
  }
};
export default getBrandByIdMiddleware;
