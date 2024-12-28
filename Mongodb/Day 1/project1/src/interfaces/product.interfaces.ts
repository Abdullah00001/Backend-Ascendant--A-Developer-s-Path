import { Document } from "mongoose";

interface ProductInterface extends Document {
  productName: String;
  productPice: Number;
  inStock: Boolean;
  ProductDetails: string;
  brand: String;
  category: String;
}

export default ProductInterface;
