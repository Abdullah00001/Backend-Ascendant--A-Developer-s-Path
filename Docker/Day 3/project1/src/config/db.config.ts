import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connect = async (): Promise<void> => {
  try {
    const connectionResponse = await mongoose.connect(
      `${process.env.DEVELOPMENT_DATABASE_URI}`
    );
    console.log(
      `Database Connected\nHost : ${connectionResponse.connection.host}\nPort : ${connectionResponse.connection.port}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Database Connection Failed\nerror : ${error.message}`);
      throw new Error('database failed')
    }
    console.log(`Database Connection Failed Due To Unstable Network`);
    throw new Error('database failed')
  }
};

export default connect;
