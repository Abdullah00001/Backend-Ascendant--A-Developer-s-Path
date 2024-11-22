const api = (url: string, method: 'GET' | 'POST'): void => {
  console.log(url, method);
};

/* // PROBLEM
const data = {
  url: 'example.com',
  method: 'GET',
};

api(data.url, data.method); */

/* // SOLUTION 3
const enum methods {
  'get' = 'GET',
  'post' = 'POST',
}

interface Data {
  url: string;
  method: methods;
}

const data = { url: 'example.com', method: methods.get };

api(data.url, data.method); */

/* 
// SOLUTION-1
interface Data {
  url: string;
  method: 'GET' | 'POST';
}

const data: Data = { url: 'example.com', method: 'GET' };

api(data.url, data.method); */

/* 
// SOLUTION-2
const enum methods {
  'get' = 'GET',
  'post' = 'POST',
}

const data = { url: 'example.com', method: methods.get };

api(data.url, data.method);
*/
