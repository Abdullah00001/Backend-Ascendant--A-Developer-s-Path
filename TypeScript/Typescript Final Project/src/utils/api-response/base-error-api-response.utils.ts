import { Response } from 'express';
import { ResponseStatus } from '../../interfaces/base-api-response.interface.js';
import BaseApiResponse from './base-api-response.utils.js';
import BaseErrorApiInterface from '../../interfaces/base-error-api-response.interface.js';

class ErrorApiResponse
  extends BaseApiResponse
  implements BaseErrorApiInterface
{
  constructor(
    public code: number,
    public message: string,
    public errorDetails: string,
    public hints: string
  ) {
    super(ResponseStatus.error, message);
  }

  sendErrorResponse(res: Response): void {
    res.status(this.code).json({
      status: this.status,
      message: this.message,
      details: this.errorDetails,
      suggestion: this.hints,
    });
  }
}

export default ErrorApiResponse;
