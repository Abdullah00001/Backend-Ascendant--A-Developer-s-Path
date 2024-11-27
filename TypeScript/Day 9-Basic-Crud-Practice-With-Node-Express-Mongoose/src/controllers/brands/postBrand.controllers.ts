import { Request, Response } from 'express';
import createBrandService from '../../services/postBrand.services.js';
import { apiResponseStatusType } from '../../constants.js';


const createBrandController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { brandName, brandEstablishedAt, brandDescription } = req.body;
    const data = await createBrandService(
      brandName,
      brandEstablishedAt,
      brandDescription
    );
    if (data) {
      res.status(201).json({
        type: apiResponseStatusType.success,
        status: 201,
        message: 'New Brand Created',
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

export default createBrandController;
