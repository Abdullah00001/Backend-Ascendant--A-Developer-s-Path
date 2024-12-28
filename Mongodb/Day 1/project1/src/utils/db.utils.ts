const uri = (): string => {
  const NODE_ENV = process.env.NODE_ENV;

  if (NODE_ENV === "production") {
    if (process.env.PRODUCTION_DATABASE_URI) {
      return process.env.PRODUCTION_DATABASE_URI;
    } else {
      throw new Error(
        "database Connection uri missing in environment variable"
      );
    }
  } else {
    if (process.env.DEVELOPMENT_DATABASE_URI) {
      return process.env.DEVELOPMENT_DATABASE_URI;
    } else {
      throw new Error(
        "database Connection uri missing in environment variable"
      );
    }
  }
};

export default uri;
