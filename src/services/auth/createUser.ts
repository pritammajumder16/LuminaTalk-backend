import User from "../../models/User";
import { generateOtp } from "../../utils/generateOtp";
import sendSms from "../twilio/sendSms";
import { CreateUserBody } from "./d.dto";

export async function createUser(body: CreateUserBody) {
  if (!body.countryCode || !body.dob || !body.name || !body.phoneNumber) {
    throw new Error("country code, dob, name, phonenumber are required");
  }
  const { name, phoneNumber, countryCode, dob } = body;
  const otp = generateOtp();
  const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

  const newUser = new User({
    name,
    phoneNumber,
    countryCode,
    dob,
    isRegistered: false,
    otp,
    otpExpiresAt,
  });

  await newUser.save();
  await sendSms(
    body.countryCode + String(body.phoneNumber),
    `Your verification code for LuminaTalk is : ${generateOtp()}`
  );
  return newUser;
}
