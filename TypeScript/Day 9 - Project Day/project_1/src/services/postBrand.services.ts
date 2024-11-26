import createBrandRepository from '../repositories/brands/createBrand.repositories.js';

const createBrandService = async (
  brandName: string,
  brandEstablishedAt: Date,
  brandDescription: string
) => {
  try {
    const data = await createBrandRepository(
      brandName,
      brandEstablishedAt,
      brandDescription
    );
    return data;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export default createBrandService;
