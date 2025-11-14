const handleServiceError = (error: Error | any): void => {
  if (error instanceof Error) throw new Error(error.message);
  throw new Error('An unknown error occurred in isBrandExistRepository.');
};

export default handleServiceError;
