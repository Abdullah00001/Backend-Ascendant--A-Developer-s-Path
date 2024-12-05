import { Document } from 'mongoose';
import CategoryInterface from '../../interfaces/category/category.interface.js';
import handleServiceError from '../../utils/errors/handle-service-error.utils.js';
import updateCategoryRepository from '../../repositories/category/update-category.repository.js';

const updateCategoryService = async (
  id: string,
  data: CategoryInterface
): Promise<Document | null> => {
  try {
    const response = await updateCategoryRepository(id, data);
    if (!response) throw new Error('Internal Server Error');
    return response;
  } catch (error) {
    handleServiceError(error);
    return null;
  }
};

export default updateCategoryService;
