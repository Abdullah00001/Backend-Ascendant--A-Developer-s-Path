import { model, Model, Schema } from 'mongoose';
import BrandInterface from '../interfaces/brand.interface.js';

const BrandSchema = new Schema<BrandInterface>(
  {
    brandName: { type: String, unique: true, required: true },
    brandDescription: { type: String, required: true },
    brandLocation: { type: String, required: true },
    brandEmail: { type: String, unique: true, required: true },
    brandEstablishedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

const Brand: Model<BrandInterface> = model<BrandInterface>(
  'Brand',
  BrandSchema
);

export default Brand;
