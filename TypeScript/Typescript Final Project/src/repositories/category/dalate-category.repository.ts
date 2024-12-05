import Category from '../../models/category.model.js';
import handleRepositoryError from '../../utils/errors/handle-repository-error.util.js';

const deleteCategoryRepository = async (id: string): Promise<boolean> => {
  try {
    const response = await Category.findByIdAndDelete(id);
    if (!response) return false;
    return true;
  } catch (error) {
    handleRepositoryError(error);
    return false;
  }
};

export default deleteCategoryRepository;
