import { Request, Response } from 'express';
import {
  BaseApiResponseInterface,
  ResponseStatus,
} from '../../interfaces/base-api-response.interface.js';

class ServerErrorUtility<T> {
  constructor(public err: T) {}
  private getErrorMessage(): string {
    if (this.err instanceof Error) {
      return 'Internal Server Error.';
    } else {
      return 'An unexpected error occurred.';
    }
  }
  serverError(req: Request, res: Response): void {
    const response: BaseApiResponseInterface = {
      status: ResponseStatus.error,
      message: this.getErrorMessage(),
    };
    res.status(500).json(response);
  }
}

export default ServerErrorUtility;
