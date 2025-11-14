import { Document } from 'mongoose';
import Product from '../../models/product.model.js';
import handleRepositoryError from '../../utils/errors/handle-repository-error.util.js';

const getProductById = async (id: string): Promise<Document | null> => {
  try {
    const product = Product.findById(id).populate('brand').populate('category');
    return product;
  } catch (error) {
    handleRepositoryError(error);
    return null;
  }
};

export default getProductById;
