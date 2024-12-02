import { Response } from 'express';
import { ResponseStatus } from '../../interfaces/base-api-response.interface.js';
import BaseApiResponse from './base-api-response.utils.js';

class SuccessApiResponse<T> extends BaseApiResponse {
  constructor(
    public code: number,
    public message: string,
    public data?: T | null
  ) {
    super(ResponseStatus.success, message);
  }
  sendSuccessResponse(res: Response): void {
    res.status(this.code).json({
      status: this.status,
      message: this.message,
      data: this.data,
    });
  }
}

export default SuccessApiResponse;
