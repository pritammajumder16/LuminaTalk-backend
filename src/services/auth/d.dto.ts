export interface CreateUserBody {
  countryCode: string;
  phoneNumber: number;
  name: string;
  dob: number;
}

export interface RegisterUserBody {
  phoneNumber: number;
  otp: number;
}

export interface SendOtpBody {
  phoneNumber: number;
  countryCode: string;
}

export interface VerifyOtpBody {
  phoneNumber: number;
  otp: number;
}
