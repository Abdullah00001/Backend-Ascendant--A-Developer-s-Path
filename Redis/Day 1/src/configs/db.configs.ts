import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const uri = process.env.DB_URI as any;


const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log(`Database Connected`);
  } catch (error) {
    const err = error as any;
    console.log(`Database Connection Failed\nError:${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
