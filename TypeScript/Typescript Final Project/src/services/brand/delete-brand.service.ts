import { ObjectId } from 'mongoose';
import deleteBrandRepository from '../../repositories/brand/delete-brand.repository.js';

const deleteBrandService = async (id: string | ObjectId): Promise<boolean> => {
  try {
    const response = await deleteBrandRepository(id);
    if (!response) throw new Error('Internal Server Error');
    return response;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default deleteBrandService;
