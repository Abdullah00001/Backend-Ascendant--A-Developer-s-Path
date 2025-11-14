import { Document } from 'mongoose';

interface BrandInterface extends Document {
  brandName: string;
  brandDescription: string;
  brandLocation: string;
  brandEmail: string;
  brandEstablishedAt: Date;
}

export default BrandInterface;
