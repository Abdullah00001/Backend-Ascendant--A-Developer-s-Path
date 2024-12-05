import { Document } from 'mongoose';
import handleRepositoryError from '../../utils/errors/handle-repository-error.util.js';
import Product from '../../models/product.model.js';

const getProductsRepository = async (): Promise<Document[]> => {
  try {
    const products = await Product.find({})
      .populate('brand')
      .populate('category');
    return products;
  } catch (error) {
    handleRepositoryError(error);
    return [];
  }
};

export default getProductsRepository;
