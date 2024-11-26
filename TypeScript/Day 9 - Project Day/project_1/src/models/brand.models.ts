import { Document, model, Model, Schema } from 'mongoose';

interface BrandInterface extends Document {
  brandName: string;
  brandEstablishedAt: Date;
  brandDescription: string;
  createdAt: Date;
  updatedAt: Date;
}

const BrandSchema: Schema<BrandInterface> = new Schema<BrandInterface>(
  {
    brandName: { type: String, required: true },
    brandEstablishedAt: { type: Date, required: true },
    brandDescription: { type: String, required: true },
  },
  { timestamps: true }
);

const BrandModel: Model<BrandInterface> = model<BrandInterface>(
  'Brand',
  BrandSchema
);

export default BrandModel;
