import deleteProductRepository from '../../repositories/product/delete-product.repository.js';
import handleServiceError from '../../utils/errors/handle-service-error.utils.js';

const deleteProductService = async (id: string): Promise<boolean> => {
  try {
    const response = await deleteProductRepository(id);
    if (!response) throw new Error('Internal Server Error');
    return true;
  } catch (error) {
    handleServiceError(error);
    return false;
  }
};

export default deleteProductService;
