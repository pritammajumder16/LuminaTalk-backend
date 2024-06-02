import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "../interface/interface";

const UserSchema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  countryCode: {
    type: String,
    required: true,
    default: "+91", // Default to India code
  },
  dateOfBirth: {
    type: Number,
    required: true,
  },
  otp: {
    type: Number,
    required: false,
  },
  otpExpiresAt: {
    type: Date,
    required: false,
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
});

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
