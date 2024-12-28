import mongoose, { model, Model, Schema } from "mongoose";

const enum status {
  InStock = "In Stock",
  OutOfStock = "Out Of Stock",
  UpComing = "Up Coming",
}
interface ProductI extends Document {
  productName: string;
  productModel: string;
  productDescription: string;
  productPrice: number;
  productRegularPrice: number;
  productStatus: status;
  brand: mongoose.Types.ObjectId;
  productCategory: mongoose.Types.ObjectId;
  productSubCategory: mongoose.Types.ObjectId;
}

const ProductSchema = new Schema<ProductI>(
  {
    productName: { type: String, required: true },
    productModel: { type: String, required: true },
    productDescription: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productRegularPrice: { type: Number, required: true },
    productStatus: { type: String, default: status.UpComing },
    brand: { type: Schema.Types.ObjectId, ref: "Brand" },
    productCategory: { type: Schema.Types.ObjectId, ref: "Category" },
    productSubCategory: { type: Schema.Types.ObjectId, ref: "SubCategory" },
  },
  { timestamps: true }
);

const Product: Model<ProductI> = model<ProductI>("Product", ProductSchema);
