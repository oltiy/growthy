export interface User {
  userId: number;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  phoneNumber?: string;
  admin?: boolean;
}