import { Document } from 'mongoose';

interface CategoryInterface extends Document {
  categoryName: string;
  categoryDescription: string;
  slug?: string;
}

export default CategoryInterface;
