import User from "../../models/User";
import { generateOtp } from "../../utils/generateOtp";
import sendSms from "../../utils/twilio/sendSms";
import { SendOtpBody } from "./d.dto";

export async function sendOtp(body: SendOtpBody) {
  const { phoneNumber, countryCode } = body;
  if (!phoneNumber || !countryCode) {
    throw new Error("Send valid body parameters");
  }

  const otp = generateOtp();
  const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes
  const userDetails = await User.findOneAndUpdate(
    { phoneNumber },
    { $set: { otp, otpExpiresAt } },
    { new: true, upsert: false }
  );
  if (!userDetails) {
    throw new Error("User not found");
  }
  await sendSms(
    countryCode + String(phoneNumber),
    `Your verification code for LuminaTalk is : ${generateOtp()}`
  );
  return {
    name: userDetails.name,
    phoneNumber: userDetails.phoneNumber,
    countryCode: userDetails.countryCode,
  };
}
