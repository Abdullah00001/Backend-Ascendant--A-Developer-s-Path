const handleRepositoryError = (error: Error | any): void => {
  if (error instanceof Error) throw new Error(error.message);
  throw new Error('Database Failed To Create');
};

export default handleRepositoryError;
