import { model, Model, Schema } from 'mongoose';
import slugify from 'slugify';
import CategoryInterface from '../interfaces/category.interface.js';

const CategorySchema = new Schema<CategoryInterface>(
  {
    categoryName: { type: String, required: true, unique: true },
    categoryDescription: { type: String, required: true },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

CategorySchema.pre('save', function (next) {
  if (this.isModified('categoryName')) {
    this.slug = slugify(this.categoryName, { lower: true, strict: true });
  }
  next();
});

const Category: Model<CategoryInterface> = model<CategoryInterface>(
  'Category',
  CategorySchema
);

export default Category;
