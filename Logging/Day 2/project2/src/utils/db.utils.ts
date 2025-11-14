const databaseUri = () => {
  const env = process.env.NODE_ENV;
  if (env === "production") {
    if (!process.env.PRODUCTION_DATABASE_URI) {
      throw new Error(
        "Production Database Connection uri Missing In Environment VAriable"
      );
    } else {
      return process.env.PRODUCTION_DATABASE_URI;
    }
  } else {
    if (!process.env.DEVELOPMENT_DATABASE_URI) {
      throw new Error(
        "Development Database Connection uri Missing In Environment VAriable"
      );
    } else {
      return process.env.DEVELOPMENT_DATABASE_URI;
    }
  }
};

export { databaseUri };
