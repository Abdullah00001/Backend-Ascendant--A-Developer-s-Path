import { Request, Response } from 'express';
import { apiResponseStatusType } from '../../constants.js';
import updateBrandService from '../../services/updateBrand.services.js';
import { BrandInterface } from '../../models/brand.models.js';

const updateBrandController = async (req: Request, res: Response) => {
  try {
    const brand = req.brand;
    const requestedData: BrandInterface = req.body;
    const updateBrand = await updateBrandService(brand._id, requestedData);
    if (updateBrand) {
      res.status(200).json({
        type: apiResponseStatusType.success,
        status: 200,
        message: 'Resource Update Successful',
        data: updateBrand,
      });
      return;
    }
  } catch (error) {
    res.status(500).json({
      type: apiResponseStatusType.server_error,
      status: 500,
      message: 'Internal Server Error',
    });
    return;
  }
};

export default updateBrandController;
