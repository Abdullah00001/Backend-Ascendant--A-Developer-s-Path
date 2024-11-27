import BrandModel from '../models/brand.models.ts';

declare global {
  namespace Express {
    interface Request {
      brand?: BrandModel;
    }
  }
}
