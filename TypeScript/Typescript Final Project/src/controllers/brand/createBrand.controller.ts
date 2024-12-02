import { Request, Response } from 'express';

const createBrandController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { brandName } = req.body;
    res.status(200).send(brandName);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send('internal server error');
    return;
  }
};

export default createBrandController;
