import BrandModel, { BrandInterface } from '../../models/brand.models.js';

const updateBrandRepositories = async (
  id: string,
  requestedData: BrandInterface
) => {
  try {
    const databaseResponse = await BrandModel.findByIdAndUpdate(
      id,
      { $set: requestedData },
      { new: true }
    );
    return databaseResponse;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export default updateBrandRepositories;
