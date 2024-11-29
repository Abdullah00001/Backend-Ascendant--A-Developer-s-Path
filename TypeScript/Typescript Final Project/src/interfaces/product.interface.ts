import { Types } from 'mongoose';

interface ProductInterface {
  productName: string;
  productModel: string;
  productPrice: number;
  productDescription: string;
  releasedDate: Date;
  brand: Types.ObjectId;
  category: Types.ObjectId;
}

export default ProductInterface;
