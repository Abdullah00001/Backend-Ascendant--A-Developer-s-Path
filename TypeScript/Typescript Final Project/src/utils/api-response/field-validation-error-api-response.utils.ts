import { Response } from 'express';
import { ResponseStatus } from '../../interfaces/base-api-response.interface.js';
import {
  FieldValidationErrorInterface,
  FieldErrorInterface,
} from '../../interfaces/validation-error-api-response.interface.js';
import BaseApiResponse from './base-api-response.utils.js';
import Joi from 'joi';

class FieldValidationError<T>
  extends BaseApiResponse
  implements FieldValidationErrorInterface<T>
{
  public fieldsErrors: FieldErrorInterface<T>[];
  private mapErrorFields(errorsList: Joi.ValidationErrorItem[]) {
    return errorsList.map((err) => ({
      field: err.path.join('.'),
      type: err.type as T,
      hints: err.message,
    }));
  }
  constructor(
    public code: number,
    public message: string,
    public errorList: Joi.ValidationErrorItem[]
  ) {
    super(ResponseStatus.error, message);
    this.fieldsErrors = this.mapErrorFields(errorList);
  }
  sendValidationErrorResponse(res: Response): void {
    res.status(this.code).json({
      status: this.status,
      message: this.message,
      fieldsErrors: this.fieldsErrors,
    });
  }
}

export default FieldValidationError;
