import { Document } from 'mongoose';
import ProductInterface from '../../interfaces/product/product.interface.js';
import handleRepositoryError from '../../utils/errors/handle-repository-error.util.js';
import Product from '../../models/product.model.js';

const createProductRepository = async (
  data: ProductInterface
): Promise<Document | null> => {
  try {
    const productInstance = new Product(data);
    const savedProduct = productInstance.save();
    return savedProduct;
  } catch (error) {
    handleRepositoryError(error);
    return null;
  }
};

export default createProductRepository;
