const uri = ():string => {
  if (process.env.NODE_ENV === "production") {
    if (process.env.PRODUCTION_DATABASE_URI) {
      return process.env.PRODUCTION_DATABASE_URI;
    } else {
      throw new Error("Production Uri String Missing In Environment Variable");
    }
  } else {
    if (process.env.DEVELOPMENT_DATABASE_URI) {
      return process.env.DEVELOPMENT_DATABASE_URI;
    } else {
      throw new Error("Development Uri String Missing In Environment Variable");
    }
  }
};

export { uri };
