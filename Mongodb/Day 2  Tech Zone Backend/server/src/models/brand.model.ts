import mongoose, { Document, model, Model, Schema } from "mongoose";

interface BrandI extends Document {
  brandName: string;
  categories: mongoose.Types.ObjectId[];
  subCategory: mongoose.Types.ObjectId[];
}

const BrandSchema = new Schema<BrandI>(
  {
    brandName: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    subCategory: [{ type: Schema.Types.ObjectId, ref: "SubCategory" }],
  },
  { timestamps: true }
);

const Brand: Model<BrandI> = model<BrandI>("Brand", BrandSchema);

export default Brand;
