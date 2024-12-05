import deleteCategoryRepository from '../../repositories/category/dalate-category.repository.js';
import handleServiceError from '../../utils/errors/handle-service-error.utils.js';

const deleteCategoryService = async (id: string): Promise<boolean> => {
  try {
    const response = await deleteCategoryRepository(id);
    if (!response) throw new Error('Internal Server Error');
    return response;
  } catch (error) {
    handleServiceError(error);
    return false;
  }
};

export default deleteCategoryService;
