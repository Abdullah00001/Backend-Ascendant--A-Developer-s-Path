import BrandModel from '../../models/brand.models.js';

const deleteBrandById = async (id: string) => {
  try {
    return await BrandModel.findByIdAndDelete(id);
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export default deleteBrandById;
