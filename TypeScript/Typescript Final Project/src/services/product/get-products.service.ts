import { Document } from 'mongoose';
import handleServiceError from '../../utils/errors/handle-service-error.utils.js';
import getProductsRepository from '../../repositories/product/get-products.repository.js';

const getProductsService = async (): Promise<Document[]> => {
  try {
    const products = await getProductsRepository();
    return products;
  } catch (error) {
    handleServiceError(error);
    return [];
  }
};

export default getProductsService;
