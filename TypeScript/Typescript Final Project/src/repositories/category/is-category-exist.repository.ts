import Category from '../../models/category.model.js';

const isCategoryExistRepository = async (
  categoryName: string
): Promise<Boolean> => {
  try {
    const isCategoryExist = await Category.findOne({ categoryName });
    if (isCategoryExist) {
      return true;
    }
    return false;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('Database Failed To Retrieve');
  }
};

export default isCategoryExistRepository;
