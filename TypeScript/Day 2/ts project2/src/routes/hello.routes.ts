import hello from '../controllers/hello.controllers';

const printHello = (): string => {
  console.log(hello);
  return hello;
};

export default printHello;
