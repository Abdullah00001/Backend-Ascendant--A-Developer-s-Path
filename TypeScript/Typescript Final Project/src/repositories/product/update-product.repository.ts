import { Document } from 'mongoose';
import ProductInterface from '../../interfaces/product/product.interface.js';
import handleRepositoryError from '../../utils/errors/handle-repository-error.util.js';
import Product from '../../models/product.model.js';

const updateProductRepository = async (
  id: string,
  data: ProductInterface
): Promise<Document | null> => {
  try {
    const updatedData = await Product.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    return updatedData;
  } catch (error) {
    handleRepositoryError(error);
    return null;
  }
};

export default updateProductRepository;
