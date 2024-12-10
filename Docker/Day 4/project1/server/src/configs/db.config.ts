import dotenv from 'dotenv';
import mongoose from 'mongoose';
import uri from '../utils/db.utils.js';

dotenv.config();

const connect = async (): Promise<void> => {
  try {
    const connectionResponse = await mongoose.connect(uri());
    console.log(`Database Connected`);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('Unknown Error Occured');
  }
};

export default connect;
