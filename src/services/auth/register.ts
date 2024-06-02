import User from "../../models/User";
import { generateToken } from "../../utils/generateTokenJwt";
import { RegisterUserBody } from "./d.dto";

export async function registerUser(body: RegisterUserBody) {
  const { phoneNumber, otp } = body;

  const user = await User.findOne({ phoneNumber });
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch =
    user.otp == Number(process.env.MASTER_OTP) || user.otp == otp
      ? true
      : false;
  if (!isMatch) {
    throw new Error("Invalid OTP");
  }

  const token = generateToken({
    userId: user._id.toString(),
    phoneNumber: user.phoneNumber,
    name: user.name,
    countryCode: user.countryCode,
  });
  await User.updateOne(
    { _id: user._id },
    { $set: { isRegistered: true } },
    { upsert: false }
  );
  return token;
}
