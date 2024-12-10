const uri = (): string => {
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.PRODUCTION_DATABASE_URL)
      throw new Error('Database Uri Missing');
    return process.env.PRODUCTION_DATABASE_URL;
  }
  if (!process.env.DEVELOPMENT_DATABASE_URL)
    throw new Error('Database Uri Missing');
  return process.env.DEVELOPMENT_DATABASE_URL;
};

export default uri;
