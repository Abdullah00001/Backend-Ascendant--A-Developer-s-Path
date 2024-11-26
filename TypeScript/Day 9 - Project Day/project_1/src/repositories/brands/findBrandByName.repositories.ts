import BrandModel from '../../models/brand.models.js';

const findBrandByName = async (brandName: string) => {
  try {
    const brand = await BrandModel.findOne({ brandName });
    return brand;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export default findBrandByName;
