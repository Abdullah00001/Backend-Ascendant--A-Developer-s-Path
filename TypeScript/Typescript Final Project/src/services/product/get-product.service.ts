import { Document } from 'mongoose';
import handleServiceError from '../../utils/errors/handle-service-error.utils.js';
import getProductById from '../../repositories/product/get-product-by-id.repository.js';

const getProductService = async (id: string): Promise<Document | null> => {
  try {
    const product = getProductById(id);
    if (!product) throw new Error('Internal Server Error');
    return product;
  } catch (error) {
    handleServiceError(error);
    return null;
  }
};

export default getProductService;
