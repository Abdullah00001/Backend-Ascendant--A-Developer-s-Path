import { Document } from 'mongoose';
import Brand from '../../models/brand.model.js';

const getBrandsRepository = async (): Promise<Document[]> => {
  try {
    const data = await Brand.find({});
    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default getBrandsRepository;
