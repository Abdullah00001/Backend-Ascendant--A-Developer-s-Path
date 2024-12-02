import isBrandExistQueryInterface from '../../interfaces/brand/queries-interfaces/is-brand-exist-query.interface.js';
import Brand from '../../models/brand.model.js';

const isBrandExistRepository = async (
  query: isBrandExistQueryInterface
): Promise<boolean> => {
  try {
    const isExist = await Brand.findOne(query);
    if (isExist) return true;
    return false;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('An unknown error occurred in isBrandExistRepository.');
  }
};

export default isBrandExistRepository;
