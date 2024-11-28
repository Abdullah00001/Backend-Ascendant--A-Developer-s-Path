import { Response } from 'express';

const enum ResponseStatus {
  success = 'Success',
  error = 'Error',
}
interface ApiResponseInterface<T> {
  status: ResponseStatus;
  code: number;
  message: string;
  data?: T | null;
}

class BaseApiResponse<T> implements ApiResponseInterface<T> {
  constructor(
    public status: ResponseStatus,
    public code: number,
    public message: string,
    public data?: T | null
  ) {}
}

class SuccessApiResponse<T> extends BaseApiResponse<T> {
  constructor(
    public code: number,
    public message: string,
    public data?: T | null
  ) {
    super(ResponseStatus.success, code, message, data ?? null);
  }
  sendsuccessResponse(res: Response): void {
    res.status(this.code).json({
      status: this.status,
      code: this.code,
      message: this.message,
      data: this.data,
    });
  }
}

class ErrorApiResponse<T> extends BaseApiResponse<T> {
  constructor(public code: number, public message: string) {
    super(ResponseStatus.error, code, message);
  }

  sendErrorResponse(res: Response): void {
    res.status(this.code).json({
      status: this.status,
      code: this.code,
      message: this.message,
    });
  }
}

export { SuccessApiResponse, ErrorApiResponse };
