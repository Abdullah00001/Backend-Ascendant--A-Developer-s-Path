import { Document } from 'mongoose';
import ProductInterface from '../../interfaces/product/product.interface.js';
import createProductRepository from '../../repositories/product/create-product.repository.js';
import handleServiceError from '../../utils/errors/handle-service-error.utils.js';

const createProductService = async (
  data: ProductInterface
): Promise<Document | null> => {
  try {
    const response = await createProductRepository(data);
    return response;
  } catch (error) {
    handleServiceError(error);
    return null;
  }
};

export default createProductService;
