import { Document } from 'mongoose';
import BrandInterface from '../../interfaces/brand/model-interfcaes/brand.interface.js';
import createBrandRepository from '../../repositories/brand/create-brand.repository.js';

const createBrandService = async (
  brandData: BrandInterface
): Promise<Document> => {
  try {
    const resData = await createBrandRepository(brandData);
    return resData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default createBrandService;
