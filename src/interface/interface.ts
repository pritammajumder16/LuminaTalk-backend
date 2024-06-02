import { Response } from "express";
export interface ISuccessResponseBody {
  res: Response;
  data?: any;
  status?: number;
  message?: string;
}
export interface IErrorResponseBody {
  res: Response;
  status?: number;
  message?: string;
}
export interface IUser extends Document {
  name: string;
  phoneNumber: number;
  countryCode: string;
  dateOfBirth: number;
  otp: number;
  isRegistered: boolean;
  otpExpiresAt: Date;
}
