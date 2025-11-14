import { Document, ObjectId } from 'mongoose';
import Brand from '../../models/brand.model.js';

const findBrandByIdRepositories = async (
  id: string
): Promise<Document | null> => {
  try {
    const data = await Brand.findById(id);
    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default findBrandByIdRepositories;
