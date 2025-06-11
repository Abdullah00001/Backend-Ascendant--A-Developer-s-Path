import { Request, Response } from 'express';
import { apiResponseStatusType } from '../../constants.js';
import gettAllBrandsService from '../../services/getAllBrands.services.js';


const getAllBrandsControllers = async (req: Request, res: Response) => {
  try {
    const data = await gettAllBrandsService();
    res.status(200).json({
      type: apiResponseStatusType.success,
      status: 200,
      message: 'Retrive All Brands Successful',
      data: data,
    });
    return;
  } catch (error) {
    res.status(500).json({
      type: apiResponseStatusType.server_error,
      status: 500,
      message: 'Internal Server Error',
    });
    return;
  }
};

export default getAllBrandsControllers;
