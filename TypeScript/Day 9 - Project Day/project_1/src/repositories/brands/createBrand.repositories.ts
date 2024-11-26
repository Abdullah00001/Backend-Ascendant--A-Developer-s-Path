import BrandModel from '../../models/brand.models.js';

const createBrandRepository = async (
  brandName: string,
  brandEstablishedAt: Date,
  brandDescription: string
) => {
  try {
    const newBrand = new BrandModel({
      brandName,
      brandEstablishedAt,
      brandDescription,
    });
    const data = await newBrand.save();
    return data;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export default createBrandRepository;
