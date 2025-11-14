import { Document } from 'mongoose';
import CategoryInterface from '../../interfaces/category/category.interface.js';
import handleRepositoryError from '../../utils/errors/handle-repository-error.util.js';
import Category from '../../models/category.model.js';

const updateCategoryRepository = async (
  id: string,
  data: CategoryInterface
): Promise<Document | null> => {
  try {
    const response = await Category.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    );
    return response;
  } catch (error) {
    handleRepositoryError(error);
    return null;
  }
};

export default updateCategoryRepository;
