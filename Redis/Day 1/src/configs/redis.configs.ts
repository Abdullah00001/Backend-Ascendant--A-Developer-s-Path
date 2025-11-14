import { createClient } from "redis";

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on("error", (error) => {
  console.error(error.message);
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log(`Redis Connected`);
  } catch (error) {
    const err = error as any;
    console.error(err.message);
    process.exit(1);
  }
};

export default redisClient;
