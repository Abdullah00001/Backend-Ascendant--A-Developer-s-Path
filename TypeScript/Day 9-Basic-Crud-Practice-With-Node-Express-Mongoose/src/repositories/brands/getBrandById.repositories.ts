import { ObjectId } from 'mongoose';
import BrandModel from '../../models/brand.models.js';

const getBrandByIdRepository = async (id: string) => {
  try {
    const requestedBrand = await BrandModel.findById(id);
    return requestedBrand;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export default getBrandByIdRepository;
