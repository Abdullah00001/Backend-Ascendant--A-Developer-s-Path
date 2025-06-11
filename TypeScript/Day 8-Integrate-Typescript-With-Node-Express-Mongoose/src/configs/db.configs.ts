import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri: string | undefined =
  process.env.MONGODB_DEVELOPMENT_URI || process.env.MONGODB_PRODUCTION_URI;

if (!uri)
  throw new Error(`Database Connection URL Is Missing in Environvariable`);

const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log(`Database Connected`);
  } catch (error) {
    const err = error as Error;
    console.log(`Database Connection Failed\nError : ${err.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
