const uri = (): string => {
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.PRODUCTION_DATABASE_URI)
      throw new Error('Production Uri Missing');
    return process.env.PRODUCTION_DATABASE_URI;
  } else {
    if (!process.env.DEVELOPMENT_DATABASE_URI)
      throw new Error('Development Uri Missing');
    return process.env.DEVELOPMENT_DATABASE_URI;
  }
};

export { uri };
