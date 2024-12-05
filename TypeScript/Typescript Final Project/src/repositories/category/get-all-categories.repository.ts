import { Document } from 'mongoose';
import Category from '../../models/category.model.js';
import handleRepositoryError from '../../utils/errors/handle-repository-error.util.js';

const getAllCategoriesRepository = async (): Promise<Document[]> => {
  try {
    const data = await Category.find({});
    return data;
  } catch (error) {
    handleRepositoryError(error);
    return [];
  }
};

export default getAllCategoriesRepository;
