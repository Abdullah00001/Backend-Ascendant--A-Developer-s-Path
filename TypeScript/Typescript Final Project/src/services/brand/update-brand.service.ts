import { Document } from 'mongoose';
import BrandInterface from '../../interfaces/brand/model-interfcaes/brand.interface.js';
import updateBrandRepository from '../../repositories/brand/update-brand.repository.js';

const updateBrandService = async (
  id: string,
  data: BrandInterface
): Promise<Document> => {
  try {
    const updatedData = await updateBrandRepository(id, data);
    if (!updatedData) throw new Error('Internal Server Error');
    return updatedData;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default updateBrandService;
