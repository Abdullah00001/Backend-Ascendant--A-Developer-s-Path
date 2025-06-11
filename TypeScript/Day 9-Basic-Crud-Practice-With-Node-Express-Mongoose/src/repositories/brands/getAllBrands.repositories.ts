import BrandModel from '../../models/brand.models.js';

const gettAllBrands = async () => {
  try {
    const data = await BrandModel.find({});
    return data;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export default gettAllBrands;
