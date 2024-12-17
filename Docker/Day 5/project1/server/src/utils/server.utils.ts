const isPortExist = (port: string | undefined): string => {
  if (!port) throw new Error(`Port Is Missing`);
  return port;
};

export { isPortExist };
