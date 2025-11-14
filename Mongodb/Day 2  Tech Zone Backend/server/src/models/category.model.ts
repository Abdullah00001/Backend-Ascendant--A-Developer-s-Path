import { Document, model, Model, Schema } from "mongoose";

interface CategoryI extends Document {
  categoryName: string;
}

const CategorySchema = new Schema<CategoryI>(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

const Category: Model<CategoryI> = model<CategoryI>("Category", CategorySchema);

export default Category;
