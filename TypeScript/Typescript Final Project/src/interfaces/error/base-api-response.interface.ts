const enum ResponseStatus {
  success = 'Success',
  error = 'Error',
}

interface BaseApiResponseInterface {
  status: ResponseStatus;
  message: string;
}

export { BaseApiResponseInterface, ResponseStatus };
