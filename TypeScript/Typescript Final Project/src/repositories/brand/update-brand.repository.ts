import { Document } from 'mongoose';
import BrandInterface from '../../interfaces/brand/model-interfcaes/brand.interface.js';
import Brand from '../../models/brand.model.js';

const updateBrandRepository = async (
  id: string,
  data: BrandInterface
): Promise<Document | null> => {
  try {
    const updatedData = await Brand.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    return updatedData;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default updateBrandRepository;
