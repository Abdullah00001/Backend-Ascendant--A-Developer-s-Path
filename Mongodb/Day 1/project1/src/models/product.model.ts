import { model, Model, Schema } from "mongoose";
import ProductInterface from "../interfaces/product.interfaces.js";

const ProductSchema = new Schema<ProductInterface>(
  {
    productName: { type: String, required: true },
    productPice: { type: Number, required: true },
    ProductDetails: { type: String, required: true },
    inStock: { type: String, default: false },
    brand: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);



const Product: Model<ProductInterface> = model<ProductInterface>(
  "Product",
  ProductSchema
);

export default Product;
