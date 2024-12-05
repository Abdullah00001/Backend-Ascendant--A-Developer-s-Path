import { Document } from 'mongoose';
import handleServiceError from '../../utils/errors/handle-service-error.utils.js';
import getAllCategoriesRepository from '../../repositories/category/get-all-categories.repository.js';

const getAllCategoriesService = async (): Promise<Document[]> => {
  try {
    const data = await getAllCategoriesRepository();
    return data;
  } catch (error) {
    handleServiceError(error);
    return [];
  }
};

export default getAllCategoriesService;
