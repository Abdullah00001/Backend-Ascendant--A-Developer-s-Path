import { ObjectId } from 'mongoose';
import Brand from '../../models/brand.model.js';

const deleteBrandRepository = async (
  id: string | ObjectId
): Promise<boolean> => {
  try {
    const responseData = await Brand.findByIdAndDelete(id);
    if (!responseData) return false;
    return true;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default deleteBrandRepository;
