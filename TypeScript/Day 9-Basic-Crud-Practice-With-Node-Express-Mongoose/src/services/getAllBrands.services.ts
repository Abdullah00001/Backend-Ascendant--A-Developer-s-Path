import gettAllBrands from '../repositories/brands/getAllBrands.repositories.js';

const gettAllBrandsService = async () => {
  try {
    const data = await gettAllBrands();
    return data;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export default gettAllBrandsService;
