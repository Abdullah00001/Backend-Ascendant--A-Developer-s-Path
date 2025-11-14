import { Document } from 'mongoose';
import Category from '../../models/category.model.js';
import handleRepositoryError from '../../utils/errors/handle-repository-error.util.js';

const findCategoryByIdRepository = async (
  id: string
): Promise<Document | null> => {
  try {
    const data = await Category.findById(id);
    return data;
  } catch (error) {
    handleRepositoryError(error);
    return null;
  }
};

export default findCategoryByIdRepository;
