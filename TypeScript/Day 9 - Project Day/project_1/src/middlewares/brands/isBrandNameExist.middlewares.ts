import { NextFunction, Request, Response } from 'express';
import { apiResponseStatusType } from '../../constants.js';
import findBrandByName from '../../repositories/brands/findBrandByName.repositories.js';

const isBrandNameExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { brandName } = req.body;
    const brand = await findBrandByName(brandName);
    if (brand) {
      res.status(409).json({
        type: apiResponseStatusType.conflict,
        status: 409,
        message: 'Brand With This Name Already Exist',
      });
      return;
    }
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

export default isBrandNameExist;
