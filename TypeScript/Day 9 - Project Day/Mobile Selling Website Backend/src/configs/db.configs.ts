import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri: string | undefined =
  process.env.MONGODB_DEVELOPMENT_URL || process.env.MONGODB_PRODUCTION_URL;

if (!uri)
  throw new Error(
    `Database Connection Url Missing On .env File\nPlease Check And Resolved`
  );

const connectDatabase = async (): Promise<void> => {
  try {
    console.log(`Please Wait...`);
    console.log(`Connecting To The Dtabase`);
    const response = await mongoose.connect(uri);
    console.log(`Database Connected\nHost : ${response.connection.host}`);
  } catch (error) {
    const err: Error = error as Error;
    console.log(`Database Connection Failed.\nMessage : ${err.message}`);
  }
};

export default connectDatabase;
