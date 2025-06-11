import { Request, Response } from 'express';
import { apiResponseStatusType } from '../../constants.js';
import deleteBrandByIdService from '../../services/deleteBrandById.services.js';

const deleteBrandByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.brand;
    await deleteBrandByIdService(id);
    res.status(200).json({
      type: apiResponseStatusType.success,
      status: 200,
      message: 'Brand Delete Successful',
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

export default deleteBrandByIdController;
