import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const URI =
  process.env.MONGODB_DEVELOPMENT_URI || process.env.MONGODB_PRODUCTION_URI;

if (!URI) {
  throw new Error(
    `Database Connection uri Missing\nTo Resolve This Please Check Your Environment Variable\nOr Add Connection uri`
  );
}

const connectDatabase = async (): Promise<void> => {
  try {
    console.log(`-----------------------------------------\nPlease Wait...\nDatabase Is Connecting`);
    const connectionResponse = await mongoose.connect(URI);
    console.log(
      `Database Connected\nHost : ${connectionResponse.connection.host}\nDATABASE PORT : ${connectionResponse.connection.port}`
    );
  } catch (error) {
    const err = error as Error;
    console.log(`Database Connnection Failed\nError : ${err.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
