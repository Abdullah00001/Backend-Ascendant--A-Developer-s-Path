import { Document } from 'mongoose';

interface MobileInterface extends Document {
  mobileName: string;
  mobileDescription: string;
  mobileModel: string;
  mobilePrie: number;
  createdAt: Date;
  updatedAt: Date;
}
