import { Router } from "express";
import { errorResponse, successResponse } from "../../utils/response";
import { registerUser } from "../../services/auth/register";
import { createUser } from "../../services/auth/createUser";

const router = Router();

router.post("/", async ({ body }, res) => {
  try {
    console.log("/register route", body);

    const registerDetails = await registerUser(body);
    successResponse({ res, data: registerDetails });
  } catch (error) {
    errorResponse({ res, message: error.toString() });
  }
});

router.post("/create-user", async ({ body }, res) => {
  try {
    const createUserDetails = await createUser(body);
    successResponse({ res, data: createUserDetails });
  } catch (error) {
    errorResponse({ res, message: error });
  }
});

export default router;
