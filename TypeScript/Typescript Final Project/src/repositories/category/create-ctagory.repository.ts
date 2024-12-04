import { Document } from 'mongoose';
import CategoryInterface from '../../interfaces/category/category.interface.js';
import Category from '../../models/category.model.js';

const createCategoryRepository = async (
  data: CategoryInterface
): Promise<Document> => {
  try {
    const createCategoryInstance = new Category(data);
    const createdCategory = await createCategoryInstance.save();
    return createdCategory;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('Database Failed To Create');
  }
};

export default createCategoryRepository;