import { Document, Types } from 'mongoose';

interface ProductInterface extends Document {
  productName: string;
  productModel: string;
  productPrice: number;
  productDescription: string;
  releasedDate: Date;
  brand: Types.ObjectId;
  category: Types.ObjectId;
}

export default ProductInterface;
