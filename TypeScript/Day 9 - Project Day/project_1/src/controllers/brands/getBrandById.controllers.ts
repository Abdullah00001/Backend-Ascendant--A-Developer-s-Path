import { Request, Response } from 'express';
import { apiResponseStatusType } from '../../constants.js';

const getBrandbyIDController = (req: Request, res: Response) => {
  try {
    const brand = req.brand;
    res.status(200).json({
      type: apiResponseStatusType.success,
      status: 200,
      message: 'Brand Retrive Successful',
      data: brand,
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

export default getBrandbyIDController;