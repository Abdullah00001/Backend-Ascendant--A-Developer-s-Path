import { Response } from 'express';
import { ResponseStatus } from '../../interfaces/base-api-response.interface.js';
import FieldValidationErrorInterface from '../../interfaces/validation-error-api-response.interface.js';
import BaseApiResponse from './base-api-response.utils.js';

class FieldValidationError<T>
  extends BaseApiResponse
  implements FieldValidationErrorInterface<T>
{
  constructor(
    public code: number,
    public message: string,
    public errorDetails: string,
    public hints: string,
    public field: string,
    public type: T
  ) {
    super(ResponseStatus.error, message);
  }
  sendValidationErrorResponse(res: Response): void {
    res.status(this.code).json({
      status: this.status,
      code: this.code,
      message: this.message,
      details: this.errorDetails,
      suggestion: this.hints,
      field: this.field,
      type: this.type,
    });
  }
}

export default FieldValidationError;
