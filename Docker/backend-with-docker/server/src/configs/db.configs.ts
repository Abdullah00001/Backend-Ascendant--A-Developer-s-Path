import mongoose from 'mongoose';
import { uri } from '../utils/db.utils.js';

const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(uri());
    console.log(`Database Connected`);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('Unknown Error Occurred');
  }
};

export default connect;
