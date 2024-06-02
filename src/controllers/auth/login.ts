import { Router } from "express";
import { successResponse, errorResponse } from "../../utils/response";
import { sendOtp } from "../../services/auth/sendOtp";
import { verifyOtp } from "../../services/auth/verifyOtp";

const router = Router();

router.get("/verify-otp", async ({ query }, res) => {
  try {
    const registerDetails = await verifyOtp({
      phoneNumber: Number(query.phoneNumber as string),
      otp: Number(query.otp as string),
    });
    successResponse({ res, data: registerDetails });
  } catch (error) {
    errorResponse({ res, message: error.toString() });
  }
});

router.post("/send-otp", async ({ body }, res) => {
  try {
    const createUserDetails = await sendOtp(body);
    successResponse({ res, data: createUserDetails });
  } catch (error) {
    errorResponse({ res, message: error });
  }
});

export default router;
