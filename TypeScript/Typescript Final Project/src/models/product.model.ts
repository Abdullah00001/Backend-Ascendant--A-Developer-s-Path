import { model, Model, Schema } from 'mongoose';
import ProductInterface from '../interfaces/product/product.interface.js';

const ProductSchema = new Schema<ProductInterface>(
  {
    productName: { type: String, required: true },
    productModel: { type: String, unique: true, required: true },
    productPrice: { type: Number, required: true },
    productDescription: { type: String, required: true },
    releasedDate: { type: Date, required: true },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
  },
  { timestamps: true }
);

const Product: Model<ProductInterface> = model<ProductInterface>(
  'Product',
  ProductSchema
);

export default Product;
