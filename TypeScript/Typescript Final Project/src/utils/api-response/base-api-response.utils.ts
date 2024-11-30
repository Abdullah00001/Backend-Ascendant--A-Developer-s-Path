import {
  BaseApiResponseInterface,
  ResponseStatus,
} from '../../interfaces/base-api-response.interface.js';

class BaseApiResponse implements BaseApiResponseInterface {
  constructor(
    public status: ResponseStatus,
    public message: string
  ) {}
}

export default BaseApiResponse;
