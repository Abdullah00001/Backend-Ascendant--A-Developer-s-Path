import mongoose from 'mongoose';
import { uri } from '../utils/db.utils.js';

const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(uri());
    console.log(`Database Connected`);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error(`Database Connection Failed Due To Unknown Error`);
  }
};

export default connectDatabase;
