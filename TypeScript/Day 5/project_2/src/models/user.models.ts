import { UserVerifyStatus } from '../utils/user.utils';

interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  isVerified?: UserVerifyStatus;
}

export { User };
