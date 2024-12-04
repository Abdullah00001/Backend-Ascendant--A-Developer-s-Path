import { model, Model, Schema } from 'mongoose';
import CategoryInterface from '../interfaces/category/category.interface.js';

const CategorySchema = new Schema<CategoryInterface>(
  {
    categoryName: { type: String, required: true, unique: true },
    categoryDescription: { type: String, required: true },
  },
  { timestamps: true }
);

const Category: Model<CategoryInterface> = model<CategoryInterface>(
  'Category',
  CategorySchema
);

export default Category;
