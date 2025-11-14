import { Document } from 'mongoose';
import BrandInterface from '../../interfaces/brand/model-interfcaes/brand.interface.js';
import Brand from '../../models/brand.model.js';

const createBrandRepository = async (
  data: BrandInterface
): Promise<Document> => {
  try {
    const newBrand = new Brand(data);
    const resData = await newBrand.save();
    return resData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default createBrandRepository;
