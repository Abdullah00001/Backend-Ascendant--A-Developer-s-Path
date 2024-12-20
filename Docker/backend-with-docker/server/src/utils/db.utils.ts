const uri = (): string => {
  if (process.env.NODE_ENV === 'production') {
    if (process.env.PRODUCTION_DATABASE_URI)
      return process.env.PRODUCTION_DATABASE_URI;
    throw new Error(
      'Mongodb Production Connection Uri Missed On Environment Variables'
    );
  } else {
    if (process.env.DEVELOPMENT_DATABASE_URI)
      return process.env.DEVELOPMENT_DATABASE_URI;
    throw new Error(
      'Mongodb Development Connection Uri Missed On Environment Variables'
    );
  }
};

export { uri };
