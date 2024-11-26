import { NextFunction, Request, Response } from 'express';
import { apiResponseStatusType } from '../../constants.js';
import getBrandByIdRepository from '../../repositories/brands/getBrandById.repositories.js';
import { isValidObjectId } from 'mongoose';

const isBrandIdExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: string = req.params.id;
    if (!isValidObjectId(id)) {
      res.status(400).json({
        type: apiResponseStatusType.bad_request,
        status: 400,
        message: 'Invalid ObjectId',
      });
      return;
    }
    const isExist = await getBrandByIdRepository(id);
    if (!isExist) {
      res.status(404).json({
        type: apiResponseStatusType.not_found,
        status: 404,
        message: `With The Id : ${id} We Havent Found Any Resource`,
      });
      return;
    }
    req.brand = isExist;
    next();
  } catch (error) {
    res.status(500).json({
      type: apiResponseStatusType.server_error,
      status: 500,
      message: 'Internal Server Error',
    });
    return;
  }
};

export default isBrandIdExistMiddleware;
