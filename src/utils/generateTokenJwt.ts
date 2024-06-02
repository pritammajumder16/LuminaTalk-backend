import jwt from "jsonwebtoken";
import { IUser } from "../interface/interface";

const generateToken = ({ userId, name, phoneNumber, countryCode }) => {
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({ id: userId }, secret, { expiresIn: "100y" });

  return token;
};

export { generateToken };
