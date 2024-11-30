import { BaseApiResponseInterface } from './base-api-response.interface.js';

interface FieldValidationErrorInterface<T> extends BaseApiResponseInterface {
  field: string;
  type: T;
}

export default FieldValidationErrorInterface;
