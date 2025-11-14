const isPortExist = (port: string | undefined): string => {
  if (!port) throw new Error('Port Missing In Environment Variable');
  return port;
};

export default isPortExist;
