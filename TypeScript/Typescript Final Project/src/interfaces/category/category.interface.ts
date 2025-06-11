import { Document } from 'mongoose';

interface CategoryInterface extends Document {
  categoryName: string;
  categoryDescription: string;
}

export default CategoryInterface;
