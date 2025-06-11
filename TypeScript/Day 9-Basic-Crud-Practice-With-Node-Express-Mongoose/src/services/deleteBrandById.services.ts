import { apiResponseStatusType } from '../constants.js';
import deleteBrandById from '../repositories/brands/deleteBrandById.repositories.js';

const deleteBrandByIdService = async (id: string) => {
  try {
    return await deleteBrandById(id);
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export default deleteBrandByIdService;
