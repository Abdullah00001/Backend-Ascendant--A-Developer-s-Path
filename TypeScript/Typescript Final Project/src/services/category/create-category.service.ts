import { Document } from 'mongoose';
import CategoryInterface from '../../interfaces/category/category.interface.js';
import createCategoryRepository from '../../repositories/category/create-ctagory.repository.js';

const createCategoryService = async (
  data: CategoryInterface
): Promise<Document> => {
  try {
    const createdCategory = await createCategoryRepository(data);
    return createdCategory;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default createCategoryService;
