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
