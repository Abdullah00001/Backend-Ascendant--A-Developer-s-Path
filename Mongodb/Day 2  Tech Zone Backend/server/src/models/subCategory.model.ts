import mongoose, { Document, model, Model, Schema } from "mongoose";

interface SubCategoryI extends Document {
  subCategoryName: string;
  category: mongoose.Types.ObjectId;
}

const SubCategorySchema = new Schema<SubCategoryI>(
  {
    subCategoryName: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  },
  { timestamps: true }
);

const SubCategory: Model<SubCategoryI> = model<SubCategoryI>(
  "SubCategory",
  SubCategorySchema
);

export default SubCategory;
