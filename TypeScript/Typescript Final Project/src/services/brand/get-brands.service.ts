import { Document } from 'mongoose';
import getBrandsRepository from '../../repositories/brand/get-brands.repository.js';

const getBrandsService = async (): Promise<Document[]> => {
  try {
    const data = await getBrandsRepository();
    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default getBrandsService;
