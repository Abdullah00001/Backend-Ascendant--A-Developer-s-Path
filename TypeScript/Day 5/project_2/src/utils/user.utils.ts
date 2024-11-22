import { User } from '../models/user.models';

const enum UserVerifyStatus {
  unverified = 'Unverified',
  verified = 'Verified',
}

interface ResponseMessage {
  message: string;
  status: number;
  data?: User;
}

const httpresponse = (
  status: number,
  message: string,
  data?: User
): ResponseMessage => {
  if (data) {
    const response: ResponseMessage = {
      status,
      message,
      data,
    };
    return response;
  }
  const response: ResponseMessage = {
    status,
    message,
  };
  return response;
};

export { UserVerifyStatus, ResponseMessage, httpresponse };
