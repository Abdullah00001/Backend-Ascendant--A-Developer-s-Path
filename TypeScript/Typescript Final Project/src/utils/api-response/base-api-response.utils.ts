import {
  BaseApiResponseInterface,
  ResponseStatus,
} from '../../interfaces/error/base-api-response.interface.js';

class BaseApiResponse implements BaseApiResponseInterface {
  constructor(public status: ResponseStatus, public message: string) {}
}

export default BaseApiResponse;
