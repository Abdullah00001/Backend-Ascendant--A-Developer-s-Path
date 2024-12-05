import { Document } from 'mongoose';
import ProductInterface from '../../interfaces/product/product.interface.js';
import handleServiceError from '../../utils/errors/handle-service-error.utils.js';
import updateProductRepository from '../../repositories/product/update-product.repository.js';

const updateProductService = async (
  id: string,
  data: ProductInterface
): Promise<Document | null> => {
  try {
    const updatedData = await updateProductRepository(id, data);
    
    if (!updatedData) throw new Error('Internal Server Error');
    return updatedData;
  } catch (error) {
    handleServiceError(error);
    return null;
  }
};

export default updateProductService;
