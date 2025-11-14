import handleRepositoryError from '../../utils/errors/handle-repository-error.util.js';
import Product from '../../models/product.model.js';

const deleteProductRepository = async (id: string): Promise<Boolean> => {
  try {
    const data = await Product.findByIdAndDelete(id);
    if (!data) return false;
    return true;
  } catch (error) {
    handleRepositoryError(error);
    return false;
  }
};

export default deleteProductRepository;
