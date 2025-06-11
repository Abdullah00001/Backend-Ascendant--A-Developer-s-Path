import mongoose from "mongoose";

const DB_URI = process.env.DB_CONNECTION_URI as string;

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database Connected");
  } catch (error) {
    throw error;
  }
};

export default connectDb;
