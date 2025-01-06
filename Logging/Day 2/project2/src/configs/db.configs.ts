import mongoose from "mongoose";
import { databaseUri } from "../utils/db.utils.js";
import logger from "./logger.configs.js";

const connectDatabase = async () => {
  try {
    await mongoose.connect(databaseUri());
    console.log(`Database Connected`);
  } catch (error) {
    const err = error as any;
    logger.error(err.message);
    process.exit(1);
  }
};

export default connectDatabase;
